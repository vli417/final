import React from 'react';
import styles from './components.module.css'; 

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postContent}>
        <img
          src={post.imageURL}
          alt="Post Image"
          className={styles.postImage}
          style={{ width: '600px', height: '600px' }}
        />
        <div className={styles.postCaption}>{post.postContent}</div> {}
      </div>
    </div>
  );
};

export default PostCard;

