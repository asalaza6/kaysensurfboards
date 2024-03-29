
import Catalog from "../components/Catalog";
import Splash from "../components/Splash";
import React from 'react';
import Slideshow from "../components/Slideshow";

export default function Index() {
  
  return (
    <div className = "container">
       <div className = "message">Welcome to Kaysen Surfboards! <br/>Home to the best surfboards on the planet!</div>
      <Slideshow/>

     
      <style jsx>{`
      @font-face {
        font-family: 'BalooThambi';
        src:url('/fonts/BalooThambi2-Regular.ttf');
      }
      @font-face {
          font-family: 'BalooThambi-SemiBold';
          src:url('/fonts/BalooThambi2-SemiBold.ttf');
        }
      }
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      .message {
        padding: 10px;
        width: 80vw;
        text-align: center;
        font-size:20pt;
        font-family: 'BalooThambi';
      }`}</style>
    </div>
  );
}