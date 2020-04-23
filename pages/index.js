
import Catalog from "../components/Catalog";
import Splash from "../components/Splash";
import React from 'react';
import Slideshow from "../components/Slideshow";

export default function Index() {
  
  return (
    <div>
       <div className = "message">Website currently under construction</div>
      <Slideshow/>

     
      <style jsx>{`
      .message {
        padding: 10px;
        text-align: center;
        font-size:24pt;
      }`}</style>
    </div>
  );
}