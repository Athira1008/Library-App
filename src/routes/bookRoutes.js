const express= require ('express');
const booksRouter =express.Router();
var books= [
    {
        title:' Practical Node.js: Building Real-World Scalable Web Apps',      
        author:'Azat Mardan',
        genre:'Technology',
        img:"book1.jpg"
    },
    {
        title:'A Thousand Splendid Suns',
        author:'Khaled Hosseini',
        genre:'Drama',
        img:"book2.jpg"
    },
    {
        title:'I Am Malala',
        author:'Malala Yousafzai',
        genre:'Biography',
        img:"book3.jpg"
    }
];
    booksRouter.get('/',function(req,res){
        res.render("books",{
          nav:[
              {
                  link:'/',name:'Home'
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
           heading:'Books',
           books
  
        });
   });
booksRouter.get('/:id',function(req,res){
     const id =req.params.id;
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
         heading:'Book',
         book:books[id]
      });
 });
 
module.exports =booksRouter;