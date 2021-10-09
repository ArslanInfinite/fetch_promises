const http = new EasyHTTP()

// getting users 
const users = http.get('https://jsonplaceholder.typicode.com/users')

console.log(users)
