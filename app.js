const http = new EasyHTTP()

// getting users 
// line 5 will only return the promise, not the data itself 
// const users = http.get('https://jsonplaceholder.typicode.com/users')

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error))

// creating user data
const data = {
    name: 'John Doe', 
    username: 'johndoe', 
    email: 'johndoe@email.com'
}

// creating post 

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(error => console.log(error))
