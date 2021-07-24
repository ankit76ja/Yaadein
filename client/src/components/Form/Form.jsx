import { TextField,Button, Typography,Paper } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import useStyles from './style';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts, updatePost } from '../../actions/posts';


export const Form = ({currentId, setCurrentId}) => {
    const classes  = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData]= useState({ creator:'', title:'',tags:'',message:'', selectedFile:'' })

    const posts = useSelector(state => state.posts);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId !== null){
            dispatch(updatePost(postData, currentId));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();
    }

    useEffect(()=>{
        if(currentId !== null){
            const selectedPost = posts.filter(post => post._id === currentId);
            setPostData(selectedPost[0]);    
        }
    },[currentId]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator:'', title:'',tags:'',message:'', selectedFile:'' })
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form action="" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography>{currentId ? 'Editing' :'Creating'} a memory</Typography>
                    <TextField name="Creator" variant="outlined" 
                    fullWidth label="Creator"
                    value={postData.creator} onChange = {(event) => setPostData({...postData,creator:event.target.value}) }
                     />
                     <TextField name="Title" variant="outlined" 
                    fullWidth label="Title"
                    value={postData.title} onChange = {(event) => setPostData({...postData,title:event.target.value}) }
                     />
                     <TextField name="Message" variant="outlined" 
                    fullWidth label="Message"
                    value={postData.message} onChange = {(event) => setPostData({...postData,message:event.target.value}) }
                     />
                     <TextField name="Tags" variant="outlined" 
                    fullWidth label="Tags"
                    value={postData.tags} onChange = {(event) => setPostData({...postData,tags:event.target.value.split(',')}) }
                     />
                     <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false}
                        onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
                     </div>
                    <Button className={classes.buttonSubmit}
                        variant="contained"
                        type="submit"
                        color="primary"
                        size="large"
                        fullWidth>Submit</Button>
                    <Button 
                    variant="contained"
                    
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={clear}>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}
