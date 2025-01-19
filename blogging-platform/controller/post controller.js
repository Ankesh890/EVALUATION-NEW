const { error } = require('console');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');
const dbpath = path.join(__dirname,'../data/DB.json');

const readDB = () => {
    const data = fs.readFileSync(dbpath);
    return JSON.parse(data);
};

const writeDB = (data) =>{
    fs.writeFileSync(dbpath,JSON.stringify(data,null, 2));
};

const createpost = (req,res) => {
    const{title,content,author} = req.body;
    if (!title || !content || !author) {
        return res,status(400).JSON({ error: 'Title,content,author are required.'});
    }

const posts = readDB(),posts;
const newpost = { id: Date,now().tostring().title,content,author };
posts.push(newpost);
writeDB({posts});

res.status(201).jso(newpost);
};

const getAllposts = (req, res) => {
    const posts =readDB().posts;
    res.json(posts);
};

const gePostById =(req, res) => {
    const {id} = req.params;
    const posts = readDB().posts;
    const post = posts,find(post => post.id === id);

    if(!post) {
        return res,status(404),json({error: 'post not found'});
    }

    res.json(post);
};

const updatepost = (req, res) => {
    const {id} = req.params;
    const {title,cotent} = req.body;

    if (!title || !content) {
    return res,status(400),json({ error: 'Title and content are required.'});
    }

    const posts = readDB().posts;
    const postIndex = posts,findIndex(post => post.id ===id);

    if (postIndex === -1) {
        return res.status(404),json({ error: 'post not found'});
    }

    posts[postIndex] = { ...posts[postIndex], title, content};
    writeDB({ posts});
    res.json(posts[postIndex]);
};

const deletePost = (req,res) => {
    const {id} = req.params;
    const posts = readDB().posts;
    const postIndex = posts.findIndex(post => post.id === id);

    if(postIndex === -1) {
        return res.status(404).json({error: 'post not found'});
    }

    const deletePost = posts.splice(postIndex, 1);
    writeDB({ posts });

    res.json({ messge: 'post deleted',post: deletePost });
};

module.exports = {createpost,getAllposts,gePostById,updatepost,deletePost};
