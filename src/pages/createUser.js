import Header from "@/app/components/Header";

import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import CreateUserForm from "@/app/components/CreateUserForm";
import styles from './createUser.module.css';


export default function CreateUser({ createUser, isLoggedIn }){


    const router = useRouter();
    useEffect(() => {
        //if user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);

   



    return(

        <main className={styles.main}>
              <h1>Create User</h1>
              <CreateUserForm createUser={createUser} /> {}
            </main>
         
       
            
        
    );
};