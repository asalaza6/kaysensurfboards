
import frontalImage from "../public/aboutfront.jpg"


const imgStyle = {
  width:1000,
}

const contain = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
}

export default function About() {
  return (
      <div className = "container">
        <p className = "text">Chris Kaysen has been shaping surfboards in San Clemente for 35 years. With 100,000 boards and counting, you can trust Chris to shape a surfboard to fit your exact needs...</p>
        <div className = "pciture"><img className = "image" src = {frontalImage}></img></div>
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
          .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .top{
            display: flex;
            flex-direction: row;
          }
          .text{
            flex: 3;
            font-family: 'BalooThambi';
          }
          .picture{
            flex: 2;
          }
          .image {
            max-width: 500px;
            width:100%;
          }
        `}</style>
      </div>
  );
}