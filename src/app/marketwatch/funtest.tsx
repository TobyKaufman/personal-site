import React, { useState } from 'react';

interface ScrapedContent {
  html: string;
  url: string;
}

const WebScraper: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [scrapedContent, setScrapedContent] = useState<ScrapedContent | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://127.0.0.1:5000/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch data');
      }
      
      setScrapedContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Web Scraper</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to scrape"
            className="flex-1 p-2 border rounded"
            required
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading ? 'Scraping...' : 'Scrape'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {scrapedContent && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Scraped Content from {scrapedContent.url}</h2>
          <div className="border p-4 rounded bg-gray-50 overflow-auto max-h-96">
            <iframe
              srcDoc={scrapedContent.html}
              title="Scraped content"
              className="w-full h-96 border-0"
              sandbox="allow-same-origin"
            />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-500">View Raw HTML</summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto max-h-96 text-sm">
              {scrapedContent.html}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default WebScraper;