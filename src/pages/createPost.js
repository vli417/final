
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from "firebase/storage";

import styles from './CreatePostPage.module.css';

export default function CreatePost({ isLoggedIn, userInformation }) {
  const router = useRouter();

  useEffect(() => {
    // If the user is not logged in, send them to the login page
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn, router]);

  // Create function to create a post
  const createPostFunction = useCallback(async (e, imageUpload) => {
    e.preventDefault();

    const postContent = e.currentTarget.postContent.value;
    const storage = getStorage();
    const db = getFirestore();

    let imageURL;
    const storageRef = ref(storage, imageUpload?.name);
    
    
    await uploadBytes(storageRef, imageUpload).then(async(snapshot)=>{
        await getDownloadURL(snapshot.ref).then((url)=>{
            imageURL = url;
        });
    })
    
   
    .catch((error)=>{
        console.warn(error);
    });

    // Get user info to link post to the user
    const userId = userInformation.uid;

    // Send post to Firestore using addDoc to generate an automatic ID
    
    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, {
      postContent: postContent,
      userId: userId,
      imageURL: imageURL || '',
    });
    


    // Redirect to the feed page after successful post creation
    router.push('/feed'); 
  }, [getFirestore, userInformation, router]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Create Post</h1>
      <CreatePostForm createPostFunction={createPostFunction} />
    </main>
  );
}
