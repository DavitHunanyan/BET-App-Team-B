import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 let headers =[];
			  for(let i in obj){
			  		headers.push(i);
					 // console.log(headers);
			  }
		 	return(
		 <thead>
		 	<tr >
		 		<th>{headers[2]}</th>
				<th>{headers[3]}</th>
				<th>{headers[5]}</th>
				<th>{headers[4]}</th>
				<th>{headers[6]}</th>
		 		<th>Checkbox</th>
		 	</tr>
		 </thead>
		 	);
		 }
	}
    export default TableHeader;