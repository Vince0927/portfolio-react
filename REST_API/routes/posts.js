// require express
const express = require('express');

const router = express.Router();   //initiate router function
const Post = require('../models/model_post');

// GET ALL THE POST FROM THE DATABASE - working
router.get('/all', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});


    }
});

// you can add as many routes here

// get something from the server
router.get('/specific', (req, res) => {
    res.send('This is the specific post route from another folder');
});


// SUBMIT A POST TO THE DATABASE-working
router.post('/add', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);

    } catch(err){
        res.json({message: err});
    }
})


// GET SPECIFIC POST FROM UNIQUE ID- working
router.get('/uniqueID/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    }catch(err){
        res.json({message: err});    
    }
})



// DELETE POST -working
router.delete('/delete/:postId', async(req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }

})


// UPDATE A POST - working
// email, subject etc
router.patch('/update/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set: {name: req.body.name, email: req.body.email, 
                    subject: req.body.subject, message: req.body.message}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
})




module.exports = router;

