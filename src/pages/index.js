
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import UserProfileCard from '@/app/components/UserProfileCard';
import styles from '../app/globals.css';





export default function UserProfile({isLoggedIn, userInformation}){

   

    const router = useRouter();
    const [userData, setUserData] = useState(null); // State to store user data
    const userId = userInformation?.uid; 
    useEffect(() => {
        //if user is not logged in, send them to login page
        if(!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

   


    return (
        
        <main> 

            
            <UserProfileCard user={userInformation} />
        </main> 
    ); 
}



