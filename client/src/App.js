import React, { useEffect, useState } from 'react';
import {Container, Grow, Grid, AppBar,Typography} from '@material-ui/core';
import { Form } from './components/Form/Form';
import { Posts } from './components/Posts/Posts';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';



const App = () => {
    const classes  = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch, currentId]);

    return (
       <Container maxwidth="lg">
           <AppBar className={classes.appBar}  position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Yaadein</Typography>
                <img src="assets/memories.png" className={classes.image} alt="Memories" height="60" width="60"/>
           </AppBar>
           <Grow in>
                <Container>
                    <Grid container justify="space-between" className={classes.mainContainer} alignItem="stretch"  spacing={3}>
                        <Grid item xs={12} sm= {7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm= {4}>
                            <Form currentId= {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
           </Grow>
       </Container>
    )
}

export default App