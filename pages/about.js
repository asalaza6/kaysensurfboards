
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
        <p className = "topelement1">Chris Kaysen has been shaping surfboards in San Clemente for 35 years. With 100,000 boards and counting, you can trust Chris to shape a surfboard to fit your exact needs...</p>
        <div className = "topelement2"><img className = "image" src = {frontalImage}></img></div>
        <style jsx>{`
          .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .top{
            display: flex;
            flex-direction: row;
          }
          .topelement1{
            flex: 3;
          }
          .topelement2{
            flex: 2;
          }
          .image {
            width:100%;
          }
        `}</style>
      </div>
  );
}