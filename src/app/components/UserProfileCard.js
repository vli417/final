


import styles from './components.module.css';

const UserProfileCard = ({ user }) => {
  return (
    <div className={styles.centeredContainer}>
      <div className={styles.UserProfile}>
        <h1>User Profile</h1>
       
        <p>Username: {user?.username}</p>
        
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;



