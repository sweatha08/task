import React, { Component} from 'react';
import logo from '/Users/elakk/task/src/logo.png';
import '../Firstpage/Head.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Second from '../Firstpage/Second';
import Third from '..//Firstpage/Third';
import Graduation from '../Graduation';



const initialState = {
  names: "",
  email: "",
  nameError: "",
  emailError: ""
};



class Head extends Component{
  state = initialState;

  constructor (props) {
    super(props)
    this.state = {
      startDate: null
    
    }
    this.handleChange = this.handleChange.bind(this);

    this.state ={
      name: "",
      city: "",
      states: "",
      phone: "",
      email: ""
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  
  handleChanger = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.names) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };



  state ={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    var valueLink = {
      requestLink: this.state.handleChanger
    };
    const { profileImg} = this.state
     let gender=["Male","Female","Others"];
     let martial=["Married","Not Married"];
     let category=["SC","ST","OBC","GEN"];
   
    return(
        <div className="Header">
          <img src={logo} alt="logo"></img>
          <div className="head">
          <h1>Employment Application</h1>
          </div>
          
         


          <div className="image">
              <img src={profileImg} alt="" id="imgs" className="imgs"/>
          </div>
          <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} className="imgs" style={{display:"none"}} ></input>
          <div className="labels">
              <label htmlFor="input" className="image-upload">
                  Add Photo
              </label>
          </div>

          <div className="content">
              <h2>Instructions</h2>
<p>* Before filling this form please read carefully.<br />
* All entries should be made in CAPITAL LETTER .<br />
* Properly filled form would help us understand your professional & personal strengths and
preferences by presenting information in a structured format.<br />
* Please attach copies of educational certificates, salary slips, photographs, ration card /
voters ID / Driving License.</p>
          </div>

          <div className="form" onSubmit={this.handleSubmit}>
          <form>
              <h5>Personal Information</h5>
              <label for="name"> Name (in Capital Letters)  </label> 
              <input  type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} valueLink={valueLink} ></input>
              <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
              <br /><label for="fname">Father’s / Husband’s Name (In Capital letters )</label>
              <input type="text" name="fname"></input>

              <br /><br /><label for="dob">Date of Birth</label>
              <div className="cal">
              <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="dd/MM/yyyy"/>
              </div>

              <br /><label>Gender (Tick one)</label>
              <div className="radio">  
              {gender.map(result=>(
                <> <input type="radio" value={result} name="radio"/>
                {result}</>
              ))}
              </div>
          

            <br /><label for="martial">Marital Status (Tick one)</label>
            <div className="radio">  
              {martial.map(result=>(
                <> <input type="radio" value={result} name="radioinput"/>
                {result}</>))}
                </div>


              <br /><label>Category</label>
              <div className="radio">  
              {category.map(result=>(
                <> <input type="radio" value={result} name="radioi"/>
                {result}</>))}
                </div>

                <br /><label>Religion</label> 
                <input type="text" />
                <br /><br /><label>Blood Group</label> 
                <input type="text" />
                <br /><br /><label> Place of Birth</label> 
                <input type="text" />
                <br /><br /><label> State of Birth</label> 
                <input type="text" /> 
                
                <br/><br/>
                   <h5>Contact Information</h5>
               
               <br />
              <div className="border"> <label> Present Address (Please leave Blank between Entity)</label> 
                   <div className="addr">
                     <label>City</label>
                     <input  type="text" value={this.state.city} onChange={(e) => {this.setState({city: e.target.value})}}></input>
                     <br/><br/><label>State</label>
                     <input type="text" value={this.state.states} onChange={(e) => {this.setState({states: e.target.value})}}></input>
                     <br/><br/><label>Phone/Mobile</label>
                     <input type="text" value={this.state.phone} onChange={(e) => {this.setState({phone: e.target.value})}}/>
                     <br/><br/><label>Email</label>
                     <input type="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
                   </div>
                 
                   <br/><br/><br/><br/><label>Permanent Address (Please leave Blank between Entity)</label>
                   <div className="addr">
                   <label>City</label>
                    <input type="text" value={this.state.city}/>
                     <br/><br/><label>State</label>
                     <input type="text" value={this.state.states}/>
                     <br/><br/><label>Phone/Mobile</label>
                     <input type="text" value={this.state.phone}/>
                     <br/><br/><label>Email</label>
                     <input type="email" value={this.state.email}/>
                   </div>
               
                   <br/><br/><br/><br/><label>Person to be notified in case of emergency</label>
                   <div className="addr">
                   <label>Name</label>
                    <input type="text" value={this.state.name}/>
                     <br/><br/><label>Relationship</label>
                     <input type="text"/>
                     <br/><br/><label>Telephone No</label>
                     <input type="text"/>
                     <br/><br/><label>Phone</label>
                     <input type="text" value={this.state.phone}/>
                     <br/><br/><label>Address</label>
                     <input type="text" placeholder="Address no,Street"/>
                     <br/><br/><input type="text" placeholder="City" value={this.state.city}/>
                     <br/><br/><input type="text" placeholder="State, Pincode"/><br/>
                   </div>
               </div>
                   <br/><br/>
                   <h5>Passport Details</h5>
                   <div className="pass">
                   <br/>
                   <label style={{textAlign:"left"}}>Passport No</label>
                   <input type="text"></input>
                   </div>
                   <div className="port">
                   <label style={{textAlign:"left"}}>Place of Issue</label>
                   <input type="text"></input>
                   </div>
 
                    <br/><br/>
                    <hr/>
                   <br/><br/><br/><br/><br/><br/>
                   <div className="acc">
                   <label>PAN (Personal Account Number)</label>
                   <input type="text"/>
                   <br/><br/><label>Aadhar Card No</label>
                   <input type="text"/>
                   </div>
                   <div className="accc">
                   <div className="acc1">
                   <label>UAN (EPF)</label>
                   <input type="text"/></div>
                   <br/><br/>
                   <div className="acc1-1"><label>ESI ID No.</label>
                   <input type="text"/>
                   </div>
                   </div>
   
                   <br/>
                   <br/>
                   <Second />
                   
                   <Graduation />
              <Third />

              </form>
            
              
              
          </div>
        
          </div>
            
         
        );
}
}

export default Head;