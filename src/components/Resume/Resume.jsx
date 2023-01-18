import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import './Resume.css'



export default function Resume() {
    
    const docs = [
        { uri: require('../../Files/ProfessionalResume.pdf')}
      ];

    return (

        <>
        <h2 class='my-3'>Resume</h2>

        

        {/* {<button className='btn btn-outline-dark'>
            <a href={require('../../Files/ProfessionalResume.pdf')} download='Dylan-Poole-Resume'>
                Resume Download
            </a>
        </button>} */}
    <div class='my-3'>
        { <DocViewer documents={docs} initialActiveDocument={docs[1]} 
        pluginRenderers={DocViewerRenderers} 
        config={{
            header: {
                disableFileName:true
  
            },
            pdfZoom: {
                defaultZoom: 1
            },
            }}
            /> }
    </div>
            
        </>
        
    )
}