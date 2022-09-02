import Document, { Head, Html, Main, NextScript } from 'next/document'
import Image from 'next/image'

import { Footer, Github, MetaData, SponsoredBy } from '@thegametools/utils'

import Legal from '../components/Legal'
import NavBar from '../components/NavBar'
import { config } from '../config'

const TITLE = 'Fluxfall Horizon Generators' as const

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <MetaData descr={config.descr} title={TITLE} ogImg={`${config.cdn}/ogimg.jpg`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:ital,wght@0,500;0,600;0,700;1,400&family=Orbitron:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="mb-2 min-h-screen bg-gradient-to-b from-stone-300 to-white">
          <NavBar />
          <SponsoredBy image={Image} />
          <div className="flex flex-col items-center">
            <Main />
            <Footer footerClasses="border-t border-stone-400 my-4" sectionClasses="max-w-screen-sm">
              <Legal />
            </Footer>
          </div>
          <NextScript />
          <Github repo="thegametools-fluxfall" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
