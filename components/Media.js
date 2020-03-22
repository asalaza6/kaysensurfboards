import Media from "../media.json";






function mediaItem(test){
    var Title = test.mediatitle;
    var Link = test.link;
    var imgSrc = test.img;
    return(
        <div className = "container">
            <div className = "title">{Title}</div>
            <div className = "mediaImg">
                {imgSrc ? <img onClick = {()=>window.open(Link)} className = "img" src = {require(""+imgSrc)}></img>:null}
            </div>
            {/*<div className = "link">{"- " + Link}</div>*/}
            <style jsx>{`
                .mediaImg {
                    width: 100%;
                }
                .img {
                    width:100%;
                }
                .title {
                    font-size:20pt;
                    font-weight: bold;
                }
                .container{
                    text-align:center;
                    width:100%;
                }
            `}</style>
        </div>
        
    );
}




export default function Medias(){
    return(
        <div >
            {Media.map(media=>mediaItem(media))}
        </div>
    );
}