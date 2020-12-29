import {withRouter,useRouter } from 'next/router';

import Technology from "../../technology";
class TechPage extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      name:null
    }
    
  }
  componentDidMount(){
    const {type} = this.props.router.query;
    // console.log(type,this.props.router)
    const tech = Technology[type];
    // console.log(Technology,tech);
    this.setState({
      name:type,
      imgSrc:tech.img,          
      desc:tech.desc

    });
  }
  render(){
  return (
    <div className = "container">
            <div  className = "name">{this.state.name}</div>
            {this.state.imgSrc ? <img  className = "img" src = {this.state.imgSrc}></img>:null}
            
            <a  className = "tech"> {this.state.desc}</a>
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
                    align-self:center;
                }
                
            `}</style>
        </div>
  )
      }
};

export default withRouter(TechPage);