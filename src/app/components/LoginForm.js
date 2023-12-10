import { userAgent } from 'next/server';
import styles from './components.module.css';

const LoginForm = ({loginUser}) => {
    return(
        <div>
            <h2>Login Form</h2>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="username">Username</label>
                <input type="username" name="username" />



                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button type="submit">Login</button>
           </form>
        </div>
    );
};

export default LoginForm;
