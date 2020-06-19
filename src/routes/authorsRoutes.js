const express= require ('express');
const authorsRouter =express.Router();
var authors=[
    {
        title:'Azat Mardan',
        website:'https://azat.co/',
        info:'Tech Executive, author of 18 Books, Microsoft MVP, M.Sc., entrepreneur, investor and a paleo enthusiast.',
        img:"author1.jpg"
    },
    {
        title:'Khaled Hosseini',
        website:'https://khaledhosseini.com/',
        info:'Khaled Hosseini is an American novelist and physician.He is the author of the New York Times bestsellers The Kite Runner, A Thousand Splendid Suns, and And the Mountains Echoed. ',
        img:"author2.jpg"
    },
    {
        title:'Malala Yousafzai',
        website:'https://www.malala.org/',
        info:'Malala Yousafzai, is a Pakistani activist for female education and the youngest Nobel Prize laureate.',
        img:"author3.jpg"
    },
];
   authorsRouter.get('/',function(req,res){
      res.render("authors",{
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
        
         title:'Library Management Website-Authors',
         heading:'Authors',
         authors
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
module.exports=authorsRouter;