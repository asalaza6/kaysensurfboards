import Boards from "../boards.json";

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
        <div key = {key} style = {boardItemStyle}>
            
            <div style = {boardNameStyle}>{name}</div>
            {imgSrc ? <img style = {boardImgStyle} src = {require(""+imgSrc)}></img>:null}
            <a style = {boardStyleStyle}>{"Style: " + style}</a>
            <a style = {boardTechStyle}>{"Technology: " + tech}</a>
            <a style = {boardDimStyle}>{"Dimensions: " + dimension}</a>
            
        </div>
        
    );
}
export default function Catalog(){
    console.log(Boards.toString());
    return(
        <div style = {containerStyle}>
            {Boards.map(board=>boardItem(board))}
        </div>
    );
}