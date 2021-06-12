import { TextField,Button, Typography,Paper } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './style';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


export const Form = () => {
    const classes  = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData]= useState({ creator:'', title:'',tags:'',message:'', selectedFile:'' })
    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(createPost(postData));
    }

    const clear = () => {
        console.log("submit")
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form action="" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography>Creating a memory</Typography>
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
                    value={postData.tags} onChange = {(event) => setPostData({...postData,tags:event.target.value}) }
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
