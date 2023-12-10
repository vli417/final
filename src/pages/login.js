import { useEffect } from 'react';
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm"





export default function Login({ isLoggedIn , loginUser }){
    // if user is logged in, forward them to profile page
    const router = useRouter();
    useEffect(() => {
        //if user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    return(
      
        <main >
            <h1>Login</h1>
            <LoginForm loginUser={loginUser} /> 
        </main>
       
    );
}