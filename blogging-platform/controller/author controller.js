const Author = require('../models/author');

const createAuthor = async ( req,res) => {
    const {name,email} = req.body;
    try{
        const author = new Author({ name,email});
        await author.save();
        res.status(201).json(author);
    } catch (err) {
        res.status(400).json({error:err.message });
    }
};

const getAllAuthors = async( req,res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({error:'Failed to fetch authors'});
    }
};

Module.exports = {createAuthor, getAllAuthors};