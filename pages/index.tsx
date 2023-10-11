import Head from 'next/head'
import Image from 'next/image'
import { Inter, Caveat, Annie_Use_Your_Telescope } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })
const shantell = Annie_Use_Your_Telescope({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Shaw | Creator</title>
        <meta name="description" content="Generated by Ben Shaw" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main + " " + shantell.className}>
        <div className={styles.upper}>


          <div className={styles.column}>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item1}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/building-worlds-cropped.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing1}>Creating yet another world for D&D</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>Hey, I&apos;m Ben. I love building worlds, coding, making music, and collaborating.</p>
              </div>
            </div>
            
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item5}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/miasma-cloud.gif"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing5}>Escape from the miasma in the poison forest!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I participated in the most recent <span className={styles.ludum}>Ludum</span> <span className={styles.dare}>Dare</span> and made a game called <span className={styles.miasma}>Miasma</span>. <span className={styles.faded}>You can play it <a href="https://grey-mouser.itch.io/miasma" target="_blank"><span className={styles.ludum}>here</span></a>, and this is my <a href="https://ldjam.com/users/greymouser" target="_blank"><span className={styles.dare}>dev diary</span></a> on the process.</span></p>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item7}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/opera-cropped.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing7}>They&apos;re like &apos;why is he bowing like that, so dramatic&apos;</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>Before coding, I spent a lot of my time as an <span className={styles.green}>opera singer</span>. <span className={styles.faded}>I love collaborating, performing, and being on stage.</span></p>

              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item8}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/website-screen-3.png"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing8}>A website I built for my music: (<a href="https://www.benerismusic.com/" target="_blank" rel="noreferrer noopener">benerismusic.com</a>)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I also love <span className={styles.green}>making music</span>. I produced an album of original music during Covid. <span className={styles.faded}>(You can check me out as <span className={styles.green}>Ben Eris</span> on <span className={styles.green}>Spotify</span>)</span></p>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item9}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/generative01.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing9}>Sound waves, or a world map?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I&apos;m currently working on a <span className={styles.green}>coding+music</span> project combining elements of <span className={styles.green}>generative music</span>, sound design, and game design using <span className={styles.green}>Unity</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.bleedWrap}>
          <div className={styles.bleedText + " " + shantell.className}>
          <p className={styles.writing10}>More about me...</p>
          </div>
      </div>
      <footer>
      <div className={styles.footer + " " + shantell.className}>
          <p>1. Check out <a href="https://www.linkedin.com/in/benjamin-shaw-1560881b4/" target="_blank">my LinkedIn.</a></p>
          <p>2. Check out <a href="https://github.com/bshaw89" target="_blank">my GitHub.</a></p>
          <p>3. Check out <a href="https://benerismusic.com" target="_blank">my music.</a></p>
          <p>4. Call me up! 778-877-2329</p>
        </div>
      </footer>
    </>
  )
}
