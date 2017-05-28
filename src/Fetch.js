class Fetch{
  static getData(url){
return new Promise((resolve, reject) => {
        fetch(url).then(response => resolve(response.json()), err => reject(err));
      })     
  } 
  static postData(url,data){
    return new Promise((resolve,reject) =>{
      fetch(url,{method: "POST", headers: {'Accept': 'application/json',
          'Content-Type': 'application/json'},
          body: JSON.stringify(data)})
          .then(response => resolve(response.text(), err => reject(err)))   
    }) 
  }

   static deleteData(url){
    return new Promise((resolve,reject) =>{
      fetch(url,{method: "DELETE"}) 
    }) 
  }
 
}
//Fetch.getData('http://crmbetc.azurewebsites.net/api/contacts').then(response => console.log(response));

export default Fetch;