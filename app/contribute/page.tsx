"use client";

import { useState, useEffect } from 'react';
import { RogueApp } from '../../lib/types';
import styles from '../../styles/Contribute.module.css';

interface Contributor {
  name: string;
  count: number;
}

export default function Contribute() {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    async function fetchContributors() {
      let data: RogueApp[];

      if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
        const res = await fetch('/rogueapps.json');
        data = await res.json();
      } else {
        const res = await fetch('https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json');
        data = await res.json();
      }

      const contributorMap: { [key: string]: number } = {};

      data.forEach(app => {
        app.contributors
          .filter(contributor => contributor !== "Huntress Research Team") // No need to pat ourselves on the back here.
          .forEach(contributor => {
            contributorMap[contributor] = (contributorMap[contributor] || 0) + 1;
          });
      });

      const contributorsList = Object.keys(contributorMap).map(name => ({
        name,
        count: contributorMap[name]
      }));

      setContributors(contributorsList);
    }

    fetchContributors();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contribute to RogueApps</h1>
        <p>We'd love to hear your stories of RogueApps that you've seen!</p>
        <p>
          If you want to contribute to the RogueApps project, please{' '}
          <a href="https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29">
            open an Issue in the official GitHub repository.
          </a>{' '}
          Please follow the issue template and include details about the observed TTPs for the RogueApp.{' '}
          <b>Please do not submit any sensitive, private, or proprietary information.</b>
        </p>

        <hr className={styles.divider} />

        <h2 className={styles.thankYou}>Thank you to our Contributors! 💖</h2>
        <div className={styles.contributorGrid}>
          {contributors.map((contributor, index) => (
            <div key={index} className={styles.contributorItem}>
              🔥 {contributor.name} <span className={styles.yellowText}>x {contributor.count}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
