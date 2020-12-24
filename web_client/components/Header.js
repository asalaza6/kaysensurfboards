import React from 'react';
import Link from 'next/link';

import Splash from './Splash';
import menuButton from "../public/menu.svg";
import logo from "../public/logo2.png";
class Dropdown extends React.Component {
  constructor(){
    super();
    this.state={
      open:false
    }
  }
  
  openMenu(){
    this.setState({ open: !this.state.open});
  }
  render(){
    return(
      <div id = "navItem">
        <div className = {this.state.open?"hue":null} id = "menu">
          <Link href = "/boards"><span className = "navItem">SurfBoards</span></Link>
          {this.state.open ? 
            <div className ="openedMenu">
              <Link href = "/"><span onClick = {()=>{this.openMenu();this.scrollTo(0);}} className = "navMenuItem">Home</span></Link>
              <Link href = "/about"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">About</span></Link>
              <Link href = "/boards"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Surfboards</span></Link>
              <Link href = "/testimonials"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Testimonials</span></Link>
              <Link href = "/media"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Media</span></Link>
              <Link href = "/contact"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Contact</span></Link>
            </div>
          :
            null
          }
        </div>
        <style jsx>{`
          .navItem {
            height:100%;
            position: relative;
            align-items: center;
            justify-content: center;
            flex: 1;
            display: flex;
            border: 1pt white solid;
            background-color: black;
            color:white;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            @extend .normalText;
            font-family: 'BalooThambi-SemiBold';
            font-size: 15pt;
          }`
          }</style>
      </div>
    )
  }
}
class Navbar extends React.Component {

  constructor(){
    super();
    this.scrollTo = this.scrollTo.bind(this);
    this.nav = React.createRef();
    this.state = {
      width: 500,
      height:0,
      mobile:false,
      open: false,
      dropOpen: false
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
  dropMenu(){
    this.setState({ dropOpen: !this.state.dropOpen});
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
          <div className = {this.state.open?"hue":null} id = "menu">
            <div className = "menuButton">
              <img onClick = {()=>{this.openMenu()}} className = "img" src = {menuButton}></img>  
            </div>
            {this.state.open ? 
              <div className ="openedMenu">
                <Link href = "/"><span onClick = {()=>{this.openMenu();this.scrollTo(0);}} className = "navMenuItem">Home</span></Link>
                <Link href = "/about"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">About</span></Link>
                <div onClick={()=>{this.dropMenu()}}>
                  <span className = "navMenuItem">Surfboards</span>
                  {this.state.dropOpen ? 
                    <div>
                      <Link href = "/boards"><span onClick = {()=>{this.dropMenu();this.scrollTo(0);}} className = "navMenuItem">Categories</span></Link>
                      <Link href = "/technology"><span onClick = {()=>{this.dropMenu()}} className = "navMenuItem">Technology</span></Link>
                      <Link href = "/questionaire"><span onClick = {()=>{this.dropMenu()}} className = "navMenuItem">Sizing Questionnaire</span></Link>
                      <Link href = "/calculator"><span onClick = {()=>{this.dropMenu()}} className = "navMenuItem">Volume Calculator</span></Link>
                    </div>
                  :
                    null
                  }
                </div>
                <Link href = "/testimonials"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Testimonials</span></Link>
                <Link href = "/media"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Media</span></Link>
                <Link href = "/contact"><span onClick = {()=>{this.openMenu()}} className = "navMenuItem">Contact</span></Link>
              </div>
            :
              null
            }
          </div>
        </div>
        :
        <div  id = "navInner">
          <div className = "navItem">
            <img onClick = {()=>{this.openMenu()}} className = "img" src = {logo}></img> 
          </div>
          <Link href = "/"><span className = "navItem">Home</span></Link>
          <Link href = "/about"><span className = "navItem">About</span></Link>
          {/* <Link href = "/boards"><span className = "navItem">SurfBoards</span></Link> */}
          <div onMouseLeave={()=>{this.dropMenu()}} onMouseEnter = {()=>{this.dropMenu()}}>
              <span className = "navItem">Surfboards</span>
              {this.state.dropOpen ? 
                <div className ="droppedMenu">
                  <Link href = "/boards"><span onClick = {()=>{this.dropMenu();this.scrollTo(0);}} className = "navItem">Categories</span></Link>
                  <Link href = "/technology"><span onClick = {()=>{this.dropMenu()}} className = "navItem">Technology</span></Link>
                  <Link href = "/questionaire"><span onClick = {()=>{this.dropMenu()}} className = "navItem">Sizing Questionnaire</span></Link>
                  <Link href = "/calculator"><span onClick = {()=>{this.dropMenu()}} className = "navItem">Volume Calculator</span></Link>
                </div>
              :
                null
              }
          </div>
          <Link href = "/testimonials"><span className = "navItem">Testimonials</span></Link>
          <Link href = "/media"><span className = "navItem">Media</span></Link>
          <Link href = "/contact"><span className = "navItem">Contact</span></Link>
        </div>
      }
      <style jsx>{`
        @font-face {
          font-family: 'Bungee';
            src:url('/fonts/Bungee-Regular.otf');
        }
        @font-face {
          font-family: 'BalooThambi';
          src:url('/fonts/BalooThambi2-Regular.ttf');
          
          }
      @font-face {
          font-family: 'BalooThambi-SemiBold';
          src:url('/fonts/BalooThambi2-SemiBold.ttf');
          }
      }
        .hue {
          background-color: rgba(255,255,255, 0.8);
        }
        #menu {
          position: fixed;
          z-index:999;
          top: 20px;
          left: 9px;    
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
        .droppedMenu {
          position:fixed;
          padding:15px;
          background-color:black;
        }
        #navContainer {
          background-color:black;
            width: 100%;
            right: 0;
            z-index: 1;
          }
          #navInner {
            height: 10vh;
            justify-content: center;
            text-align: center;
            display:flex;
            border-bottom: 1pt #DDD solid;
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
            background-color: black;
            color:white;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            @extend .normalText;
            font-family: 'BalooThambi-SemiBold';
            font-size: 15pt;
          }
          .normalText {
            font-family: 'BalooThambi';
          }
          .navMenuItem {
            position: relative;
            align-items: center;
            justify-content: center;
            flex: 1;
            display: flex;
            color: black;
            height:45px;
            width: calc(100vw - 18px);
            border-bottom: .5pt #DDD solid;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            @extend .normalText;
            font-family: 'BalooThambi';
          }
          .openedMenu {
            border-radius: 25px;
            overflow: hidden;
          }
      `}</style>
    </div>
  )
  }
}



export default Navbar;
