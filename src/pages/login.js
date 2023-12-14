import { useEffect } from 'react';
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm"
import styles from './login.module.css';


export default function Login({ isLoggedIn, loginUser }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <LoginForm loginUser={loginUser} /> {/* LoginForm directly included */}
    </main>
  );
}

// Inside your LoginForm component JSX


