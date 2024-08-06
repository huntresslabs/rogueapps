import styles from '../../styles/components/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
    <p> © {currentYear} | <a href="https://huntress.com"> Huntress</a> | All Rights Reserved.</p>
    </footer>
  );
}