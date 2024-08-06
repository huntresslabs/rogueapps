import styles from '../../styles/Home.module.css';

export const metadata = {
  title: 'Contribute - RogueApps',
};

export default function Contribute() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contribute to RogueApps</h1>
        <p>We'd love to hear your stories of RogueApps that you've seen!</p>
        <p>If you want to contribue to the RogueApps project, please <a href="https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29">open an Issue in the official GitHub repository.</a> Please follow the issue template and include details about the observed TTPs for the RogueApp. <b>Please do not submit any sensitive, private, or proprietary information.</b></p>
      </main>
    </div>
  );
}
