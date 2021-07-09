import React from "react";
import TaskList from "./List";
	
 	class Graduation extends React.Component {
 	state = {
 	list: [{ index: Math.random(), name: "", year: "" ,mark: "", rank: "" , sheet:""}],
 	}
 	 
 	handleChange = (e) => {

 	if (["name","year","mark","rank","sheet"].includes(e.target.name)) {

 
 	let list = [...this.state.list]
 	list[e.target.dataset.id][e.target.name] = e.target.value;
 	} else {
 	this.setState({ [e.target.name]: e.target.value })
 	}
 	}
 	addRow = (e) => {
 	this.setState((prevState) => ({
 	list: [...prevState.list, { index: Math.random(), name: "", year: "", mark: "" ,rank:"" ,sheet:""}],
 	}));
 	}
 	 
 	deteteRow = (index) => {
 	this.setState({
 	list: this.state.list.filter((s, sindex) => index !== sindex),
 	});
 	
 	}
 	
 	
 	OnDelete(record) {
 	this.setState({
 	list: this.state.list.filter(r => r !== record)
 	});
 	}
 	render() {
 	let { list } = this.state
 	return (
 	<div className="contents">
 	<form >
	 <h4>Graduation</h4>
 	<div className="row" style={{ marginTop: 20 }}>
 
 	<table className="table" >
 	<thead>
 	<tr>
 	<th>Name of the College/University</th>
 	<th>Year Completed</th>
	 <th>% of Marks</th>
	 <th>Award/Rank if any</th>
	 <th>Marksheet</th>
 	</tr>
 	</thead>
 	<tbody>
 	<TaskList add={this.addRow} delete={this.OnDelete.bind(this)} list={list}></TaskList>
 	</tbody>
 	</table>
 
 	
 	</div>
 	</form>
 	</div>
 	)
 	}
 	}
 	export default Graduation;