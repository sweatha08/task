import React from 'react';
import logo from '/Users/elakk/task/src/logo.png';
import {NavLink} from 'react-router-dom';




class First extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          startDate: null
        
        }
        this.handleChange = this.handleChange.bind(this);

    }
    state ={
        profileImages:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'
      }
      imagesHandler = (a) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImages: reader.result})
          }
        }
        reader.readAsDataURL(a.target.files[0])
      };
      state ={
        proImg:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'
      }
      imagesHandlers = (k) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({proImg: reader.result})
          }
        }
        reader.readAsDataURL(k.target.files[0])
      };

    handleChange(date) {
        this.setState({
          startDate: date
        })
      };

      state ={
        signImg:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'
      }
      imgHandler = (i) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({signImg: reader.result})
          }
        }
        reader.readAsDataURL(i.target.files[0])
      };





    render() {
        const { profileImages} = this.state
        const { proImg} = this.state
        const { signImg} = this.state
        let answer=["Yes","No"];
       


        return(
            <div className="Header">
            
            <img src={logo} alt="logo"></img>
            <div className="head-1">
            <h1>Domain ID Creation & <br/>
Biometric Access Request
</h1>
       </div>
       <br/><br/>
       <div className="content">
<h3>To create a Domain ID and to enable the common drive access as mentioned below</h3><br />
          </div>
          <div className="Req-Date">
            <form>
            <label style={{left:"0px"}}>Request Date</label>
            <div className="date-1" style={{marginLeft:"275px",marginTop:"20px"}}>
            <input type="date"></input>
              </div>
           
            </form>
          </div>

          <div className="Heading-1">
              <h5 style={{marginLeft:"50px"}}>Employee Details:</h5>
              <div className="Heading-table-1">
                  <form>
                  <div className="sub-heading">
                  <label style={{marginLeft:"275px"}}>Particular</label>
                  <label style={{marginLeft:"825px"}}>Description</label>
              </div> <br/><br/><br/><br/>
              <div className="heading-content">
                      <label>Employee or Vendor	Employee</label>
                      <select name="selectList" id="selectList" className="drop">
                      <option value="option 0"></option>
   <option value="option 1">Employee</option>
   <option value="option 2">Vendor</option>
</select>
                      <br/><br/><label>Location </label>
                     <input type="text" placeholder="Corporate office / State Office" style={{lineHeight:"25px"}} />
                     <br/><br/><label>Employee Name </label>
                     <input type="text"/>
                     <br/><br/><label>Employee Code </label>
                     <input type="text"/>
                     <br/><br/><label>Department </label>
                     <input type="text"/>
                     <br/><br/><label>Designation </label>
                     <input type="text"/>
                     <br/><br/><label>Common drive Access </label>
                     <div className="radio-first">  
              {answer.map(result=>(
                <> <input type="radio" value={result} name="radioi"/>
                {result}</>))}
                </div>
                     <br/><label>Official email ID</label>
                     <input type="text"/>
                     <br/><br/><label>Personal email ID </label>
                     <input type="text"/>
                     <br/><br/><label>Employee type </label>
                     <select name="select" id="select" className="drop">
                      <option value="option 0"></option>
   <option value="option 1">Permanent</option>
   <option value="option 2">Temporary</option>
</select>
                     <br/><br/><label>Contact Mobile Number </label>
                     <input type="text"/>
                     <br/><br/><label>Date of Joining </label>
                     <input type="text"/>
                     <br/><br/><label>System MAC ID </label>
                     <input type="text"/>
                     <br/><br/><label>System Serial Number	 </label>
                     <input type="text"/>
                     <br/><br/><label>Computer Name </label>
                     <input type="text"/>
                     <br/><br/><label>Reporting Manager Name</label>
                     <input type="text"/>
                     <br/><br/><label>Corporate Office Biometric Access  </label>
                     <div className="radio-first">  
              {answer.map(result=>(
                <> <input type="radio" value={result} name="radioinput"/>
                {result}</>))}
                </div>
                     </div>
                  </form>
              </div>
          </div>
          <br/><br/>

          <div className="Heading-2">
              <h5 style={{marginLeft:"50px"}}>Declaration by Requestor</h5>
              <h4 style={{marginLeft:"150px",width:"1250px"}}>By signing this document, I acknowledge that, I have genuine official purpose to access the desktop.</h4>
              <div className="heading-content-2"><br/><br/>
                  <label>Emp code and Employee Name</label>
                  <input type="text" ></input><br/><br/>
                  <label>Date</label>
                  <input type="date"></input>
                  <br/><br/>
                  </div>
                  <div className="sign-content2">     
          <div className="sign-content-2">
              <img src={profileImages} alt="" id="image-sign-content-2" className="images-content" style={{marginTop:"1533px",marginLeft:"850px",width:"130px",height:"115px"}}/> </div>
          <input type="file" name="image-upload-content" id="in" accept="imagesign/*" onChange={this.imagesHandler} className="images-content" style={{display:"none"}} ></input>
          <div className="label-content">
              <label htmlFor="in" className="image-upload-content"  style={{marginLeft:"985px",width:"130px",height:"115px"}}
 >Requestor Signature</label>
          </div></div> 
          </div>
  <br/><br/><br/>

          <div className="Heading-3">
          <h5 style={{marginLeft:"50px"}}>Reporting to Manager Approval</h5>
          <div className="heading-content-3"><br/><br/>
                  <label>Emp code and Employee Name</label>
                  <input type="text" ></input><br/><br/>
                  <label>Date</label>
                  <input type="date"></input>
                  <br/><br/>
                  </div>
                  <div className="sign-content3">     
          <div className="sign-content-3">
              <img src={proImg} alt="" id="image-sign-content-3" className="images-content-3" style={{marginTop:"1830px",marginLeft:"850px",width:"130px",height:"115px"}}/> </div>
          <input type="file" name="image-upload-content-3" id="inputsign" accept="imasign/*" onChange={this.imagesHandlers} className="images-content-3" style={{display:"none"}} ></input>
          <div className="label-content-3">
              <label htmlFor="inputsign" className="image-upload-content-3"  style={{marginLeft:"973px",width:"170px",height:"115px"}}
 >Reporting to Manager Signature</label>
          </div></div> 
          </div>


        <br/><br/><br/>
          <div className="Heading-4">
          <h5 style={{marginLeft:"50px"}}>Declaration by IT</h5>
          <div className="heading-content-4"><br/><br/>
                  <label style={{width: "1250px", paddingTop: "0px",paddingBottom: "0px"}}>We have to create the Domain ID and enable access rights as per the requestor’s requirement and also give the access rights as mentioned in the above list. If any new person needs to access the folder, a new request will be raised. </label>
                  <br/><br/>
                  <div className="content-4">
                  <br/><br/>
                  <label>Approver Sign</label>
                  <input type="text" ></input><br/><br/>
                  <label>Date</label>
                  <input type="date"></input>
                  </div>
                  </div>

                  <div className="sign-content4">     
          <div className="sign-content-4">
              <img src={signImg} alt="" id="image-sign-content-4" className="images-content-4" style={{marginTop:"2215px",marginLeft:"850px",width:"130px",height:"115px"}}/> </div>
          <input type="file" name="image-upload-content-4" id="inputsign4" accept="imgssign/*" onChange={this.imgHandler} className="images-content-4" style={{display:"none"}} ></input>
          <div className="label-content-4">
              <label htmlFor="inputsign4" className="image-upload-content-4"  style={{marginLeft:"985px",width:"130px",height:"115px",marginTop:"225px"}}
 >Approver Signature</label>
          </div></div> 


                  </div>





   <br/><br/><br/><br/>
          
            <div className="next" style={{marginTop:"200px",marginLeft:"750px"}}>
    <NavLink to="/Head" >Next</NavLink>
    </div>
            </div>
        );
    }
}
export default First;