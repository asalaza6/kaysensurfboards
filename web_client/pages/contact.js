import React,{Component} from 'react';
import configs from '../config';
export default class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
    
    this.onChange = this.onChange.bind(this);
  }
  async onSubmit(){
    console.log(this.state);
    let body = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message
    }
    try{
      const response = await fetch(`${configs.api.url}:${configs.api.port}/dashboard/contact`,{
          method: "POST",
          headers:{
              token: localStorage.token,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      console.log(parseRes);
      alert('image successfully uploaded');
      window.location = "/";
  }catch(err){
      console.log(err.message);
  }
  }
  onChange(evt,type){
    if(type == "name"){
      this.setState({"name":evt.target.value});
    }else if(type == "email"){
      this.setState({"email":evt.target.value});
    }else if(type == "message"){
      this.setState({"message":evt.target.value});
    }
  }
  render(){
    return (
      <div className = "container">
        <p className = "message">Fill the form below and I will contact you as soon as possible.</p>
        <form  name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name: <input onInput = {(evt)=>this.onChange(evt,"name")} type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input onInput = {(evt)=>this.onChange(evt,"email")} type="email" name="email"/></label>
            </p>
            <p>
              <label>Message: <textarea onInput = {(evt)=>this.onChange(evt,"message")} name="message"></textarea></label>
            </p>
            <p>
              <button type="button" onClick = {this.onSubmit}>Send</button>
            </p>
          </form>
        <style jsx>{`
          @font-face {
            font-family: 'BalooThambi';
            src:url('/fonts/BalooThambi2-Regular.ttf');
          }
          @font-face {
            font-family: 'BalooThambi-SemiBold';
            src:url('/fonts/BalooThambi2-SemiBold.ttf');
          }
          .message {
            font-family: 'BalooThambi-SemiBold';
          }
          .container {
            font-family: 'BalooThambi';
            width: 100%;
            display:flex;
            flex-direction: column;
            align-items:center;
          }
        `}</style>
      </div>
    )
  }
}