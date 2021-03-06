/** 
* EasyHTTP Library 
* Library for making HTTP requests
* @version 3.0.0
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
    async get(url){
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }

    // making http POST request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        const responseData = await response.json()
        return responseData
    }

    // making http PUT request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        const responseData = await response.json()
        return responseData
    }

    // making http DELETE request
    async delete(url){
        const response = await fetch(url, {
                method: 'DELETE', 
                headers: {
                    'Content-type': 'application/json'
                }            
            })
            const responseData = await 'Resource Deleted'
            return responseData
    }
    
}