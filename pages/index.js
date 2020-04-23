
import Catalog from "../components/Catalog";
import Splash from "../components/Splash";
import React from 'react';
import Slideshow from "../components/Slideshow";

export default function Index() {
  
  return (
    <div>
      <Slideshow/>

      <div className = "message">Website currently under construction</div>
      <style jsx>{`
      .message {
        
        font-size:24pt;
      }`}</style>
    </div>
  );
}