import Link from 'next/link';
import Technology from '../../technology';

import React from 'react';
import { composePlugins } from 'next-compose-plugins/lib/compose';

export default function Index() {
  const keys = Object.keys(Technology);
  // // console.log(keys);
  // keys.map(x=>{console.log(x)});
  return (
    <div className = "container">
       <div className = "title">Technology Options</div>
       {keys.map((tech,key)=>{return (
         <Link key = {key}  href = {`/technology/${tech}`}>
           <div className = "tech">{tech}</div>
         </Link>
         )
       })}

     
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
      .title {
        padding: 10px;
        width: 80vw;
        text-align: center;
        font-size:20pt;
        font-family: 'BalooThambi';
      }
      .tech {
        padding: 10px;
        width: 80vw;
        background-color:#DDD;
        border-radius: 10px;
        margin:10px;
        color:black;
        text-align: center;
        font-size:20pt;
        font-family: 'BalooThambi';
      }
      `}</style>
    </div>
  );
}