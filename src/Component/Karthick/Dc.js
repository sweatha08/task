import React from 'react'
import '../Karthick/Style.css';
import { NavLink } from 'react-router-dom';
const Dc = () => {
    return (
        <div>
            {/* <Head /> */}
            <div className="leftlogo">
          <img src="../images/logo.png " width="230px" height="120px"></img>
        </div>
          <div className="cheqhead">
            <h1>DOCUMENT CHECKLIST</h1>
          </div>
       

             <div className="Dc">
      <h4 className="Dc_head">PARTICULARS</h4><br />
      <form className="app1">
        <h5 className="title">(A) Photocopy of following documents (one Copy)</h5><br />
        <p>1.Date of Birth Certificate
        <input type="checkbox"className="ip1"></input></p>
        <p>2.Copy of pan Card or Acknowledgement Slip of Form 49, Applied for Pan No.
          <input type="checkbox"className="ip2"></input>
        </p>
        <p>3.Copy of full set of offer Letter, self attested on all the pages.
          <input type="checkbox"className="ip3"></input><br />
        </p>
        
        <h5>(B) Photocopy of following documents (one Copy)</h5><br />
        <p>4.Professional / Educational Certificate & Mark Sheets:<br/>
         <p> a)10th std equivalent marks card and certificate<input type="checkbox"className="ip1"></input><br/>
          b)12th std, Diploma or equivalent mark sheets and certificate.<input type="checkbox"className="ip1"></input><br/>
          c)Graduation mark sheets and certificate<input type="checkbox"className="ip1"></input><br/>
          d)Post-graduation Certificate marks card and certificate<input type="checkbox"className="ip1"></input><br/>
          e)Other relevant education or skill certifications <input type="checkbox"className="ip1"></input></p> </p>

        <p>5.Resignation/Relieving Letter from last two Employers (if applicable)<input type="checkbox"className="ip1"></input></p>
        <p>6.Experience Letter (s) form all your PAST employers including details of employment
(if applicable)<input type="checkbox"className="ip1"></input></p>
        <p>7.Latest Pay-slip / Salary Certificate form the last two employers (if applicable)<input type="checkbox"className="ip1"></input></p>
        <p>8.Permanents & current Residential address proof (Ration Card / Voter ID Card / Aadhar /
Passport / Licence Copy etc.,)<input type="checkbox"className="ip1"></input></p><br/>
        <h5>(C) Two Passport Size Color Photocopy as per specification</h5><br/>
        <p>9.COLOR PHOTOGRAPH with LIGHT BLUE BACKGROUND (Name & blood group to be
mentioned at the back of photographs).<input type="checkbox"className="ip1"></input></p><br/>
          <h5>(D) OTHER INFORMATION (To be made available on date of joining)</h5><br/>
          <p>10.Previous Employment PF Account No. and Pension Account No with address of Trust /
RPFC Office (In case joinees wish to Transfer their PF)<input type="checkbox"className="ip1"></input></p>
          <p>11.Joinees family (Parents Spouse, children) details including their DOB<input type="checkbox"></input></p>
          <p>12.Bank Account no. (AXIS) (if Any)<input type="checkbox"className="ip1"></input></p>
          <p>13.Blood Group of self and Family<input type="checkbox"className="ip1" size="50px"></input></p><br/>




      </form>
     
      
      
      


  
    
    
    </div>
    
    {/* <div className="next">
    <NavLink to="/First" >Next</NavLink>
    </div> */}
    </div>   
           
      );
}
 
export default Dc;
