import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 //console.log("header obj",obj)
		 let headers =[];
			  for(let i in obj){
			  		headers.push(i);
					  console.log("table header data",headers);
			  }
			  headers.splice(0,3);
         let header= headers.map((data,index)=>
				 <th>{data}</th>);
		 	return(
		 <thead>
		 	<tr >
				
                 {header}
		 		<th>Checkbox</th>
		 	</tr>
		 </thead>
		 	);
		 }
	}
    export default TableHeader;