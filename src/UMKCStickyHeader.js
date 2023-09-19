import React from 'react';
import './UMKCStickyHeader.css';

function UMKCStickyHeader() {
    return (
      <div className="container-fluid sd-sticky-header bg-umkc-blue" style={{ display: "block", position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ display: "flex", alignItems: "flex-end", padding: "16px", marginLeft: "25px" }}>
          
          <div className="logo" style={{ marginRight: "80px" }}>  {/* Adjusted the marginRight here */}
            <a className="navbar-brand" href="https://www.umkc.edu/index.html" target="_parent" rel="noopener noreferrer">
              <img alt="UMKC Logo" className="img-fluid" 
                   src="https://www.umkc.edu/global-assets/images/UMKC_white_cropped.png" 
                   title="UMKC Logo" 
                   style={{ margin: 0, width: "120px", height: "auto" }} />
            </a>
          </div>
  
          <h2 style={{ margin: 0, marginLeft: "25px", fontSize: "35px" }}>
          <span className="text-white" role="button" tabIndex="0">Job Evaluation</span>
          </h2>
        </div>
      </div>
    );
}


  export default UMKCStickyHeader;