import React from 'react'
import Lists from './Lists';
class Work extends React.Component{
    state = {
        lists: [{ index: Math.random(), period : "", name: "", address: "" , place: "",  responsibility:"", ctc:"", up:""}],
    }
    handleChanges = (e) => {
        if (["period", "name", "address" , "place", "responsibility", "ctc","up" ].includes(e.target.name)) {
   
        let lists = [...this.state.lists]
        lists[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
        this.setState({ [e.target.name]: e.target.value })
        }
        }
        addsRow = (e) => {
            this.setState((prevState) => ({
            lists: [...prevState.lists, { index: Math.random(), period : "", name: "", address: "" , place: "",  responsibility:"", ctc:"", up:""}],
            
            }));
            }
             
            deteteRow = (index) => {
            this.setState({
            lists: this.state.lists.filter((s, sindex) => index !== sindex),
            });
            
            }
            
            
            OnchangeDelete(record) {
            this.setState({
            lists: this.state.lists.filter(rec => rec !== record)
            });
            }
          
    render(){
        let { lists } = this.state
    return(
        <div className="Workexp">              
        <form>              
        <h5>Work Experience</h5>
        <div className="row-work">

<table className="table-work">
<thead>
<tr>
<th>Periods</th>
<th>Name of <br></br>Company</th>
<th>Address of <br/>Company</th>
<th>Place of <br/> Posting</th>
<th>Major <br/>Responsibilities</th>
<th>CTC (PM / PA)</th>
<th>Upload <br/>Certificate</th>

</tr>
</thead>
<tbody>
<Lists add={this.addsRow} delete={this.OnchangeDelete.bind(this)} lists={lists} ></Lists>
</tbody>
</table>


</div>
</form>
    </div>);

    }
    }
export default Work;
