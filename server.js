//create server
// console.log("hello world");
const express=require("express");
const server=express();
const middleware1=(req,res,next)=>{
   console.log("hello pritpal");
   next() //to block flow and take it back to the requestd route
}
const middleware2=(req,res,next)=>{
    console.log("middleware2");
     next()
}
server.use(middleware1); //acessible to all the routes
// server.use(middleware2);
server.get("/",(req,res)=>{
    res.send("hello")
})
server.get("/user",middleware2,(req,res)=>{ //middleware i only want to there be only in specific route
    res.send("helo user")
})
server.listen(3001,()=>{
    console.log("server running at port3001");
})