import React from 'react';
const slideImages = [
    {image: '/images/slideshow/surf1.jpeg',
    desc: 'Custom Kaysen Surfboard in action!'},
    {image: '/images/slideshow/surf2.jpeg',
    desc: 'Custom Kaysen Surfboard in action!'},
    {image: '/images/slideshow/surf3.jpeg',
    desc: 'Custom Kaysen Surfboard in action!'},
    {image: '/images/slideshow/surf4.jpeg',
    desc: 'Custom Kaysen Surfboard in action!'},
    {image: '/images/slideshow/surf5.jpeg',
    desc: 'Custom Kaysen Surfboard in action!'},
    {image: '/images/slideshow/surf6.jpeg',
    desc: 'A Kaysen Surfboard Collection because just one custom Kaysen Surfboard is not enough!'}
];

class Slideshow extends React.Component {
  constructor(props){
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.timerNext = this.timerNext.bind(this);
    this.state = {
        position: 2,
        length: slideImages.length,
        changed: false,
        selected: false
    }
    this.interval;
    this.imageClick = this.imageClick.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
  }
  imageClick(){
    this.stopInterval();
    this.setState({selected: true});
  }
  onNext(){
    this.setState({changed: true,position:((this.state.position + 1)%this.state.length)});
  }
  onPrev(){
    this.setState({changed: true,position:(this.state.position == 0 ? this.state.length-1: this.state.position-1)});
  }
  timerNext(){
    //if changed previously, then change on next cycle
    if(this.state.changed){
        this.setState({changed: false});
    }else{
        this.setState({position:(this.state.position == 0 ? this.state.length-1: this.state.position-1)});
    }
  }
  startInterval(){
    this.interval = setInterval(() => this.timerNext(), 3500);
  }
  stopInterval(){
    clearInterval(this.interval);
  }
  componentDidMount(){
    this.startInterval();
  }
  componentWillUnmount(){
    this.stopInterval();
  }

  

  render(){
    return (
        <div className = "navContainer">
                {this.state.selected?
                <div className = "imageOpen" onClick = {()=>{this.setState({selected:false});this.startInterval();}}>
                    <div className = "imageOpenImg">
                        <img className = "img" src = {slideImages[this.state.position].image}/>
                    </div>
                    <div className="imageOpenDesc">
                        {slideImages[this.state.position].desc}
                    </div>
                </div>:null}
                <div className = "slideshow">
                    <div className = "navigationArrows" onClick = {this.onNext}>
                        <img className = "imgArrow" src = "/left-arrow.svg"/>
                    </div>
                    <div onClick={()=>{this.imageClick()}} className = "slideImage">
                        <img className = "img" src = {slideImages[this.state.position].image}/>
                        <div className = "imgDesc">{slideImages[this.state.position].desc}</div>
                    </div>
                    <div className = "navigationArrows"  onClick = {this.onPrev}>
                        <img className = "imgArrow" src = "/right-arrow.svg"/>
                    </div>
                </div>
                
            <style jsx >{`
                @font-face {
                    font-family: 'BalooThambi';
                    src:url('/fonts/BalooThambi2-Regular.ttf');
                }
                @font-face {
                    font-family: 'BalooThambi-SemiBold';
                    src:url('/fonts/BalooThambi2-SemiBold.ttf');
                }
                .slideshow {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    
                    max-width: 700px;
                    align-items: stretch;
                    justify-content: center;
                }
                .navigationArrows {
                    flex:1;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    max-width:25px;
                    padding:10px;
                    
                }
                .slideImage {
                    flex:10;
                    position: relative;
                }
                .imageOpen {
                    
                    position: fixed;
                    width:100%;
                    height:100%;
                    left: 0;
                    top: 0;
                    overflow-y:scroll;
                    overflow-x:hidden;
                    display:flex;
                    flex-direction:column;
                    align-items: center;
                    justify-content: center;
                    z-index:3;
                    background-color: rgba(255,255,255,.9);
                }
                .imageOpenDesc {
                    font-size: 15pt;
                    color: black;
                    font-family: 'BalooThambi';
                    padding:20px;  
                    max-width: 600px;   
                }
                .imageOpenImg{
                    padding:10px; 
                    max-width: 400px;      
                }
                .imgArrow {
                    width: 100%;
                    vertical-align: middle;
                    -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
                }
                .navContainer {
                    justify-content: center;
                    align-content: center;
                    text-align: center;
                    
                }
                .img {
                    width: 100%;
                    
                    max-width: 700px;
                }
                .img2 {
                    flex-shrink: 0;
                }
                .imgDesc {
                    position: relative;
                    font-size: 15pt;
                    font-family: 'BalooThambi';
                }
            `}</style>
        </div>
    )
  }
}

export default Slideshow;