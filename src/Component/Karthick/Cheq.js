import React from 'react'
import Head from './Head1'
import '../Karthick/Style.css';
import { NavLink } from 'react-router-dom';
const Cheq = () => {
    return ( 
        <div>
                {/* <Head /> */}


        <div>
            <div className="leftlogo">
            <img src='../images/logo.png' width="230px" height="120"></img>
            </div>
            <div className="cheqhead">
        <h1>CHEQUE LEAF</h1>
        </div>
        <form className="cheq"><br />
            <h5 className="cheq_head">Please attach / pin your cheque leaf to this page: only Axis</h5><br/>
            <p>1. Cancelled cheque should bear the name of candidate and signed by self</p>
            <p className="Or">(OR)</p>
            <p>2. If no name on the cheque</p>
            <p> &nbsp;&nbsp;&nbsp; a. Copy of pass book to be attached – Typically containing IFSC Code / Branch Name and Address / Account
Number.</p>
            <p className="Or">(OR)</p>
            <p>3. If new Account to be opened – “Please write, account to be opened”</p><br />
            <p>Bank Name<input className="c1" type="textbox" placeholder="enter bank name"></input></p>
            <p>Branch <input className="c2" type="textbox" placeholder="enter branch"></input></p>
            <p>Account Number <input className="c3" type="textbox" placeholder="enter account number"></input></p>
            <p>IFSC Code <input className="c4" type="textbox" placeholder="code"></input></p>
            <p>Location/Address<br/> <textarea  className="c5"name="address" cols="36" rows="6" placeholder="enter address"></textarea></p><br /><br /><br />

            <h5>NOTE:</h5><br />
            <p>Once your employee Code / ID is generated, kindly check all your Personal / Professional details HRMS. If any change
is required inform your HR immediately or mail to <a href=" hr@hindujahousingfinance.com"> hr@hindujahousingfinance.com</a> or connect with your State /
Regional HR.</p><br />


            <p> Attach your Signature <input type="file"></input></p><br />
            <p>Attach your cheque <input type="file"></input></p>







        </form>
        <NavLink to="/" >Next</NavLink>
            </div>               
        </div>
        
              
            
     );
}
 
export default Cheq;