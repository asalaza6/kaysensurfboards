import Boards from "../boards.json";
import configs from "../config.js";

const boardItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
}
const containerStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignSelf:"center",
    flexWrap:"wrap",
    maxWidth:1000,
    margin: "auto"
}
const boardNameStyle = {
    textAlign: "center",
    padding:10,
    fontSize:24,
}
const boardStyleStyle = {
    textAlign: "center",
    padding:4,
    fontSize:18,
}
const boardTechStyle = {
    textAlign: "center",
    padding:4,
    fontSize:18,
}
const boardDimStyle = {
    textAlign: "center",
    padding:4,
    fontSize:18,
}
const boardImgStyle = {
    maxWidth:465,
    width:"98%",
    border: '1px solid #DDD',
    borderRadius:"20px",
}


function boardItem(Board){
    var name = Board.boardname;
    var style = Board.style;
    var tech = Board.technology;
    var dimension = Board.dimension;
    var imgSrc = Board.img;
    var key = Board.key;
    return(
        <div key = {key} className = "container">
            
            <div  className = "name">{name}</div>
            {imgSrc ? <img  className = "img" src = {configs.images.location+imgSrc}></img>:null}
            <a  className = "style">{"Style: " + style}</a>
            <a  className = "tech"> {"Technology: " + tech}</a>
            <a  className = "dim">{"Dimensions: " + dimension}</a>
            <style jsx>{`
                @font-face {
                    font-family: 'BalooThambi';
                    src:url('/fonts/BalooThambi2-Regular.ttf');
                    font-weight: bold;
                    }
                @font-face {
                    
                    font-family: 'BalooThambi-SemiBold';
                    src:url('/fonts/BalooThambi2-SemiBold.ttf');
                    }
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    margin: 10px;
                }
                .name {
                    text-align: center;
                    padding:10;
                    font-size:24pt;
                    font-family: 'BalooThambi-SemiBold';
                }
                .style  {
                    text-align: center;
                    padding:4;
                    font-size:18pt;
                    font-family: 'BalooThambi';
                    
                }
                .tech  {
                    text-align: center;
                    padding:4;
                    font-size:18pt;
                    font-family: 'BalooThambi';
                }
                .dim  {
                    text-align: center;
                    padding:4;
                    font-size:18pt;
                    font-family: 'BalooThambi';
                }
                .img  {
                    max-width:465;
                    width:100%;
                    border: 1px solid #DDD;
                    border-radius:20px;
                    
                }
                
            `}</style>
        </div>
        
    );
}
export default function Catalog(){
    //console.log(Boards.toString());
    return(
        <div className = "container">
            {Boards.map(board=>boardItem(board))}
            <style jsx>{`
                
                .container {
                    
                    display: flex;
                    flex-direction:row;
                    justify-content:space-evenly;
                    align-self:center;
                    flex-wrap:wrap;
                    max-width:1000;
                    margin: auto;
                }
            `}</style>
        </div>
    );
}
