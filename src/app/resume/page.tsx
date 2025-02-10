import Header from "../header";
import "../globals.css"


export default function Resume() {
    return (
        <div className={"text-center"}>
            <Header></Header>

            Resume not rendering?
            <br></br>
            <a href="/TKResumeN (1).pdf" download="/TKResumeN (1).pdf" style={{
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  }}>Click here to download the PDF!</a>
            <iframe
                src="/TKResumeN (1).pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF Viewer"
            ></iframe>
        </div>
    )
    
    
}