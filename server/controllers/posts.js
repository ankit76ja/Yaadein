import PostMessage from '../models/postMessages'

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