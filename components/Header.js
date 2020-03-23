import React from 'react';
import Link from 'next/link';

import Splash from './Splash';
import menuButton from "../public/menu.svg";
import logo from "../public/logo.png";

class Navbar extends React.Component {

  constructor(){
    super();
    this.scrollTo = this.scrollTo.bind(this);
    this.nav = React.createRef();
    this.state = {
      width: 500,
      height:0,
      mobile:false,
      open: false
    }
    this.handleResize = this.handleResize.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }
  componentDidMount(){
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize,false);
    
    
    this.setState({ width: this.nav.current.clientWidth});
    this.setState({ height: this.nav.current.clientHeight});
    
    if(this.nav.current.clientWidth < 550){
      this.setState({ mobile: true});
      
    }else{
      this.setState({ mobile: false});
    }
  }
  componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize,false);
  }
  componentDidUpdate(){
    //this.handleResize();
  }
  componentWillUnmount(){
    //window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleResize(){
    
    this.setState({ width: this.nav.current.clientWidth});
    this.setState({ height: this.nav.current.clientHeight});
    
    if(this.state.mobile != this.state.width < 550){
      this.setState({ mobile: !this.state.mobile});
    }
    
  }

  openMenu(){
    this.setState({ open: !this.state.open});
  }

  scrollTo(Top){
    //console.log(Top,this.state.height);
    var height = this.state.height>550?this.state.height:0;
    window.scroll({
      left:0,
      top:Top-height,
      behavior:"smooth"});
  }
  
  render(){
  return (
    
    <div id = "navContainer" ref = {this.nav}>
      {this.state.mobile?
        <div id = "navMobileInner">
          <div className = "logo">
          <img onClick = {()=>{this.openMenu()}} className = "img" src = {logo}></img> 
          </div>
          <div className = "menu">
            <div className = "menuButton">
              <img onClick = {()=>{this.openMenu()}} className = "img" src = {menuButton}></img>  
            </div>
            {this.state.open ? 
              <div>
                <Link href = "/"><span onClick = {()=>{this.openMenu();this.scrollTo(0);}} className = "navMenuItem">Home</span></Link>
                <Link href = "/about"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">About</span></Link>
                <Link href = "/testimonials"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Testimonials</span></Link>
                <Link href = "/media"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Media</span></Link>
                <Link href = "/contact"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Contact</span></Link>
              </div>
            :
              null}
          </div>
        </div>
        :
      <div id = "navInner">
        <div className = "logo">
          <img onClick = {()=>{this.openMenu()}} className = "img" src = {logo}></img> 
        </div>
        <Link href = "/"><span className = "navItem">Home</span></Link>
        <Link href = "/about"><span className = "navItem">About</span></Link>
        <Link href = "/testimonials"><span className = "navItem">Testimonials</span></Link>
        <Link href = "/media"><span className = "navItem">Media</span></Link>
        <Link href = "/contact"><span className = "navItem">Contact</span></Link>
      </div>
      }
      <style jsx>{`
        .menu {
          top:20px;
          position: fixed;
        }
        .logo {
          height: 10vh;
        }
        .img {
            height:100%;
          }
          .menuButton{
            width: 30px;
            height: 30px;
          }
        #navContainer {
            margin: 20px;
            right: 0;
            z-index: 1;
            left:0;
            top:0;
            position: absolute;
            height: 10vh;
          }
          #navInner {
            left:0;
            border-bottom: 1pt #DDD solid;
            height: 10vh;
            right: 20px;
            left: 20px;
            display:flex;
            flex-direction:row;
          }
          #navMobileInner {
            height: 10vh;
            
            justify-content: center;
            text-align: center;
            display:flex;
            flex-direction:column;
          }
          .navItem {
            height:100%;
            position: relative;
            align-items: center;
            justify-content: center;
            flex: 1;
            display: flex;
            background-color: white;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            @extend .normalText;
          
            
          }
          .navMenuItem {
            position: relative;
            align-items: center;
            justify-content: center;
            flex: 1;
            display: flex;
            color: black;
            height:30px;
            width: calc(100vw - 40px);
            background-color: rgba(255,255,255, 0.8);
            border-bottom: .5pt #DDD solid;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            @extend .normalText;
          
            
          }
      `}</style>
    </div>
  )
  }
}



export default Navbar;
