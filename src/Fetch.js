export function call(url, method, body = false, error_message = "Something went wrong"){
  if(body !== false && method!=="GET"){
    body = JSON.stringify(body);
  }
  return fetch(url,{method: method,
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body : body,
    }
  )
  .then(function(response){
    if (!response.ok) {
      return {error: true, message: error_message};
    }
    return response;
  })
  .then(response => response.json())
  .catch((error) => {
      return {error: true, message: error_message};
    });
}

//Fetch.getData('http://crmbetc.azurewebsites.net/api/contacts').then(response => console.log(response));
//console.log("POST :",response));
			/*Fetch.postData('http://crmbetb.azurewebsites.net/api/Contacts',{CompanyName:"STDev",
                                                                            Country:"Armenia",
																			Email:"davidstdev@gmail.com",
                                                                            FullName:"Mane Boyakhchyan",
                                                                            Position:"FrontEnd Developer"} )*/
			//  Fetch.deleteData('http://crmbetb.azurewebsites.net/api/Contacts?Guid=aeb09a83-3078-452b-a734-e082b35b4554');
export default call;