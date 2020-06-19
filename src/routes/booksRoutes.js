const express= require ('express');
const booksRouter =express.Router();
var books=[
    {
        title:'name1',
        author:'author1',
        genre:'genre1',
        img:"img1.jpg"
    },
    {
        title:'name2',
        author:'author2',
        genre:'genre2',
        img:"img2.jpg"
    },
    {
        title:'name3',
        author:'author3',
        genre:'genre3',
        img:"img3.jpg"
    },
];
   booksRouter.get('/',function(req,res){
      res.render("books",{
        nav:[
            {
                link:'/index',name:'Home'
            },
            {
                link:'/books',name:'Books'
            },
            {
                link:'/authors',name:'Authors'
            },
            {
                link:'/index',name:'Logout'
            }
        ],
        
         title:'Library Management Website-Books',
         heading:'Books'
      });
 });
 booksRouter.get('/:id',function(req,res){
     const id=req.params.id;
    res.render("book",{
        nav:[
            {
                link:'/index',name:'Home'
            },
            {
                link:'/books',name:'Books'
            },
            {
                link:'/authors',name:'Authors'
            },
            {
                link:'/index',name:'Logout'
            }
        ],
        
         title:'Library Management Website-Book',
         heading:'Book'
      });
 });
module.exports=booksRouter;