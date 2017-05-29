import React, { Component } from 'react';
import TableHeader from'./TableHeader.js';
import TableRow from './TableRow.js';
//import AddRowTable from './AddRowTable.js';
import '../StyleSheet/Table.css';
import call from '../Fetch.js';

//import array from '../array.js';

class Table extends Component{
			constructor(props){
				super(props);
				this.state={
				  data:[],
				  guids:[]
				};
				this.updateTable = this.updateTable.bind(this);
				this.sendMail = this.sendMail.bind(this);
				this.getGuid = this.getGuid.bind(this);
			}
			updateTable(){
		      this.setState({data:[]});
		     // console.log("update table, and Data",array);
			}
			getGuid(guidArray){
				this.setState({guids:guidArray});
			}
			componentDidMount(){
			call('http://crmbetb.azurewebsites.net/api/contacts','GET').then(response => {
				this.setState({data:response});
				console.log("GET Data",response);
				});
		     }
			 sendMail(){
				 if(this.state.guids.length!==0){
					call('http://crmbetb.azurewebsites.net/api/SendMail','POST',this.state.guids);
				 }else{
					 alert("not check contact");
				 }
			 }
			render(){
		     	return(
		     	<div className="UserTable">
					<div id="scroll">
			     	<table className="table">
			     	<TableHeader headerdata={this.state.data[0]} className="tableheader"/>
			     	<TableRow update={this.updateTable} dataArray={this.state.data} guids={this.getGuid}/>
			     	</table>
					
			     </div>
				 	<button onClick={this.sendMail}>Send Mail</button>
				{/* <AddRowTable  update={this.updateTable} Id={this.state.data.length + 1} className="addrowtable"/>*/}
				 </div> 

			
		     	);
		     }
     	
	}
    export default Table;