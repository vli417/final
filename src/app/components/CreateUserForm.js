import styles from './components.module.css';

const CreateUserForm = ({createUser}) => {
    return(
        <div>
            <h2>Create User</h2>
            <form className={styles.Form} onSubmit={(e) => createUser(e)}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            
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