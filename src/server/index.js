'use strict'

// const debug = require('debug')('nodestr:server')
// const express = require('express')
// const app = express()
// app.set('port', port)

const http = require('http')
const hostname = 'localhost'
const port = 3000
const server = http.createServer((req, res) => {
    // req is an http.IncomingMessage, which is readable stream
    // res is an http.ServerResponse, which is a writable stream

    // this line says: headers, methods and url are req properties
    const {headers, method, url} = req
    if (req.method === 'GET' && req.url === '/healthcheck') {
        // implicit header
    res.statusCode = 200
    res.setHeader('Content-Type', 'this will appear in server-response')
    // PS.: setHeader(name, value)

    // explicit header
    /*
    res.writeHead(200, {
        'Content-Type': 'this will appear in server-response'
    })
    */
    
    res.end('Hello World!\n')
    }
    else {
        res.statusCode = 404
        res.end('404! Page Not Found!\n')
    }
})
// const router = express.Router()

// app.use('/', route)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
