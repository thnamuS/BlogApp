const express= require('express');
const app =express();
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const Post = require('./models/Post')
const jwt=require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret='Sumanth';
const multer=require('multer');
const uploadMiddleware = multer({dest:'public/uploads/'});
const cookieParser = require('cookie-parser');
const fs=require('fs')
const bodyParser = require('body-parser');
const { info } = require('console');

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/')

app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(express.static('public'));


app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const userDoc=await User.create({
            username,
            password:bcrypt.hashSync(password,salt)
        });
        res.json(userDoc);
        console.log("here")
    }
    catch(e){

        console.log(e);
        res.status(400).json(e.message)
    }

});

app.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    console.log(req.body);
    const userDoc = await User.findOne({username});

    const passOk= bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk);
    if (passOk){
        // user available
        jwt.sign({username,id:userDoc._id},secret,{},(_,token)=>{
            console.log('abc')
            // if (err) throw err;
            res.cookie('token',token).json({
                id:userDoc._id,
                username,
            });
            console.log(token)
            console.log('cookie set successfully');
            res.send()
        });
    }else {
        res.status(400).json('Wrong Credentials');
    }
});


app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });

  app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {title,summary,content} = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author:info.id,
      });
      res.json(postDoc);
    });
  
  });

  app.get('/post', async (req,res) => {
    res.json(
      await Post.find()
        .populate('author', ['username'])
        .sort({createdAt: -1})
        .limit(20)
    );
  });
  
  app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
  })


  app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      await postDoc.updateOne({ 
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
  
  });

app.listen(3000);