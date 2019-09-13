const exppress = require('express')

const post = require('../usecases/post')

const router = exppress.Router()

router.post('/',async (request,response)=>{
   
console.log('Haciendo post!')

    const{title,description,author,date,readTime,image}= request.body;

    const newPost = await post.create({title,description,author,date,readTime,image})

    response.json({
        success: true,
        message: 'post created',
        data:{
            "posts":newPost
        }
    })

})

//completar listarposts .find de mongoose
router.get('/',async (request,response)=>{

    console.log('Haciendo GET!');

    

    const{title,description,author,date,readTime,image}= request.query;


    const newPost = await post.search({title,description,author,date,readTime,image})


    response.json({
        success: true,
        message: 'Listed Post',
        data:{
            "posts":newPost
        }
    })
})

router.delete('/:id',async (request,response)=>{

    console.log('Haciendo DELETE!');

    
    console.log(request.params)

    const{id}= request.params;



    const deletePost = await post.postDelete(id)


    response.json({
        success: true,
        message: 'Delete Post',
        data:{
            "posts":deletePost
        }
    })
}) //borrar .deleteById de mongoose
router.patch('/:id',async (request,response)=>{

    console.log('Haciendo PATCH!');

    
    console.log(request.params)

    const{id}= request.params;

    const{title,description,author,date,readTime,image}= request.body;

    const updatePost = await post.update(id,{title,description,author,date,readTime,image})


    response.json({
        success: true,
        message: 'Update Post',
        data:{
            "posts":updatePost
        }
    })
})//editar un post .fin .save


module.exports = router