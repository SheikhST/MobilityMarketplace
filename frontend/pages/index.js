import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mobility Marketplace!
        </h1>

        <p className={styles.description}>
          Get started by{' '}
          <code className={styles.code}>clicking Find And Ride</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h1>Uber &rarr;</h1>
            
          </div>

          <div className={styles.card}>
            <h1>Transit &rarr;</h1>
           
          </div>

          <div
            
            className={styles.card}
          >
            <h1>Via Rail &rarr;</h1>
            
          </div>

          <div
            
            className={styles.card}
          >
            <h1>Bicycle &rarr;</h1>
           
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
