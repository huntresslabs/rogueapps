import Link from 'next/link';
import styles from '../../styles/components/Callout.module.css';

export default function Callout() {
  return (
    <div className={styles.callout}>
      <h3 className={styles.calloutTitle}>Psst! RogueApps is new! We'd love for you to contribute!</h3>
      <p className={styles.calloutText}>
        Help us document emerging OAuth application tradecraft. If you've ever seen a RogueApp in the wild, please contribute to the project!
      </p>
      <Link href="/contribute" legacyBehavior>
        <a className={styles.calloutButton}>Contribute</a>
      </Link>
    </div>
  );
}

  