import Testimonial from "../testimonial.json";
import { Component, useState } from "react";
import configs from "../config";
import PropTypes from 'prop-types';
const testItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    border: '1px solid #DDD',
    borderRadius:"20px",
    marginBottom:20,
    padding:10,
}
const containerStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignSelf:"center",
    flexWrap:"wrap",
    maxWidth:1000,
    margin: "auto",
    paddingTop:20,
}
const testNameStyle = {
    textAlign: "right",
    padding:10,
    fontSize:18,
}

const testTestStyle = {
    textAlign: "center",
    padding:4,
    fontSize:24,
}
async function approveReview(id,approveBoolean){
    let body = {
        id: id,
        approve:approveBoolean
    }
    try{
        const response = await fetch(`${configs.api.url}:${configs.api.port}/dashboard/approvereview`,{
            method: "POST",
            headers:{
                token:localStorage.token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        const parseRes = await response.json();
        console.log(parseRes);
        alert(approveBoolean?"Approve successful":"Deletion successful")
        //this.setState({reviews:parseRes.rows});
        window.location = "/login"
    }catch(err){
        alert("error somewhere");
        console.log(err.message);
    }
}
function useForceUpdate(){
    return () => setValue(value=>++value);
}
class Approval extends Component{
    constructor(props){
        super(props);
        this.state = {
            approve:null
        }
        console.log(this.props.review_id);

    }
    render(){
        return(
            this.state.approve===null?
            <div>
                    <button onClick={()=>{this.setState({approve:true})}}>Approve</button>
                    <button onClick={()=>{this.setState({approve:false})}}>Delete</button>
                </div>:
                <div>
                    <div>Are you sure? {this.state.approve?"This is a permanent approval!":"This is a permanent delete!"}</div>
                    <button onClick={()=>approveReview(this.props.review_id,this.state.approve)}>Yes</button>
                    <button onClick={()=>{this.setState({approve:null})}}>No</button>
                </div>
            
        )
    }
}

Approval.propTypes = {
    review_id:PropTypes.string
}
function approveItem(test,index){
    var name = test.review_name;
    var testimonial = test.review_contents;
    console.log(test);
    console.log(configs.images.location+"reviews/"+test.review_id+"."+test.image_type);
    test.approve = null;
    return(
        <div key = {index} className = "item">
            <Approval review_id={test.review_id}/>
            <img className = "image" alt="review image" src = {configs.images.location+"reviews/"+test.review_id+"."+test.image_type}/>
            <div className = "testimonial">{testimonial}</div>
            {/*<div className = "rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>*/}
            <div className = "name">{"- " + name}</div>
            <style jsx>{`
                @font-face {
                    font-family: 'BalooThambi';
                    src:url('/fonts/BalooThambi2-Regular.ttf');
                    
                    }
                @font-face {
                    font-family: 'BalooThambi-SemiBold';
                    src:url('/fonts/BalooThambi2-SemiBold.ttf');
                    }
                }
                .image {
                    width: 100%;
                    align-self:center;
                }
                .item {
                    max-width:500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    border: 1px solid #DDD;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    padding: 10px;
                }
                .rating {
                    text-align: right;
                    font-size: 18pt;
                }
                .testimonial {
                    text-align: center;
                    padding:4px;
                    font-size:15pt;
                    font-family: 'BalooThambi';
                }
                .name {
                    text-align: right;
                    padding:10;
                    font-size:12pt;
                    font-family: 'BalooThambi-SemiBold';
                }
            `}</style>
        </div>
        
    );
}

function testimonialItem(test,index){
    var name = test.review_name;
    var testimonial = test.review_contents;
    console.log(configs.images.location+"reviews/"+test.review_id+"."+test.image_type);
    return(
        <div key = {index} className = "item">
            <img className = "image" alt="review image" src = {configs.images.location+"reviews/"+test.review_id+"."+test.image_type}/>
            <div className = "testimonial">{testimonial}</div>
            {/*<div className = "rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>*/}
            <div className = "name">{"- " + name}</div>
            <style jsx>{`
                @font-face {
                    font-family: 'BalooThambi';
                    src:url('/fonts/BalooThambi2-Regular.ttf');
                    
                    }
                @font-face {
                    font-family: 'BalooThambi-SemiBold';
                    src:url('/fonts/BalooThambi2-SemiBold.ttf');
                    }
                }
                .image {
                    width: 100%;
                    align-self:center;
                }
                .item {
                    max-width:500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    border: 1px solid #DDD;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    padding: 10px;
                }
                .rating {
                    text-align: right;
                    font-size: 18pt;
                }
                .testimonial {
                    text-align: center;
                    padding:4px;
                    font-size:15pt;
                    font-family: 'BalooThambi';
                    word-wrap: break-word;
                }
                .name {
                    text-align: right;
                    padding:10;
                    font-size:12pt;
                    font-family: 'BalooThambi-SemiBold';
                }
            `}</style>
        </div>
        
    );
}
export default class Testimonials extends Component{
    
    constructor(){
        super();
        this.state = {
            reviews:[]
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch(`${configs.api.url}:${configs.api.port}/dashboard/${this.props.route}`,{
                method: "GET",
                headers:{
                    
                }
            });
            const parseRes = await response.json();
            console.log(parseRes.rows);
            this.setState({reviews:parseRes.rows});
            
        }catch(err){
            console.log(err.message);
        }
    }
    render(){
        console.log(this.props.route=="approve");
        return(
            <div className = "containerStyle">
                {this.state.reviews.map((test,index)=>(this.props.route=="approve"?approveItem(test,index):testimonialItem(test,index)))}
                {this.props.route == "approve" && this.state.reviews.length == 0?"No reviews to Approve right now!":null}
        <style jsx >{`
            .containerStyle {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-self: center;
                max-width: 1000;
                padding:10px;
            }
        `}</style>
            </div>
        );
    }
}