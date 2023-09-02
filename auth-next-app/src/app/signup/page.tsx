"use client"

import axios from "axios";
import { useRouter } from "next/router"
import { SetStateAction, useState, ChangeEvent, FormEvent } from "react";

export default function SignUpPage() {
    const [userName, setuserName] = useState("") 
    const [password, setPassword] = useState("") 
    const [email, setEmail] = useState("")

    const onChangeHandler = (setState: any) => (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    } 

    const onSignUpUser = async(e: FormEvent<HTMLFormElement>) => {
        debugger
        e.preventDefault();
        try {
            let userDetails = {
               username:userName, password:password, email:email 
           }
            const response = await axios.post('/api/users/signup', userDetails );
           console.log({response})
       } catch (error:any) {
           console.log(error)
        }
       finally {
         
        }
    }



    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
                <form onSubmit={onSignUpUser}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input onChange={onChangeHandler(setuserName) } value={userName} type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input onChange={onChangeHandler(setPassword)} value={password} type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input onChange={onChangeHandler(setEmail)} value={email} type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
                    </div>
                </form>
            </div>
       </div>
       
    )
}

