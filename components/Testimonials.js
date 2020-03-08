import Testimonial from "../testimonial.json";

const testItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    border: '1px solid #DDD',
    borderRadius:"20px",
    marginBottom:20,
    padding:10,
}
const containerStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignSelf:"center",
    flexWrap:"wrap",
    maxWidth:1000,
    margin: "auto",
    paddingTop:20,
}
const testNameStyle = {
    textAlign: "right",
    padding:10,
    fontSize:18,
}

const testTestStyle = {
    textAlign: "center",
    padding:4,
    fontSize:24,
}



function testimonialItem(test){
    var name = test.name;
    var testimonial = test.testimonial;
    return(
        <div style = {testItemStyle}>
<div style = {testTestStyle}>{testimonial}</div>
            <div style = {testNameStyle}>{"- " + name}</div>
            
            
        </div>
        
    );
}
export default function Testimonials(){
    return(
        <div style = {containerStyle}>
            {Testimonial.map(test=>testimonialItem(test))}
        </div>
    );
}