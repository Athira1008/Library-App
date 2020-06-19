const express= require ('express');

// init express
const app =new express();

// global navbar
const nav= [
    {
        link:'/index',name:'Home'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
];

// to access Router

const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const booksRouter=require('./src/routes/booksRoutes');

// serving static files
app.use(express.static('./Public'));

// setting view engine
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);

// create  end points/route handless

app.get('/',function(req,res){
res.render("index",
{   nav,
    title:'Library Management Website-Home',
    heading:'Library',
    list:[
        {
            title:'10 Projects to Get You to Your First Dev Job in 2020',
            website:'https://www.sitepoint.com/',
            time:'24 March 2020',
            img:"1.jpg"
    
        },
        {
            title:'Exciting New Tools For Designers',
            website:'https://www.webdesignerdepot.com/',
            time:'7 Days Ago',
            img:"2.jpeg"
        },
        {
            title:'40+ Web Tools & Services You Should Check Out for 2020',
            website:'https://designshack.net/',
            time:'19 Feb 2020',
            img:"3.jpg"
        }
    ]
});
});

app.listen(5000);