import React from "react";
import "./Loader.css";
import { Oval } from 'react-loader-spinner';


function LoadingSpinner() {
  return (
    <div className="top-loading-bar">
      <Oval
        height={50}
        width={50}
        color="#FFFFFF"
        wrapperStyle={{}}
        wrapperClass=""
        // visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#CD154F"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />

    </div>
  );
}

export { LoadingSpinner };