import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import PostSubmitted from "@/app/components/PostSubmitted"; 
import styles from './CreatePostPage.module.css';

export default function CreatePost({ isLoggedIn, userInformation }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    // If the user is not logged in, send them to the login page
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  // Create function to create a post
  const createPostFunction = useCallback(async (e) => {
    e.preventDefault();
    const postContent = e.currentTarget.postContent.value;

  

    // Get user info to link post to the user
    const userId = userInformation.uid;

    // Send post to Firestore using addDoc to generate an automatic ID
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, {
      postContent: postContent,
      userId: userId,

      
    });
    setIsModalOpen(true);

    // Re-route the user away from createPost
  }, [getFirestore, userInformation]);


  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Create Post</h1>
      <CreatePostForm createPostFunction={createPostFunction} />
      {isModalOpen && <PostSubmitted onClose={closeModal} />}
    </main>
  );
}
