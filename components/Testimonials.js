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
        <div key = {test.key} className = "item">
<div className = "testimonial">{testimonial}</div>
            <div className = "rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className = "name">{"- " + name}</div>
            <style jsx>{`
                .item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    border: 1px solid #DDD;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    padding: 10px;
                }
                .rating {
                    text-align: right;
                    font-size: 15pt;
                }
                .testimonial {
                    text-align: center;
                    padding:4px;
                    font-size:10pt;
                    
                }
                .name {
                    text-align: right;
                    padding:10;
                    font-size:12pt;
                }
            `}</style>
        </div>
        
    );
}
export default function Testimonials(){
    return(
        <div className = "containerStyle">
            {Testimonial.map(test=>testimonialItem(test))}
    <style jsx >{`
        .containerStyle {
            display: flex;
            flex-direction: column;
            justifyContent: space-evenly;
            alignSelf: center;
            flexWrap: wrap;
            maxWidth: 1000;
            margin: auto;
            paddingTop: 20;
        }
    `}</style>
        </div>
    );
}