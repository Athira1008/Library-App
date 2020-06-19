const express= require ('express');
const authorsRouter =express.Router();
var authors=[
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
   authorsRouter.get('/',function(req,res){
      res.render("authors",{
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
        
         title:'Library Management Website-Authors',
         heading:'Authors'
      });
 });
//  authorsRouter.get('/:id',function(req,res){
//      const id=req.params.id;
//     res.render("author",{
//         nav:[
//             {
//                 link:'/index',name:'Home'
//             },
//             {
//                 link:'/books',name:'Books'
//             },
//             {
//                 link:'/authors',name:'Authors'
//             },
//             {
//                 link:'/index',name:'Logout'
//             }
//         ],
        
//          title:'Library Management Website-Author',
//          heading:'Author'
//       });
//  });
module.exports=authorRouter;