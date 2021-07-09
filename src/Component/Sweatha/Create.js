import React, {Component} from 'react';
import logo from '../Sweatha/logo.png';
import '../Sweatha/Create.css';
import { NavLink } from 'react-router-dom';
class Create extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  state ={
    Sign:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'
  }
  signHandler = (a) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({Sign: reader.result})
      }
    }
    reader.readAsDataURL(a.target.files[0])
  };
  


  render() {    
    const { Sign} = this.state
    return (
      <div className="pro">
        <div className="Pro">
        <img src={logo}  alt="logo" />  
        <div className="top">
          <h1 className="h1">code of conduct<br />
               contd...</h1>
               </div>
        </div>
        
        <div className="first">
        <h5>1. Objective & Scope</h5>
        <div className="para">
        <p>
          The employees of Hinduja Housing Finance (herein after referred to as the “Company”) occupy positions of trust and 
confidence. Consequently, each employee’s public behavior has a direct bearing on the reputation of the Company.<br /><br />
Therefore, it is essential that employees follow the highest standards of professional conduct & ethics at all times, whether in office or outside.
This code Conduct outlines the standards of behavior that all employees of the Company are required to adhere to.<br /><br />
While this code lays down the basic expectations from employees, this does not constitute the universe of acceptable/
unacceptable behavior by the employees of the Company.<br /><br />
This code must be read along with the Staff Service Rules and other internal orders, directives & regulations intended 
to guide employees in the effective discharge of their duties & responsibilities.<br /><br />
For the purpose of this code,<strong>‘Family shall mean:</strong> <br /><br />
<li> Spouse, whether residing with the employee or not, and whether dependent or not (but excluding a legally 
separated spouse).</li><br />
<li> Dependent children or step children / adopted children, whether residing with the employee or not, (but excluding 
children/step children/adopted children whose custody the employee has been legally deprived of) ; and </li><br />
<li> Dependent Parents of the employee or the employee’s spouse, whether residing with the employee / employee’s 
spouse or not.</li><br />
Children, or own/spouse’s Parents earning more than Rs.5,000/- p.m. shall be deemed to be independent for the 
purpose of this Code (and therefore, outside the definition of family as given above).<br /><br />
In case of any doubt or confusion regarding the applicability of this Code to a given situation, employees must seek 
appropriate clarity from HR Department.<br /><br />All Managers shall be responsible for ensuring effective implementation of this code of Conduct by their reportees.<br />
           </p>
           <h5>2. Compliance with Laws & Regulation</h5>
           <p>
           The Company strictly adheres to the law of the land.<br /><br />
There are numerous laws and regulations, both foreign and domestic, which specifically govern various aspects of 
the Company’s business.<br /><br />
The company shall not condone or tolerate any violation of such laws or any breach/offence involving moral turpitude.<br /><br />
No employee of the Company shall, either during their tenure with the Company or thereafter, violate any such laws 
which would at any time lead to bringing adverse publicity to the Company.<br /><br />
Companying is a regulated industry, and each employee is responsible for adhering to all laws, directives and 
regulations which affect his or her function.<br /><br />
Where unresolved legal questions are identified, they should be brought to the attention of the Compliance 
Department
           </p>
           <h5>3. Business Conduct</h5>
           <p>
           If, in conducting business for the Company, an employee becomes aware of any illegal conduct on the part of any 
employee, current/prospective customer of supplier, the employee must inform his or her Branch/Cluster/Business 
Head & Compliance Department with a view towards notifying the proper authorities.<br /><br />
An employee who knows or suspects that false or misleading entries have been made in the records of the Company, 
or that correct entries have been omitted to be made in such records, must inform his or her Branch/Dept/Unit Head 
& Compliance Department.<br /><br />

An employee must always co-operate to the fullest extent in any investigation conducted by the Company. This 
includes answering all questions posed, completely and honestly, and volunteering information within the knowledge 
of the employee, which would in any way, be helpful to the investigation.<br /><br />

An employee of the Company must not participate in any illegal or criminal activities and must abstain from the use of 
illegal drugs. In addition, an employee should abstain from the abuse of alcohol and controlled substances; as such 
abuse could prevent the employee from effectively carrying out job related responsibilities.<br /><br />
           </p>
           <h5>4. Propriety of Payments & Accounts</h5>
           <p>
           Employees are expected to comply with all laws and regulations of the country.<br /><br />
It is the Company’s policy to support strongly the letter and spirit of legislation prohibiting improper payments.<br /><br />
No employee may make any payment with the Company’s funds directly or indirectly to any official, government 
agency, political party, candidate for political office, or other entity or representative of any of the above, for the 
purpose of influencing any act or decision of the official, government agency, party or candidate.<br /><br />
Employees must not make gifts or contributions in the name of or on behalf of the Company to any political 
committee,candidate party.<br /><br />
The Company’s policy requires that all books and records be kept so that they fully and fairly reflect all of company’s 
receipts and expenditures, assets and liabilities.<br /><br />
All details of Company’s relationships and transactions with customers must be entered in its records.
Any attempt to create false and misleading records is forbidden.<br /><br />
The law also requires accurate record keeping and accounting in all phases of a Company’s business, and imposes 
civil and criminal penalties on individuals and Company’s which violate these requirements.<br /><br />
The Law and the policies of the Company require that no “off book” or undisclosed funds or accounts shall be 
established for any purpose.
           </p>
           <h5>5. Honesty and Integrity</h5>
           <p>The Company’s culture is based on honesty & trustworthiness, and it is important that these qualities are demonstrated 
at all times, so that our customers remain confident that their relationship with the Company is in good hands. To 
maintain the Company’s reputation as an honest, trustworthy organization, it is expected that:<br /><br />
<li>Conduct, on and off the job, will be such that the honesty of an employee of the Company is unquestionable.</li><br />
<li>In all communications, including sales presentations and advertising, there will be adherence to the truth, and 
there will be no attempt to mislead directly or indirectly. This not only means a prohibition on making false 
statements, but is also intended to rule out misleading by deliberate omission.</li><br />
<li>This rule, like the others in this Code, is intended to be followed not only in letter, but also in spirit</li><br />
<li>Promises or commitments which Company does not intend to honour, or shall be unable to honour, should not 
be given.</li><br />
<li>The Company’s goodwill, infrastructure and working time shall be used only for official objectives and not for 
private purposed(e.g. investment / dealing in shares / securities etc).</li><br />
</p>
<h5>6. Receiving Compensation from/Compensating others</h5>
<p>
Employees and their immediate families are not permitted to accept fees, other payments or anything of value in 
connection with any business of the Company including arranging or procuring a loan or any other service for any 
person.<br /><br />
An employee must never demand or accept anything of value from any person or entity, for directing the Company’s 
business to such person or for accepting business on behalf of the Company. All placements of the Company’s 
business and acceptance of business by the Company must be awarded purely upon business considerations.<br /><br />
An employee who is compensated for making a presentation, writing a magazine article, teaching, lecturing, or the 
rendering of charitable or professional services, or any other activity prepared or conducted using the time of facilities 
of the Company, must report such compensation in writing to the Head-HR. Such compensation, other than nominal 
honorariums or awards appropriate to the circumstances, will either be returned or paid to the Company.<br /><br />
An employee must never offer, promise or give anything of value to any person or entity in any manner in the course 
of seeking or retaining business for the Company.<br /><br />
No secret or illegal payments, kickbacks, bribes or other payments in any form whatsoever shall ever be made under 
any circumstances, to obtain a benefit that would not otherwise be available for the Company.<br /><br />
Any employee having knowledge of any possible violation of this section should immediately report such matter to 
the Chief Vigilance Officer and to his own immediate superior.
</p>
<h5>7. Accepting / Giving Gifts and Entertainment</h5>
<p>
No employee shall directly or indirectly solicit or receive anything of value in connection with the Company’s business.<br /><br />
Except as described below, employees and their family are not permitted to accept gifts, entertainment or any other 
favours from existing / prospective customers, suppliers, employees or others whom they may contact in the course 
of the Company’s business.<br /><br />
<strong>Examples of acceptable conduct are:</strong><br /><br />
<li>Acceptance of gifts, gratuities, amenities or favours based on obvious family or personal relationships where the 
circumstances make it clear that it is those relationships rather than the business of the Company which are the 
motivating factors.</li><br />
 <li>Acceptance of meals, refreshments, travel arrangements, accommodation, or entertainment, all of 
reasonable value and in the courses of a meeting or other occasion, the purpose of which is to hold 
business discussions, provided that the expenses would be paid for by the Company as a reasonable 
business expense, if they were not paid for by another party.</li><br />
<li> Acceptance of loans from other Company’s of financial institutions on normal customer terms to finance proper 
and usual activities, such as home / car loans, except where prohibited by law.</li><br />
<li> Acceptance of advertising or promotional material of reasonable value, such as pens, pencils, note pads, key 
chains, calendars and similar items.</li><br />
<li> Acceptance of discounts or rebates on merchandise or services that do not exceed those available to other 
customers.</li><br />
<li>Acceptance of gifts (of a value upto Rs.2,000/-) that are related to commonly recognized events or occasions, 
such as a promotion, new job, wedding, retirement of festivals at which gifts giving is normal.</li><br />
<li> Acceptance of civic, charitable, educational, or religious organizational awards for recognition of service and 
accomplishment</li><br />
If an employee is in double as to whether an offer of a gift or entertainment is “reasonable”, an immediate reference 
should be made to the Head-HR.<br /><br />
Where the non-acceptance of gifts could offend or embarrass the giver, the receipt of the gift must be acknowledged 
in writing to the donor on behalf of the Company (and not by the employee as an individual).<br /><br />
The receipt of such gifts, the non-acceptance of which could offend or embarrass the giver, and which are of more 
than nominal value, must be immediately reported in writing to the Head-HR.<br /><br />
Where the Company, as part of its Sales Promotion, Advertising of Publicity activity, is to present a gift, entertain or 
otherwise accommodate a current / prospective customer, supplier or any other person, employees must use careful 
judgement to determine that the matter is handled in good taste without excessive expense.<br /><br />
Prior approval of MD/CEO is required before purchasing a gift. Consideration must be given to the fact that gifts, the 
value of which exceeds a certain, amount, may not be allowed as a taxable expense.
</p>
<h5>8. Business Decisions</h5>
<p>
An employee must not permit a decision about whether the Company will do business with a current / prospective 
customer or supplier to be influenced by unrelated interests.<br /><br />
Decisions relating to placing the Company’s business with current /prospective customers or suppliers, and the 
volume of such business, must be based upon business considerations.
</p>
<h5>9. Personal Finances</h5>
<p>It is extremely important that an employee maintains a sound personal financial condition, as failure to do so will 
prevent the employee from carrying out job related responsibilities in the most effective manner.<br /><br />
His private capacity, no employee shall guarantee or indemnify the financial obligations of others, without prior 
permission from HR Deptt.</p>
<h5>10.Conflict of Interest</h5>
<h4>Personal conflict of interest</h4>
<p>
An employee must not represent the Company in any transaction, if the personal or related interest of the employees 
might affect his or her ability to represent Company’s interest fairly and impartially.<br /><br />
Transactions falling into this category (especially those relating to Credit Facilities & Derivatives) involving the 
employees, a member of the employee’s family or a close personal relationship, must be referred to the Head-HR. <br /><br />
such transaction must conform to the policies of the Company, and must be conducted on terms nor more favourable 
than those extended to others.<br /><br />
If an employee would benefit from a business transaction with the Company, all circumstances of the transaction 
must be advised in writing to the Head-HR.<br /><br />
Personal relationships of any kind with other employees, whether conducted on or off the Company’s premises, must 
not result in a conflict or the appearance of a conflict with the Company’s interest.
</p>
<h4 className="h4"> Customer or Supplier Conflict of Interest</h4>
<p>
The relationship of the Company or an employee with a customer or supplier might, under certain circumstances, 
come in conflict with the best interest of one or more other current /prospective customers or suppliers.<br /><br />
Should such circumstances arise, the potential conflicts of interest must be discussed immediately with the employee’s 
Branch / Regional / National Head, with a view towards reassigning the account(s) or advising such customers or 
suppliers of the conflicts, without disclosing any confidential information.<br /><br />
</p>
<h5>11. Business Relationships with Customers, Current / Prospective Suppliers and Other Employees</h5>
<p>Employees must not take for themselves or direct to others any existing business, or any opportunities for prospective 
business, which could be considered by the Company.<br /><br />
Employees of the Company should be scrupulously honest in all dealings with the Company, its suppliers or its 
customers.<br /><br />
An employee must not borrow from or enter into a business relationship with customers, prospects or suppliers of the 
Company, except for normal consumer transactions conducted through ordinary retail sources.<br /><br />
Promotional schemes of various suppliers / service providers shall be acceptable as long as these are also available 
to other employees of the Company.<br /><br />
An employee must not allow personal relationships with current or prospective customers or suppliers to influence 
business decisions.<br /><br />
Borrowings by employees from customers or suppliers of the Company are not permitted.<br /><br />
All transactions by employees with customers or suppliers of the Company must be handled strictly on an arm’s 
length basis, and the terms of such transactions must not suggest the appearance of personal advantage.<br /><br />
Employees who may be presented with the possibility of any deviation from the standard are expected to explain the 
Company’s policy to the customer or supplier, and the reasons for strict adherence thereto.<br /><br />
Borrowings by employees from other employees are not permitted.</p>
<h5>12. Fiduciary Appointments</h5>
<p>An employee must receive written permission from the Head-HR before agreeing to act in a fiduciary capacity (e.g. 
as a trustee, executor, etc).<br /><br />
All requests by employees for permission to serve in a fiduciary capacity are to be addressed to the Head-HR through 
their supervisors.<br /><br />
Such requests should describe all relevant circumstances (including any relationship with the Company and 
remuneration, if any), contain a statement as to potential conflict of interest, and comment on the amount of time 
which such service will require.<br /><br />
Any change in circumstances relating to a fiduciary appointment must be reported to the Head-HR prior to acting in 
that capacity</p>
<h5>13. Bequests</h5>
<p>Employees are not permitted to accept a bequest granted under the will or trust instrument of a customer of the 
Company, except when such bequest is from a close relative of the employee.<br /><br />
Any exceptions to this policy must be approved by Head-HR in writing, before the bequest is accepted by the 
employee.</p>
<h5>14. Legacies/Wills (from Company’s Customers)</h5>
<p>An employee shall not act either as an Executor or Trustee in respect of the Will of a customer of the Company, and 
shall not accept any benefit directly or indirectly through such a Will.<br /><br />
In the event that an employee anticipates being named in the will of a customer of the Company, the employee shall 
duly report the same to the Head-HR in writing.</p>
<h5>15.	 External Affiliations or Employment</h5>
<p>In the normal course, employees are not expected to have any external affiliations or employment.<br /><br />
However, if exceptional personal situations warrant this, an employee must obtain written permission from the HeadHR before serving as a director, trustee, officer, owner, partner, employee or in any other capacity in nay other 
organization, family business or profession regardless of whether consideration is received or not.<br /><br />
An employee who wishes to serve in any of the aforementioned capacities must submit a written request describing 
the position and all relevant circumstances, including any relationship with the Company, compensation, the time 
which such service will require and a statement as to potential conflict of interest.<br /><br />
All such request are to be addressed to the Head-HR.</p>
<h5>16.	 Confidentiality of Information</h5>
<p>An employee must keep confidential, and not divulge to others, confidential and proprietary information and data 
regarding the business or transaction of the Company, its associates, its current/prospective customers and suppliers.<br /><br />
Proprietary information includes, but is not limited to, products and services, methods, systems, reports, analyses, 
financial data, business plans, marketing methods, strategies and customer lists.<br /><br />
Employees should not disclose confidential or proprietary information except to other employees or such persons 
outside the Company (such as the Company’s lawyers/auditors/ regulators) who have valid business reason for 
receiving such information in order to serve the business purposes of the Company.</p>
<h5>17. Non-Exploitation of Company’s Relationship</h5>
<p>Employees must be careful to ensure that customers or suppliers do not exploit their relationship with the Company, 
and that the Company’s name is not used in connection with any fraudulent, unethical, dishonest or unauthorized 
transactions.<br /><br />
The Company does not issue endorsements of any vendor, supplier, service or product.<br /><br />
The Company’s name must not be used by any vendor or supplier in such way as to suggest such endorsements.<br /><br />
Employees must not use the company’s name to enhance their own opportunities with respect to any external 
relationships or personal transactions, or to imply without proper authorization, Company’s sponsorship or support of 
their outside interests.</p>
<h5>18.	 Community Activities and Holding Political Office</h5>
<p>Employees are encouraged to participate in community affairs.<br /><br />
In order to avoid any conflict of interest, an employee must obtain written permission from the Managing Director 
before becoming a candidate for elective public office, or accepting an appointed public position.<br /><br />
An employee must not allow the Company’s name or reputation to be used in connection with any political campaign, 
except that an employee who is a candidate for elective office may mention that he or she is employed by the 
Company</p>
<h5>19. Non-Discrimination</h5>
<p>Current /prospective customers, suppliers and other employees must be treated without any discrimination arising 
from their race, colour, creed, religion, sex, national origin, marital status, age and physical / mental handicaps 
(except as required by law).<br /><br />
The work environment is to be free from disruptive influences which can interfere with or interrupt the work of the 
Company.<br /><br />
Mails/remarks/conversations with racial, ethnic or sexual overtones that cause offense to the recipients/listeners will 
not be tolerated.</p>
<h5>20. Personal Transactions</h5>
<p>An employee shall not use the Company’s name in any personal transaction, correspondence or reference, such as 
could be interpreted to mean that the Company itself was involved or interested.<br /><br />
Additionally, the Company’s letterheads, correspondence paper, envelope, logos, seals etc, shall not be used by an 
employee for non-Company purpose.<br /><br />
Similarly, infrastructure and facilities provided by the Company to an employee, such as telephone, car etc, shall be 
used exclusively for the Company’s business and for no personal business whatsoever, of the employee.</p>
<h5>21. Sexual Harassment</h5>
<p>No employee shall indulge in sexual harassment which include unwelcome sexually determined behavior (whether 
overtly or by implication) such as:<br /><br />
<li>Physical contact and/or advances;</li><br />
<li>A demand or request for sexual favours;</li><br />
<li> Sexually coloured remarks;</li><br />
<li> Circulating or showing pornographic material, and</li><br />
<li> Any other physical, verbal or non-verbal conduct of sexual nature.</li><br />
Whether or not such conduct constitutes an offense of sexual harassment will be determined by a committee formed 
for this purpose, which would receive and deal with the complaints lodged by the aggrieved staff.</p>
<h5>22. Media Interaction</h5>
<p>Prior permission from the Managing Director is necessary before an employee can represent the Company in any 
public media like newspapers, magazines, radio, TV, cable networks, films etc.<br /><br />
No employees shall, without the prior permission of the Managing Director, share any data or express any opinion 
about the business of the Company to any such public media.</p>
<h5>23. Penalties</h5>
<p>An employee who compromises or violates the law, Company policies relating to conduct of its business or the 
standards contained in this Code, or who fails to disclose information required to be disclosed by this Code, will be 
liable for disciplinary action & punishment (which may extend to dismissal), besides criminal and/or civil proceedings 
under applicable laws.<br /><br /></p>
</div>

      <form>

        <div className="Right"> 
        
        <div className="Name"> 
           <label style={{paddingLeft:"50px", left:"0px"}}>Name:</label> 
           <input name="name" type="text" style={{right:"75px",marginTop:"5px"}} />
         
           </div>
           <div className="id"> 
         <label style={{paddingLeft:"50px", left:"0px"}}>Employee Id:</label> 
           <input name="id" type="text"  style={{right:"75px",marginTop:"5px"}}/>
           </div>
      
           <div className="signs">     
          <div className="signs">
              <img src={Sign} alt="" id="image_sign_content" className="images_content" style={{width:"130px",height:"115px",marginTop:"9940px",marginLeft:"770px"}}/> </div>
          <input type="file" name="image_upload_content" id="in" accept="imagesign/*" onChange={this.signHandler} className="images_content" style={{display:"none"}} ></input>
          <div className="label_content">
              <label htmlFor="in" className="image_upload_content"  style={{marginLeft:"5px",width:"130px", marginLeft:"905px",marginTop:"25px"}}
 >Signature</label>
          </div></div> 

<div className="Date">   <label>
           Date:</label>
           <div className="date">
         <input type="date" className="date" style={{marginRight: "0px",marginTop: "0px",marginLeft: "52px"}}
          />
         </div>
         </div>
      
         </div>

        
         </form>
     

     <br/><br/>
       
       <div className="next">
       
       <NavLink to="/Table">Next</NavLink>
       </div>
       </div>
      
      
       </div>
        );
}
}

export default Create;