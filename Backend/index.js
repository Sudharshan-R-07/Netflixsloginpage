const express =require ("express")
const app=express()
const cors =require("cors")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


var uname="ssudhar415@gmail.com"
var pass="12345"

app.post('/login',function(req,res){
    console.log(req.body.username)
    console.log(req.body.password)
    
    if(uname===req.body.username&&pass===req.body.password){
        res.send(true)
    }
    else{
       res.send(false)
    }

})

app.listen(5000,function(){
    console.log("Sever Started........")

})