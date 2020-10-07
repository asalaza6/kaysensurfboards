import React, {Component} from 'react';
import configs from '../config';

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            file: null,
            preview:null,
            name:null,
            content:null
        }
        this.fileInput = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
    }
    onContentChange(evt){
        this.setState({content:evt.target.value})
    }
    onNameChange(evt){
        this.setState({name:evt.target.value})
    }
    onChange(evt){
        let reader = new FileReader();
        
        let file = evt.target.files[0];
        this.setState({file:file});
        let that = this;
        reader.addEventListener("loadend", function () {
            // convert image file to base64 string
            that.setState({preview:reader.result});
            }, false);
        if(file){
            reader.readAsDataURL(file);
        }else{
            this.setState({preview:null})
        }
    }
    async handleSubmit(){
        if(this.state.file === null){
            alert('file not chosen');
            return;
        }else if(this.state.name === null){
            alert('name not given');
        }else if(this.state.content === null){
            alert('please add review contents');
        }
        let body = {
            name:this.state.name,
            content:this.state.content,
            image:this.state.preview
        }
        //console.log(body);
        try{
            const response = await fetch(`${configs.api.url}:${configs.api.port}/dashboard/upload`,{
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
    render(){
        return(
            <div style = {styles.container}>
                <div style = {styles.title}>Upload</div>
                    <form style = {styles.form}>
                        
                        <label style = {styles.formItem}>  
                            <input onInput={this.onChange} accept="image/png, image/jpeg" type="file" ref={this.fileInput}/>
                            <div style = {styles.imgContainer}>
                                {this.state.file != null?<img alt="preview" style = {styles.img} id="preview" src={this.state.preview}/>:null}
                            </div>
                        </label>

                        <label style = {styles.formItem}>
                            <div>Enter your name</div>
                            <input style = {styles.formText} onInput={this.onNameChange} type="text"/>
                        </label>
                        <label style = {styles.formItem}>
                            <div>Write your review here</div>
                            <textarea rows = "4" maxLength="255" style = {styles.formText} onInput={this.onContentChange} type="text"/>
                        </label>
                    </form>
                    
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const styles = {
    container:{
        margin:10,
        justifyContent:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    title:{
        fontSize:35,
        padding:10,
        fontWeight:600
    },
    imgContainer:{
        width:"90%",
        maxWidth:"400px",
        maxHeight:"400px",
        overflow:"hidden"
    },
    img:{
        height:"auto",
        width:"100%",
        padding:"10px"
    },
    form:{
        display: "flex",
        flexDirection:"column",
        alignItems: "flex-end"
    },
    formItem:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width: "80vw"
    },
    formText:{
        margin: "10px",
        flexGrow: 1,
    }

}
