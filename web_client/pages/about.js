
const bioImages = [
  {
    file:"/images/bio/bio1.jpeg",
    desc:"Chris Kaysen has been shaping surfboards in San Clemente for 35 years. With 100,000 boards and counting, you can trust Chris to shape a surfboard to fit your exact needs...",
    style:"left"
  },
  {
    file:"/images/bio/bio2.jpeg",
    desc:"sample description",
    style:"bottom"
  },
  {
    file:"/images/bio/bio3.jpeg",
    desc:"sample description for biography/ about page.",
    style:"right"
  },
  {
    file:"/images/bio/bio4.jpeg",
    desc:"sample description for biography/ about page.",
    style:"bottom"
  },
  {
    file:"/images/bio/bio5.jpeg",
    desc:"sample description for biography/ about page.",
    style:"left"
  },
  {
    file:"/images/bio/bio6.jpeg",
    desc:"sample description for biography/ about page.",
    style:"bottom"
  },
  {
    file:"/images/bio/bio7.jpeg",
    desc:"sample description for biography/ about page.",
    style:"right"
  },
  {
    file:"/images/bio/bio8.jpeg",
    desc:"sample description for biography/ about page.",
    style:"bottom"
  },
  {
    file:"/images/bio/bio9.jpeg",
    desc:"sample description for biography/ about page.",
    style:"left"
  },
]

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
        {bioImages.map((img,index)=>{
          return(<div key = {index} id = {img.style}>
            <div  className = "picture">
              <img className = "image" src = {img.file}/>
            </div>
            <div className = "text">
              {img.desc}
            </div>
          </div>);
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
          .container{
            margin:5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #left{
            flex-direction: row-reverse;
            display:flex;
          }
          #right{
            flex-direction: row;
            display:flex;
          }
          .bottom{
            flex-direction: column;
            display:flex;
          }
          .top{
            display: flex;
            flex-direction: row;
          }
          .text{
            padding:5px;
            flex: 1;
            justify-content:
            display: flex;
            font-family: 'BalooThambi';
            align-items: center;
          }
          .picture{
            flex: 4;
          }
          .image {
            max-width: 500px;
            width:100%;
          }
        `}</style>
      </div>
  );
}