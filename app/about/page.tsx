import styles from '../../styles/About.module.css';

export const metadata = {
  title: 'About RogueApps',
  description: 'Learn more about RogueApps.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#00f49c',
};

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About RogueApps</h1>
        <p>The RogueApps project documents when Good Apps Go Rogue.</p>
        <p>RogueApps are OIDC/OAuth 2.0 applications that, while not explicitly evil, are often abused and used maliciously. This repository documents the emerging attack surface of SaaS, OIDC, and OAuth 2.0 applications that help attackers during intrusions. If the application was not specifically created for evil purposes, but has been observed during identity compromises, it's a RogueApp.</p>
        <p>This project aims to surface OIDC/OAuth 2.0 application tradecraft to aid defenders in detection, deterrence, and mitigation of application attacks in the SaaS world.</p>
        <p>The repository for this project is open source and available <a href="https://github.com/huntresslabs/rogueapps">here!</a></p>
        <h3>Acknowledgements</h3>
        <p>RogueApps was inspired by <a href="https://wtfbins.wtf/">WTFBins</a>, which is the excellent work of <a href="https://taggartinstitute.org/">The Taggart Institute / Michael Taggart</a>. Thank you to TTI/Taggart!</p>  
        <p>RogueApps was created by Matt Kiely, Principal Security Researcher at Huntress, and the Huntress Research Team.</p>
      </main>
    </div>
  );
}
