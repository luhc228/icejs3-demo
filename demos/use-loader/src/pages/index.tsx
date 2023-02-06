import logo from '@/assets/logo.png';
import styles from './index.module.css';
import news from './news.md';

console.log('news===>', news);

export default function Home() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main dangerouslySetInnerHTML={{ __html: news }}>

      </main>
    </div>
  );
}
