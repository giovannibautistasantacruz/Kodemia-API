require('dotenv').config()

const dbConnect = require('./src/lib/db')

const server = require('./src/server')



const listenServer = function(){
    return new Promise((resolve,reject)=>{
        server.listen(8080,()=>{
            resolve()
        })
    })
}


async function main(){
    await dbConnect()
    console.log('DB CONECTED');
    
    await listenServer()

    console.log('Server is ready')
}

main()
    .then(()=>{
        console.log('Server Listening')
    }).catch(error=>{
        console.error('Error:',error);
        
    })
    