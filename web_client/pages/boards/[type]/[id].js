import {withRouter } from 'next/router';

import Boards from "../../../boards.json";
class BoardPage extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      name:null
    }
    
  }
  componentDidMount(){
    const {type,id} = this.props.router.query;
    // console.log(type,id)
    const board = Boards[type][id];
    this.setState({
      name:board.boardname,
      imgSrc:board.img,          
      dimension:board.dimension,
      style:board.style,
      tech:board.tech,

    });
  }
  render(){
  return (
    <div className = "container">
            
            {this.state.imgSrc ? <img  className = "img" src = {this.state.imgSrc}></img>:null}
            <div  className = "name">{this.state.name}</div>
            <a  className = "style">{"Style: " + this.state.style}</a>
            <a  className = "tech"> {"Technology: " + this.state.tech}</a>
            <a  className = "dim">{"Dimensions: " + this.state.dimension}</a>
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

export default withRouter(BoardPage);