import { userAgent } from 'next/server';
import styles from './components.module.css';



const LoginForm = ({loginUser}) => {
    return(
        <div>
            
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button type="submit" className="loginButton">Login</button>
           </form>
        </div>
    );
};

export default LoginForm;
