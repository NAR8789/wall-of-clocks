import Head from 'next/head'
import Clock from '../components/clock'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wall of Clocks</title>
      </Head>

      <main className={styles.main}>
        <Clock/>
      </main>
    </div>
  )
}
