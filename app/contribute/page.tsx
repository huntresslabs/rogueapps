import styles from '../../styles/Home.module.css';

export const metadata = {
  title: 'Contribute - RogueApps',
};

export default function Contribute() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contribute to RogueApps</h1>
        <p>If you have any information about OAuth applications that are often used maliciously, please reach out to us.</p>
      </main>
    </div>
  );
}
