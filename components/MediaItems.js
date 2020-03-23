import Media from "../media.json";






function mediaItem(test){
    var Title = test.mediatitle;
    var Link = test.link;
    var imgSrc = test.img;
    return(
        <div key = {test.key}  className = "item">
            
            <div className = "mediaImg">
                {imgSrc ? <img onClick = {()=>window.open(Link)} className = "img" src = {require(""+imgSrc)}></img>:null}
            </div>
            <div className = "info">
                <div className = "title">{Title}</div>
                <div className = "link">{Link}</div>
            </div>
            {/*<div className = "link">{"- " + Link}</div>*/}
            <style jsx>{`
                .link {
                    margin-left:20px;
                    margin-right:20px;
                    font-size: 9pt;
                    color: rgb(100,100,100);
                    word-wrap: break-word;
                }
                .info {
                    padding:10px;
                    width: 100%;
                    background-color: rgb(215,215,215);
                }
                .mediaImg {
                    font-size:0px;
                    margin: 0px;
                    width: 100%;
                }
                .img {
                    width:100%;
                }
                .title {
                    margin-left:20px;
                    font-size:20pt;
                    font-weight: 600;
                }
                .item{
                    border: #ddd .5pt solid;
                    overflow: hidden;
                    border-radius: 25px;
                    margin:10px;
                    max-width: 465px;
                    justify-content:right;
                }
            `}</style>
        </div>
        
    );
}




export default function MediaItems(){
    return(
        <div className = "container">
            {Media.map(media=>mediaItem(media))}
            <style jsx>{`
                .container {
                    display:flex;
                    flex-direction:row;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    align-items:flex-start;
                }
            `}</style>
        </div>
    );
}