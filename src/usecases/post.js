const Post = require('../models/post')


function create({title,date, readTime, description, author, image}){
    const newPost = new Post({
        title,
        date,
        readTime,
        description,
        author,image
    })

    return newPost.save()
}

function search({title,date,readTime,description,author,image}){

    const newPost = new Post({
        title,
        date,
        readTime,
        description,
        author,image
    })

    
   

    const searched = async ()=> await Post.find({title:title,date:date,readTime:readTime,description:description,author:author,image:image})

     

    return searched()
}

function postDelete(id){
    
    const deleted = async ()=> await Post.findByIdAndDelete(id)

    return deleted()

}

function update(id,{title,date,readTime,description,author,image}){
    const updated = async ()=> await Post.findByIdAndUpdate(id,{title,date,readTime,description,author,image})

    return updated()
}

module.exports = {
    create,
    search,
    postDelete,
    update
}