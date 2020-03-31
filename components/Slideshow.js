import React from 'react';
const slideImages = [
    'surf1.jpg',
    'surf2.jpg',
    'surf3.jpg',
    'surf4.jpg'
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
        changed: false
    }
    this.interval;
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
  componentDidMount(){
    this.interval = setInterval(() => this.timerNext(), 3500);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
        <div className = "navContainer">
                
                <div className = "slideshow">
                    <div className = "navigationArrows" onClick = {this.onNext}>
                        <img className = "imgArrow" src = "/left-arrow.svg"/>
                    </div>
                    <div className = "slideImage">
                        <img className = "img" src = {slideImages[this.state.position]}></img>
                    </div>
                    <div className = "navigationArrows"  onClick = {this.onPrev}>
                        <img className = "imgArrow" src = "/right-arrow.svg"/>
                    </div>
                </div>
            <style jsx >{`
                .navigationArrows {
                    width: 40px;
                    display: flex;
                    justify-content: center;
                    
                }
                .slideImage {
                    width: 100%;
                }
                .imgArrow {
                    width: 100%;
                    vertical-align: middle;
                    margin : auto;
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
                .slideshow {
                    display: flex;
                    flex-direction: row;
                    margin: auto;
                    max-width: 700px;
                    width: 100%;
                }
                .img {
                    width: 100%;
                }
            `}</style>
        </div>
    )
  }
}

export default Slideshow;