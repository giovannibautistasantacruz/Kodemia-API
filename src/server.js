

const express = require('express')

const postsRouters = require('./routers/posts')

const app = express()

app.use(express.json())
app.use('/posts',postsRouters)

app.get('/',(request,response)=>{

    response.json({
        message:'Hola'
    })

})

module.exports = app