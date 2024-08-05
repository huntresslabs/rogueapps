import styles from '../../styles/Home.module.css';

export const metadata = {
  title: 'About - RogueApps',
};

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About RogueApps</h1>
        <p>This website documents instances of OAuth applications that, while not evil outright, are often used maliciously by attackers.</p>
      </main>
    </div>
  );
}
