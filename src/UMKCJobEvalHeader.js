import React from 'react';
import './UMKCJobEvalHeader.css';

function UMKCJobEvalHeader() {
    return (
      <div className="container-fluid bg-umkc-blue" style={{ display: "block", borderBottom: '10px solid #fdd446', top: 0, zIndex: 1000 }}>
        <div style={{ display: "flex", alignItems: "flex-end", padding: "16px", marginLeft: "55px" }}>
          
          <div className="logo" style={{ marginRight: "8px" }}>
            <a className="navbar-brand" href="https://www.umkc.edu/index.html" target="_parent" rel="noopener noreferrer">
              <img alt="UMKC Logo" className="img-fluid" 
                   src="https://www.umkc.edu/global-assets/images/UMKC_white_cropped.png" 
                   title="UMKC Logo" 
                   style={{ margin: 0, width: "180px", height: "auto" }} />
            </a>
          </div>
  
          <h2 style={{ margin: 0, fontSize: "55px" }}>
          <span className="text-white" role="button" tabIndex="0">Job Evaluation</span>
          </h2>
        </div>
      </div>
    );
  }

  export default UMKCJobEvalHeader;