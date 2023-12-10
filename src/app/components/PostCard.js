import React from 'react';
import styles from './components.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.PostCard}>
      <p>{post.postContent}</p>
     
    </div>
  );
};

export default PostCard;
