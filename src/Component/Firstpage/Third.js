import React from 'react';
import Work from './Work';
import {NavLink} from 'react-router-dom';
// import { Nav } from 'reactstrap';
class Third extends React.Component{
  constructor(props) {
    super(props);
   
    this.fileInput = React.createRef();
  }
    state = {
        
        profileImgs:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'  
        }
       
        
        
         
        
       
imageHandle = (l) => {
  const reader = new FileReader();
  reader.onload = () =>{
    if(reader.readyState === 2){
      this.setState({profileImgs: reader.result})
    }
  }
  reader.readAsDataURL(l.target.files[0])
};
       
 render()
 {
  
  const { profileImgs} = this.state
  
     return(
         <div className="prof">
         <br/><br/>
             <h5>Professional Training</h5>
             <br/>
             <div className="training">
             <label>Periods</label> 
             <input type="date" style={{left: "1020px"}}></input><label style={{left:"745px"}}>To</label> <input type="date"></input>
             <br /><br/><label>Place of Training</label> 
                <input type="text" />
                <br /><br /><label>Stipend/Salary Drawn if</label> 
                <input type="text" />
                <br /><br /><label>Nature of Training</label> 
                <input type="text" /></div><br/><br/><br/><br/>
              <h5>Interest / Hobbies / Extracurricular Activities</h5>
              <textarea placeholder="Enter your Activities"></textarea>
              <br/><br/>
              <Work/>
              
 <h4 style={{fontSize:"20px", fontFamily:"Roboto Slab"}}>Reason for Leaving</h4>
 <textarea style={{fontSize:"18px",fontFamily:"Roboto Slab"}} placeholder="Comment your Reason here!!!!"></textarea>
 <br/><br/>
 <h5>Reference</h5>
 <h6>(Please provide 2 reference pertaining to your previous jobs, Ideally your superiors or peers)</h6>

 <div className="tables-1">
              <table >
            <tr>
              <th>Particular</th>
              <th>Reference 1</th>
              <th>Reference 2</th>
            </tr>
            <br/>
            <tr className="row-1">
            <td>Name</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Designation</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Company</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Location</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Phone</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Mobile</td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
          </table>
          </div>
          <br/><br/>
          <h5>Salary Details (Present Job)</h5>
          <div className="tit">
            <h6>Salary(Annual)</h6>
            <label style={{paddingLeft:"200px"}}>Particular</label>
            <label style={{paddingLeft:"820px"}}>Amount</label>
            <div className="title1">
            <br/><br/>
            <br /><br /><label>Basic Salay</label> 
                <input type="text" />
                <br /><br /><label>DA</label> 
                <input type="text" />
                <br /><br /><label>Additional DA</label> 
                <input type="text" />
                <br /><br /><label>HRA</label> 
                <input type="text" />
                <br /><br /><label>Additional HRA</label> 
                <input type="text" />
                <br /><br /><label>Conveyance</label> 
                <input type="text" />
                <br /><br /><label>Education</label> 
                <input type="text" />
                <br /><br /><label>LTA</label> 
                <input type="text" />
                <br /><br /><label>Performance /
Incentive Pay</label> 
                <input type="text" />
                <br /><br /><label>Mobile</label> 
                <input type="text" />
                <br /><br /><label>Uniform Allowance</label> 
                <input type="text" />
                <br /><br /><label>Lunch Allowance</label> 
                <input type="text" />
                <br /><br /><label>Other Allowance</label> 
                <input type="text" />
                <br /><br /><br/><br/><label>Total(A)</label> 
                <input type="text" />
                <br/><br/><label>Receipt</label>
                <input type="file" style={{borderStyle:"none"}}></input>
            </div>
 
   <br/><br/><br/><br/>
            <h6>Other Benefits</h6>
            <label style={{paddingLeft:"200px"}}>Particular</label>
            <label style={{paddingLeft:"820px"}}>Amount</label>
            <div className="title1">
            <br/><br/>
            <br /><br /><label>Provident Fund (%)</label> 
                <input type="text" />
                <br /><br /><label>Gratuity (%)</label> 
                <input type="text" />
                <br /><br /><label>Superannuation (%)</label> 
                <input type="text" />
                <br /><br /><label>Hard Furnishing</label> 
                <input type="text" />
                <br /><br /><label>Soft Furnishing</label> 
                <input type="text" />
                <br /><br /><label>Entertainment Allw</label> 
                <input type="text" />
                <br /><br /><label>Medical Insurance</label> 
                <input type="text" />
                <br /><br /><label>Personal Accident</label> 
                <input type="text" />
                <br /><br /><label>Others</label> 
                <input type="text" />
                <br /><br /><br/><br/><label>Total(C)</label> 
                <input type="text" />
                <br/><br/><label>Receipt</label>
                <input type="file" style={{borderStyle:"none"}}></input>
</div>
                
                <br/><br/><br/><br/>
            <h6>Annual Payments</h6>
            <label style={{paddingLeft:"200px"}}>Particular</label>
            <label style={{paddingLeft:"820px"}}>Amount</label>
            <div className="title1">
            <br/><br/>
            <br /><br /><label>LTA</label> 
                <input type="text" />
                <br /><br /><label>Medical Reimb</label> 
                <input type="text" />
                <br /><br /><label>Annual Bonus/Exgratia</label> 
                <input type="text" />
                <br /><br /><label>Performance Bonus</label> 
                <input type="text" />
                <br /><br /><label>Others</label> 
                <input type="text" />
                <br /><br /><br/><br/><label>Total(B)</label> 
                <input type="text" />
                <br/><br/><label>Receipt</label>
                <input type="file" style={{borderStyle:"none"}}></input>
                </div>

                <br/><br/><br/><br/>
            <h6>Cost of Company</h6>
            <label style={{paddingLeft:"200px"}}>Particular</label>
            <label style={{paddingLeft:"820px"}}>Amount</label>
            <div className="title1">
            <br/><br/>
            <br /><br /><label>Monthly Salary (A)</label> 
                <input type="text" />
                <br /><br /><label>Other Benefits (B)</label> 
                <input type="text" />
                <br /><br /><label>Annual Benefits (C)</label> 
                <input type="text" />
                <br /><br /><label>Others</label> 
                <input type="text" />
                <br /><br /><br/><br/><label>Grand Total</label> 
                <input type="text" />
                <br/><br/><label>Receipt</label>
                <input type="file" style={{borderStyle:"none"}}></input>
</div>
                



             </div> 

             <br/><br/><br/>
             <h5>Your Professional Strengths</h5>
             <div className="last">
             <label style={{width:"1250px"}}>Highlight your professional strengths, achievements point by point, if any</label>
             <br/><br/><textarea placeholder="Comment here"></textarea>
             <br/><br/><label style={{width:"1300px", paddingLeft:"35px"}}>I hereby declare that the above said information is true to the best of my knowledge. Any misrepresentation made 
by me will render me liable to dismissal from service, if appointed.</label>
            <div className="last-1">
            <br/><br/><br/><br/><br/><br/>
            
              <label className="last-1" style={{paddingLeft:"0px",marginLeft:"175px"}}>Date :</label>
              <input type="date" className="last-1" name="date" id="date"/>
              <br/><br/>
              <label style={{paddingLeft:"0px",marginLeft:"175px"}}>Place :</label>
              <input type="text"></input>
            </div>
              

            <div className="sign">
            <div className="image-sign">
              <img src={profileImgs} alt="" id="imgs-sign" className="imgs-sign" style={{marginTop:"10080px",marginLeft:"840px",width:"130px", height:"120px", float:"inline-end"}} 
/>
          </div>
          <input type="file" name="image-uploader" id="input-sign" accept="imags/*" onChange={this.imageHandle} className="imgs-sign" style={{display:"none"}} ></input>
          <div className="labels-sign">
              <label htmlFor="input-sign" className="image-uploader" style={{marginLeft:"975px"}}>

                  Signature
              </label>
          </div>
            </div>
</div>

<br/><br/>

<div className="next">

           <NavLink to="/Content">Next</NavLink>
         </div>
</div>
             
         


     )
 }

}


export default Third;