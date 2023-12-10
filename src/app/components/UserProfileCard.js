

import styles from './components.module.css'

const UserProfileCard = ({user}) => {
    console.log('Username:', user?.username); 
    console.log("User Object in UserProfileCard:", user); 
    return(
        <div className={styles.UserProfile}>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
            
            

        </div>
    );
};

export default UserProfileCard;




