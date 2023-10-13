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
        <title>Ben Shaw | Dear Ludeon</title>
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
                <p>Hey <span className={styles.ludeon}>Ludeon</span>, I&apos;m Ben.</p>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item2}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/ben-paris-cropped.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing2}>Me in World of Paris</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I love building <span className={styles.ludeon}>worlds</span>, especially with amazing and passionate people.</p>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item3}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/ludeon.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing3}></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>So I want to help you build incredible worlds using <span className={styles.ludeon}>Unity</span> and <span className={styles.ludeon}>C#</span>. <span className={styles.faded}>And any other cool tools you&apos;re using to make RimWorld.</span></p>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.pageLeft}>
                <div className={styles.item + " " + styles.item4}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/helmet-cropped.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing4}>Gotta be safe, this language is sharp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I&apos;ve been a full time <span className={styles.ludeon}>coder for 3 years</span>, working in <span className={styles.ludeon}>C#</span>, <span className={styles.ludeon}>DevOps</span>, and <span className={styles.ludeon}>Git</span>.<span className={styles.faded}> ASP.NET, JavaScript, node.js, MVC, TypeScript, React, Next.js, HTML, CSS ...</span></p>
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
                <div className={styles.item + " " + styles.item6}>

                  <div className={styles.polaroid}>

                    <Image
                      className={styles.photo}
                      src="/tts-2.jpg"
                      alt="Next.js Logo"
                      width={550}
                      height={37}
                      priority
                    />
                    <div className={styles.caption + " " + caveat.className}>
                      <p className={styles.writing6}>Virtual dice towers cause as much chaos as real ones</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <p>I even did some scripting in <span className={styles.ludeon}>Lua</span> for a D&D campaign I ran for 2 years using Tabletop Simulator. That was rough. <span className={styles.faded}>(But my players really appreciated it. Probably.)</span></p>
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
                <p>Before coding, I spent a lot of my time as an <span className={styles.ludeon}>opera singer</span>. <span className={styles.faded}>I love collaborating, performing, and being on stage.</span></p>

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
                <p>I also love <span className={styles.ludeon}>making music</span>. I produced an album of original music during Covid. <span className={styles.faded}>(You can check me out as <span className={styles.ludeon}>Ben Eris</span> on <span className={styles.ludeon}>Spotify</span>)</span></p>
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
                <p>I&apos;m currently working on a <span className={styles.ludeon}>coding+music</span> project combining elements of <span className={styles.ludeon}>generative music</span>, sound design, and game design using <span className={styles.ludeon}>Unity</span>.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <div className={styles.bleedWrap}>
          <div className={styles.bleedText + " " + shantell.className}>
          <p className={styles.writing10}>SO, Ludeon...</p>
          </div>
      </div>
      <footer>
      <div className={styles.footer + " " + shantell.className}>
      <p>1. Check out <a href="https://www.linkedin.com/in/benjamin-shaw-1560881b4/" target="_blank">my LinkedIn.</a></p>
          <p>2. Check out <a href="https://github.com/bshaw89" target="_blank">my GitHub.</a></p>
          <p>3. Check out <a href="https://grey-mouser.itch.io/miasma" target="_blank">my game</a> on itch.io.</p>
          <p>4. Check out <a href="https://benerismusic.com" target="_blank">my music.</a></p>
          <p>5. Call me up! 778-877-2329</p>
        </div>
      </footer>
    </>
  )
}
