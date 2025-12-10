import React from "react"
import {useNavigate} from "react-router-dom"
const Fail = () => {
     const Navigate=useNavigate()
            const click=function(){
                Navigate('/')

            }
    return (
        <>
            <div className="bg-black flex flex-col justify-center  items-center h-screen">
                <h1 className="text-white text-5xl font-bold">Sorry,Try Again</h1><br></br>
                <h1 className="text-white text-3xl font-bold">Login Failed</h1>
                <button onClick={click} className=" cursor-pointer text-white mt-10 border p-4 rounded-2xl">Back To Home</button>
            </div>
            


        </>
    )
}

export default Fail


