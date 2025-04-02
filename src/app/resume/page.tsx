import Header from "../header";
import "../globals.css"


export default function Resume() {
    return (
        <div className={"text-center"}>
            <Header></Header>

            Resume not rendering?
            <br></br>
            <a href="/resume.pdf" download="/resume.pdf" style={{
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  }}>Click here to download the PDF!</a>
            <iframe
                src="/resume.pdf"
                width="60%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF Viewer"
                className="mx-auto"
            ></iframe>
        </div>
    )
    
    
}