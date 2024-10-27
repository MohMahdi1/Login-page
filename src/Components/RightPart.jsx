import axios from "axios";
import { useEffect, useState } from "react";

function RightPart() {
    const [message,setMessage] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassWord] = useState("");
    const [messageType,setMessageType] = useState("");

    async function handleLogin(e){ 
        e.preventDefault();
        try{
            const response = await axios.post("https://tivanpart-website-backend-stage.darkube.app/api/auth/signin",{
                password,
                mobile,
                loginType: "STATIC"
                },
                
                );
            if(response.status === 201){
                setMessage ("You have successfully logged in");
                setMessageType("Login successful")
                console.log(message)
            }
            else{
                setMessage("The phone number or password is incorrect");
                setMessageType("error")
            }
        }
        catch(error){
            if(error.response){
                setMessage(error.response.data.message ||"An error occurred. Please try again.");
                setMessageType("error");
            }
            else{
                setMessage("An error occurred. Please check your network connection and try again.");
                setMessageType("error");
            }
        }
        
    }
    useEffect(()=>{
        setTimeout(()=>{
            setMessage("");
            setMessageType("");
        },5000)
    },[message])
    return (
      <div className="mx-4 my-8 md:mx-8 lg:mx-16 xl:mx-32 text-black font-bold w-full lg:w-1/2 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Login</h1>
          <h3 className="mt-3 text-sm md:text-base lg:text-lg">
            Enter your mobile and password to log in our dashboard
          </h3>
        </div>



        <form onSubmit={handleLogin} className="my-8 md:my-12 lg:my-14">
          <div className="flex flex-col w-full max-w-sm">
            <label>Username</label>
            <input
              className="p-2 mt-1 focus:outline-none focus:border-blue-500 border border-gray-300 rounded-md"
              type="text"
              value={mobile}
              onChange={(e)=>{
                setMobile(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-3 w-full max-w-sm">
            <label>Password</label>
            <input
              className="p-2 mt-1 focus:outline-none focus:border-blue-500 border border-gray-300 rounded-md"
              type="password"
              value={password}
              onChange={(e)=>{
                setPassWord(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-color2 w-full max-w-sm py-3 rounded-lg text-color1 mt-6 hover:bg-color5"
          >
            Login
          </button>
        
        </form>
        {message && (
                <div
                    className={`fixed text-color1 top-5 right-5  p-4 rounded-md transition-opacity duration-500 ${messageType === "Login successful" ? "bg-green-500" : "bg-red-500"}`}
                >
                    {message}
                </div>
            )}
      </div>
    );
  }
  
  export default RightPart;
  