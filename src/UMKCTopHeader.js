import React from 'react';
import './UMKCTopHeader.css';


function UMKCTopHeader() {
  return (
    <div className="container-fluid sd-top-header bg-umkc-blue header-blue-strips bg-diagonal-lines" id="header">
      <div className="row p-2 umkc-header-container">
        <div className="col-lg-6 align-self-center text-md-left text-center">
          <h1 className="umkc-header">
            <a className="text-white" href="https://www.umkc.edu/">UNIVERSITY OF MISSOURI-KANSAS CITY</a>
          </h1>
        </div>
        <div className="col-lg-6 align-self-center text-md-left text-center umkc-search-container">
          <div id="gcse-searchbox-only"></div>
        </div>
      </div>
    </div>
  );
}

export default UMKCTopHeader;