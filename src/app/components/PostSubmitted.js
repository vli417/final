import React from 'react';
import styles from './components.module.css';

const PostSubmitted = ({ onClose }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.PostSubmitted}>
        <p>Post Submitted</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PostSubmitted;
