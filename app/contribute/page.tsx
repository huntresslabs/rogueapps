"use client";

import { useState, useEffect } from 'react';
import styles from '../../styles/Contribute.module.css';

interface RogueApp {
  contributor: string;
}

export default function Contribute() {
  const [contributors, setContributors] = useState<string[]>([]);

  useEffect(() => {
    async function fetchContributors() {
      const res = await fetch('https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json');
      const data: RogueApp[] = await res.json();
      const contributorSet = new Set(data.map(app => app.contributor));
      setContributors(Array.from(contributorSet));
    }
    fetchContributors();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contribute to RogueApps</h1>
        <p>We'd love to hear your stories of RogueApps that you've seen!</p>
        <p>If you want to contribute to the RogueApps project, please <a href="https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29">open an Issue in the official GitHub repository.</a> Please follow the issue template and include details about the observed TTPs for the RogueApp. <b>Please do not submit any sensitive, private, or proprietary information.</b></p>
        
        <hr className={styles.divider} />
        
        <h2 className={styles.thankYou}>Thank you to our Contributors! 💖</h2>
        <div className={styles.contributorGrid}>
          {contributors.map((contributor, index) => (
            <div key={index} className={styles.contributorItem}>
              {contributor}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}