
import { useEffect, useState } from 'react';

import { onSnapshot, getFirestore, collection, addDoc,query,orderBy } from "firebase/firestore";
import {  } from 'firebase/firestore';
import PostCard from '@/app/components/PostCard';
import styles from '@/app/components/components.module.css';




const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore();

  
  useEffect(() => {
   
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postsArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsArray);
    });

    return () => unsubscribe;
  }, []);

  
  return (

    
    <div className={styles.feedContainer}>
     
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    
  );

};

export default FeedPage;


