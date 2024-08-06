import Link from 'next/link';
import styles from '../../styles/components/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="/contribute" className={styles.navLink}>Contribute</Link>
      <Link href="/about" className={styles.navLink}>About</Link>
    </nav>
  );
}