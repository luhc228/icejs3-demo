import { request } from 'ice';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';
import Button from 'components/Button';

export default function Home() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});

  const updateCount = () => {
    setCount((c) => c + 1)
  };
  useEffect(() => {
    request('/api/todos/1').then(res => setData(res))
  }, [])
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Hello ice.js 3
        </p>
      </header>
      <main>
        <Button onClick={updateCount}>
          👍🏻 {count}
        </Button>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn ice.js
          </a>
        </p>
        <p>
          {JSON.stringify(data)}
        </p>
      </main>
    </div>
  );
}
