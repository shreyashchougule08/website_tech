const express = require('express')
const app = express()
const port = 3000

// ✅ important (for JSON data)
app.use(express.json())

const users = {
    1: { name: 'shreyash', age: 20, dept: 'aiml' },
    2: { name: 'shrey', age: 21, dept: 'cse' },
    3: { name: 'ashish', age: 22, dept: 'mechanical' }
}

// middleware
app.use((req, res, next) => {
    console.log('Request received:', new Date())
    next()
})

// ✅ login route (fixed)
app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username === 'admin' && password === 'password') {
        res.send("Login successful ✅")
    } else {
        res.status(401).send("Login failed ❌")
    }
})

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about page is here')
})

app.get('/users', (req, res) => {
    let result = {}

    for (let key in users) {
        if (users[key].dept === 'aiml') {
            result[key] = users[key]
        }
    }

    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// middle ware- it is function that run middleware in the
// it can check data,loginfo ,authenticate user

// app.use((req, res, next) => {
//     console.log('Request received:', new Date())
//     next()
// })

// Activity 1 - where we use middleware fun 
//  why we use middle ware fun in company level where will use 
//  next()-passes control to they next control without next req will be stuck
