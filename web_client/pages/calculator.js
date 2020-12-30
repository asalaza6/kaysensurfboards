
import React from 'react';

// import Canvas from "../components/Graph3";

export default function Index() {
  
  return (
    <div className = "container">
       <div className = "message">Welcome to the Volume Calculator!</div>
      {/* <iframe src={__html}/> */}
      {/* <Canvas/> */}
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