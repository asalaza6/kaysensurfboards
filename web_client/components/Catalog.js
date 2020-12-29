import Boards from "../boards.json";
import configs from "../config.js";
import Link from 'next/link';
const boardStyles = [
    "shortboard",
    "longboard",
    "fish",
    "midlength",
    "hybrid"
];
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
    maxWidth:1000
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
        <Link key = {key}  href = {`/board/${style}/${key}`}><div className = "container">
            
            {imgSrc ? <img  className = "img" src = {imgSrc}></img>:null}
            <div  className = "name">{name}</div>
            {/* <a  className = "style">{"Style: " + style}</a>
            <a  className = "tech"> {"Technology: " + tech}</a>
            <a  className = "dim">{"Dimensions: " + dimension}</a> */}
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
                    font-size:20pt;
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
                    max-width:465px;
                    width:100%;
                    border: 1px solid #DDD;
                    border-radius:20px;
                    
                }
                
            `}</style>
        </div>
        </Link>
        
    );
}
export default class Catalog extends React.Component{
    //console.log(Boards.toString());
    render(){
        return(
            <div className = "container">
                <div className = "title">Short Boards</div>
                <div className = "boardContainer">
                    {Boards.shortboard.map(board=>boardItem(board))}
                </div>
                <div className = "title">Fish Boards</div>
                <div className = "boardContainer">
                    {Boards.fish.map(board=>boardItem(board))}
                </div>
                <div className = "title">Hybrid Boards</div>
                <div className = "boardContainer">
                    {Boards.hybrid.map(board=>boardItem(board))}
                </div>
                <div className = "title">Long Boards</div>
                <div className = "boardContainer">
                    {Boards.longboard.map(board=>boardItem(board))}
                </div>
                <style jsx>{`
                    @font-face {
                        
                        font-family: 'BalooThambi-SemiBold';
                        src:url('/fonts/BalooThambi2-SemiBold.ttf');
                        }
                    }
                    .title {
                        text-align: center;
                        padding:10;
                        font-size:28pt;
                        font-family: 'BalooThambi-SemiBold';
                        border-bottom: 1px #DDD solid;
                    }
                    .container {
                        
                        display: flex;
                        flex-direction:column;
                        justify-content:space-evenly;
                        align-self:center;
                        flex-wrap:wrap;
                        margin: auto;
                        width:90%;
                    }
                    .boardContainer {
                        
                        display: flex;
                        flex-direction:row;
                        justify-content:space-evenly;
                        align-self:center;
                        flex-wrap:wrap;
                        max-width:1000;
                        margin: auto;
                    }
                    .title {

                    }
                `}</style>
            </div>
        )
                }
}
