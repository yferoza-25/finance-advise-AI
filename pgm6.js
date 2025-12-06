const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/home',(req,res)=>{
    console.log('Request recieved for /home');
    res.status(200).send('<h1> welcome to the home page!</h1><p>This is a simple Express route.</p>');
});
app.get('/about',(req,res)=>{
    console.log('Request recieved for /about');
    res.status(200).json ({
         title:'About us',
         description:'This is a lap prgm to demonstrate Express.js routing',
         version:'1.0.0'
    });
});
app.get('/',(req,res)=>{
    console.log('Request recieved for /');
    res.status(200).send('<h1> welcome to the MERN Express Server!</h1><p>Try navigation to <a href="/home"</home">/home</a> or <a href="/about"</about">/about</a>.</p>');
});
app.use((req,res)=>{
    console.log('404 Not Found:${req.originalurl}');
    res.status(404).send('<h1> 404 Not Found</h1><p>The page your looking for does not exit</p>');
});
app.listen(3002,()=> {
console.log(`Server is running on http://localhost:${3002}`);
console.log(`Open your browser and navigate to:`);
console.log(`-http://localhost:${3002}/home`); 
console.log(`-http://localhost:${3002}/about`); 
console.log(`- http://localhost:${3002})`);
});