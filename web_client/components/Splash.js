import React from 'react';
import splashSrc from '../public/splashpic.jpg';

class Splash extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      imgWidth:0,
      imgHeight:0,
      width:0,
      height:0,
      horizontal:0
    }
    this.updateDim = this.updateDim.bind(this);
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  componentDidMount(){
    this.updateDim();
    window.addEventListener('resize', this.updateDim);
  }

  updateDim(){
    this.setState({width:window.innerWidth,height:window.innerHeight})
    if(this.state.width/this.state.height < this.state.imgWidth/this.state.imgHeight){
      this.setState({horizontal:true});
    }else {
      this.setState({horizontal:false});
    }
  }

  async onImgLoad({target:img}) {
    await this.setState({imgHeight: img.offsetHeight, imgWidth: img.offsetWidth});
    this.updateDim();
  }
  render(){
    return (
            <div style = {splash}>
                <div style = {splashImgContainer}>
                
                <img onLoad = {this.onImgLoad} style = {this.state.horizontal?{splashImg1}:{splashImg2}} src = {splashSrc} alt="Logo"></img> 
                </div>
                
            </div>
  )
}
}
//
const splash = {
    minHeight: "75vh",
    width:"100%",
  }
const splashImgContainer =  {
    height:"100vh",
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    justifyContent:"center",
  }
const splashText ={
    
    margin:"auto",
    maxWidth:1000,
    border: '1px solid #DDD',
    textAlign: "center",
    position: "relative",
    //fontFamily:  $fontFamily,
      fontSize: 30,
  }
const splashImg1 ={
    height:"100%",
    width:"auto",
  }
const splashImg2= {
    height:"auto",
    width:"100%",
  }
export default Splash;
