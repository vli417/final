import styles from './components.module.css';

const CreateUserForm = ({createUser}) => {
    return(
        <div>
            
            <form className={styles.Form} onSubmit={(e) => createUser(e)}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />


                <label htmlFor="password">Password</label>
                <input type="password" name="password" />


                <button type="submit">Create User</button>
           </form>
        </div>
    );
};

export default CreateUserForm;