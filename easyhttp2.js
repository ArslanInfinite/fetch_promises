/** 
* EasyHTTP Library 
* Library for making HTTP requests
* @version 2.0.0
* @author Arslan Ali
* @license MIT
*
**/ 

// es6 syntax
class EasyHTTP{
    // making http GET request with a url parameter
    // the fetch needs to wrapped in a promise
    // the data will be returned as a response
    // the error will be returned as a reject 
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    // making http POST request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }
    
}