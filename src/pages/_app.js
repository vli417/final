import { useCallback, useEffect , useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";


import { 
    createUserWithEmailAndPassword,
    getAuth, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut, 
} from "firebase/auth";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";


export default function MyApp({Component, pageProps}){

    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [error, setError] = useState(null);
    

    
    const createUser = useCallback(
        
        async (e)=>{
            e.preventDefault();
            const username = e.currentTarget.username.value;
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const auth = getAuth();
            const db = getFirestore();
            let user;

            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    user = userCredential.user;
                })

                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage });
                    setError(errorMessage);
                });
                   
            await addDoc(collection(db, "users"), {
                        
                        username: username, 
                        userId: user?.uid,
                     })

                        .then(()=>{
                            const userToSet = {...user, username}

                            setIsLoggedIn(true);
                            setUserInformation(userToSet);
                            setError(null);

                        })

                        .catch((error)=>{
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.warn({error, errorCode, errorMessage });
                            setError(errorMessage);
                        })


  
    },
    [setError,setIsLoggedIn,setUserInformation]
    
     
    );


    


   

    const loginUser = useCallback(
        (e)=>{
            e.preventDefault();
            //Assign Email and Password to variables from form
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            //create a reference to the auth object
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    //since the user is true, set logged in
                    setIsLoggedIn(true);
                    //provide some informatio about the user via setState
                    setUserInformation(user);
                    //Clear Erroors
                    setError(null);
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage});
                    setError(errorMessage);
                });
        },
        [setError,setIsLoggedIn,setUserInformation]
        );

    const logoutUser = useCallback(()=>{
        const auth = getAuth();
        signOut(auth)
            .then(()=>{
                setUserInformation(null);
                setIsLoggedIn(false);

            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({error,errorCode,errorMessage});
                setError(errorMessage);

            });

    },[setError, setIsLoggedIn, setUserInformation, signOut]);



    // initialize frebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);

    }, []);

    //user has loaded page, check their status and set state accordingly

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    //User is signed in, see docs for a list of available 
                    setUserInformation(user);
                    setIsLoggedIn(true);
                }else{
                    //user is signed out
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                //whenever state changes setLoading to false
                setIsLoading(false);
                
            });
        }
    }, [appInitialized]);
    



    if (isLoading) return null; 

    return (
        <>
            <Header isLoggedIn={isLoggedIn} logoutUser={logoutUser}/>
            <Component
                {...pageProps}
                createUser={createUser}
                loginUser={loginUser}
                isLoggedIn={isLoggedIn}
                userInformation={userInformation}
            />
            <p>{error}</p>
        </>
    );
}