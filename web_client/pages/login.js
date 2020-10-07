import React, {Component, Fragment, useState } from "react";
import {toast} from 'react-toastify';
import configs from '../config';
import Router from 'next/router';
import { render } from "react-dom";
import Testimonials from "../components/Testimonials";

const Login = ({setAuth})=>{
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    
    const {username, password} = inputs;

    const onChange = (e)=>{
        setInputs({...inputs,[e.target.name]
        : e.target.value})
    }

    const onSubmitForm = async (e)=>{
        e.preventDefault();

        try{
            const body = {username,password};
            //console.log(body);
            const response = await fetch(`${configs.api.url}:${configs.api.port}/auth/login`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            const parseRes = await response.json();
            if(parseRes.token){
                localStorage.setItem("token", parseRes.token);
                console.log(parseRes.token)
                alert("login successful");
                setAuth(true);
                toast.success("login successful");
            }else{
                alert("login failed");                toast.error(parseRes);
            }
            
        }catch(err){
            console.error(err.message);
        }
        console.log("done");
    }

    return (
        <Fragment>
            <h1 className="text-center my-5">Login</h1>
            <form onSubmit = {onSubmitForm}>
                <input 
                    type = "text" 
                    name="username" 
                    placeholder="username" 
                    className="form-control my-3"
                    value={username}
                    onChange={e=>onChange(e)}
                />
                <input type = "password" name="password" placeholder="password" className="form-control my-3"
                    value={password}
                    onChange={e=>onChange(e)}/>
                <button className="btn btn-success btn-block">Submit</button>
            </form>
        </Fragment>
    )
}
const Dashboard = ({setAuth})=>{
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");
    }
    return(
        <div className = "container">
            <div className = "title">Approve Reviews</div>
            <Testimonials route="approve"/>
            <button onClick={e=>logout(e)}>Logout</button>
            <style jsx>{`
                .title {
                    font-size:20pt;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>)
}
class ManagerPortal extends Component{
    constructor(){
        super();
         this.state={
              auth:false
         }
         console.log("constructor",this.state);
         this.setAuth=this.setAuth.bind(this);
         this.isAuth=this.isAuth.bind(this);
    }
    async componentDidMount(){
        await this.isAuth();
        console.log("Mount",typeof(this.state.auth),this.state.auth);
    }
    componentDidUpdate(){
        console.log("update",this.state.auth);
    }
    async isAuth(){
        try{
          const response = await fetch(`${configs.api.url}:${configs.api.port}/auth/verify`,{
            method: "GET",
            headers: {token: localStorage.token}
          });
    
          const parseRes = await response.json();
    
          parseRes === true ? this.setState({auth:true}):this.setState({auth:false});
          //console.log(parseRes);
        }catch(err){
          console.log(err.message);
        }
      }
    
    setAuth(boolean){
        this.setState({auth:boolean});
        console.log("setAuthHook",this.state.auth)
    }
    render(){
        console.log("render",this.state.auth);
        if(this.state.auth==true){
        return(<Fragment>
                    <Dashboard setAuth={this.setAuth}/>
                </Fragment>);
        }else{
            console.log(typeof(this.state.auth),this.state.auth,"if")

            return(
            <Fragment>
                <Login setAuth={this.setAuth}/>
            </Fragment>);
        }
    }
}
export default ManagerPortal;
