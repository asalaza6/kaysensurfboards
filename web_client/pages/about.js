
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
        <div className = "rowFlex">
          <div className = "mainText">
            {"Chris Kaysen has been shaping surfboards in San Clemente for 35 years. With 1000's of boards and counting, you can trust Chris to shape a surfboard to fit your exact needs!"}
          </div>
          <div className = "mainImage">
            <img className = "image" src = {bioImages[0].file}/>
          </div>
        </div>
        <div className = "slideFlex">
          <div className = "slideImage"style = {{flex:19.7}}>
            <img className = "image" src = {bioImages[5].file}/>
          </div>
          <div className = "slideImage"style = {{flex:18}}>
            <img className = "image" src = {bioImages[1].file}/>
          </div>
          <div className = "slideImage"style = {{flex:21}}>
            <img className = "image" src = {bioImages[6].file}/>
          </div>
        </div>
        <div className="slideDescription">
          At Kaysen Surfboards we guarantee quality surfboards whether your competiing at a pro tournament or spending a fun Saturday at Newport Beach!
        </div>
        <div className = "slideFlex">
          <div className = "slideImage" style = {{flex:16.2}}>
            <img className = "image" src = {bioImages[4].file}/>
          </div>
          <div className = "slideImage" style = {{flex:21}}>
            <img className = "image" src = {bioImages[2].file}/>
          </div>
          <div className = "slideImage" style = {{flex:14.1}}>
            <img className = "image" src = {bioImages[3].file}/>
          </div>
        </div>
        <div className="slideDescription">
          We make it easy for you to order, design and communicate with the building process in order to ensure an amazing experience!
        </div>
      {/* {bioImages.map((img,index)=>{
        return(<div key = {index} id = {img.style}>
          <div  className = "picture">
            <img className = "image" src = {img.file}/>
          </div>
          <div className = "text">
            {img.desc}
          </div>
        </div>);
      })} */}
        <style jsx>{`
          .rowFlex{
            width:100%;
            display:flex;
            flex-direction:row;
            justify-content: center;
            max-width: 1000px;
          }
          .mainText{
            padding:15px;
            flex: 1;
            display: flex;
            font-family: 'BalooThambi';
            align-items: center;
            padding:10px;
          }
          .mainImage {
            flex: 1;
          }
          .slideFlex{
            width:100%;
            display:flex;
            flex-direction:row;
            justify-content: center;
            max-width: 1000px;
          }
          .slideDescription {
            width:100%;
            display: flex;
            font-family: 'BalooThambi';
            justify-content:center;
            margin:40px;
            text-align:space-evenly;
          }
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
            width:100%;
          }
        `}</style>
      </div>
  );
}