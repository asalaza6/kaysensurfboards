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
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
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
      'template_xgaka3x',
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
        <div>PLEASE COMPLETE THIS FORM FOR ASSISTANCE WITH BEST FIT CUSTOM/STOCK SIZING:</div>
        <form className = "form" name="contact" onSubmit = {evt =>{return this.sendEmail(evt)}}>
            <input type="hidden" name="form-name" value="contact" />
            <label>Name: 
              <br/><input size = "30" type="text" name="first_name"  placeholder="First"/>
              <input size = "30" type="text" name="last_name" placeholder="Last"/></label>
            <label>Email: 
              <br/><input size = "60" type="email" name="user_email" /></label>
            
            <label>If you already have a model, size and/or construction in mind, let us know and we can work with that in addition to the info below to make sure we're all on the right track: 
              <br/><input size = "60" type="text" name="q1"/></label>
            
            <label>What is your age, height and weight?
              <br/><input size = "60" type="text" name="q2"/></label>
            
            <label>Any physical limitations?
              <br/><input size = "60" type="text" name="q3"/></label>
            
            <label>How many years have you been surfing?
              <br/><input size = "60" type="text" name="q4"/></label>
            
            <label>How often do you surf?
              <br/><input size = "60" type="text" name="q5"/></label>
            
            <label>Where mostly?
              <br/><input size = "60" type="text" name="q6"/></label>
            
            <label>What is the make, model, construction, and dimensions with volume (if you have it) of your current board(s)?
              <br/><input size = "60" type="text" name="q7"/></label>
            
            <label>Which do you consider your daily driver?
              <br/><input size = "60" type="text" name="q8"/></label>
            
            <label>Does your current board float you just right, too much or not enough?
              <br/><input size = "60" type="text" name="q9"/></label>
            
            <label>What in your new board would you like to improve or maintain?
              <br/><input size = "60" type="text" name="q10"/></label>
            
            <label>What size wave range and conditions are we targeting?
              <br/><input size = "60" type="text" name="q11"/></label>
            
            <label>Are you replacing your current board for the waves you describe or are you wanting one that will complement your current board in the targeted wave range?
              <br/><input size = "60" type="text" name="q12"/></label>
            
            <label>Comments, concerns or general info
              <br/><input size = "60" type="text" name="q13"/></label>
      
            <br/><input size = "60" type="submit" value="Send"/>
          </form>
        <style jsx>{`
          .form {
            justify-content: center;
            display:flex;
            flex-direction: column;
          }
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
            width: 80%;
            align-self:center;
            display:flex;
            flex-direction: column;
            align-items:left;
            padding:10px;
          }
        `}</style>
      </div>
    )
  }
}