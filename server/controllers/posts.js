import PostMessage from '../models/postMessages'
const mongoose = require('mongoose');

export const getPost = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({message:errror.message})
    }
}

export const createPosts = async (req,res)=>{

    const body = req.body;
    const newPost = new PostMessage(body); 
    try {
        await newPost.save();
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({message:error})
    }
}

export const updatePosts = async (req,res) => {
    const {id: _id} = req.params;
    const posts = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not any post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, posts, {new:true});
    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not any post with that id');
    console.log('id', _id);
    await PostMessage.findByIdAndRemove(_id);
    
    res.status(200).send('Post deleted Successfully');

}

export const likePost = async  (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not any post with that id');
    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount : post.likeCount + 1}, {new:true});

    res.json(updatedPost);
}