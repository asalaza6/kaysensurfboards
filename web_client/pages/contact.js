import React,{Component} from 'react';
import configs from '../config';
import emailjs from 'emailjs-com';
export default class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
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
  sendEmail(evt){
    evt.preventDefault();
    console.log(evt.target);
    emailjs.sendForm('service_ryt0zoo',
      'template_7h0wmmb',
      evt.target,
      'user_28Cp9KA58qJxKIBG6ylwS'
      ).then((result) => {
        console.log(result.text);
        alert("Message sent. Thank you!");
        window.location = ""
    }, (error) => {
        console.log(error.text);
    });
    return false;
  }
  render(){
    return (
      <div className = "container">
        <p className = "message">Fill the form below and I will contact you as soon as possible.</p>
        <form  name="contact" onSubmit = {evt =>{return this.sendEmail(evt)}}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name: <input type="text" name="user_name" onInput = {(evt)=>this.onChange(evt,"name")} type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="user_email" onInput = {(evt)=>this.onChange(evt,"email")} type="email" name="email"/></label>
            </p>
            <p>
              <label>Message: <textarea type="message" name="message" onInput = {(evt)=>this.onChange(evt,"message")} name="message"></textarea></label>
            </p>
            <p>
              <input type="submit" value="emailjs"/>
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