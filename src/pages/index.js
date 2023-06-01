import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/module/slider.module.scss"

const IndexPage = () => (
  <div>
    <div class="border-solid border-[16px] border-white flex items-center h-screen relative">
      <section class="relative z-10">
        <div class="bg-[#ffffff] flex flex-col justify-center p-6 sm:text-center lg:text-left">
          <p class="mb-4 font-serif text-indigo-500 text-center md:mb-2 text-md">Welcome To</p>

          <h1 class="font-serif text-black-800 text-center mb-4 text-2xl reveal-text">Kenji PortFolio</h1>

          <div class="flex gap-2.5 sm:justify-center lg:justify-start">
            <Link to="/about" className="inline-block rounded-lg bg-indigo-300 px-6 py-2 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">About</Link>
            <Link to="/works" className="inline-block rounded-lg bg-indigo-300 px-6 py-2 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">Works</Link>
          </div>
        </div>
      </section>

      <div class="absolute rounded-md overflow-hidden top-0 left-0 w-full h-full">
        <div class="w-full h-full">
          <div className={styles.slide}>
            <div className={`${styles.slideItem} ${styles.slideItem_1}`}>
              <div class="bg-blue-100 h-screen flex items-start md:items-center justify-end">
                <div class="container">
                  <StaticImage src="../images/works/mic/mock/000.png" placeholder="none" alt="MICWARE CO., LTD." class="" />
                </div>
              </div>
            </div>
            <div className={`${styles.slideItem} ${styles.slideItem_2}`}>
              <div class="bg-lime-100 h-screen flex items-end md:items-end justify-start">
                <div class="container">
                  <StaticImage src="../images/works/ai/mock/000.png" placeholder="none" alt="Ai-MetaRoom" class="" />
                </div>
              </div>
            </div>
            <div className={`${styles.slideItem} ${styles.slideItem_3}`}>
              <div class="bg-gray-100 h-screen flex items-start md:items-start justify-end">
                <div class="container">
                  <StaticImage src="../images/works/artiststore/mock/000.png" placeholder="none" alt="ARTISTSTORE.JP" class="" />
                </div>
              </div>
            </div>
            <div className={`${styles.slideItem} ${styles.slideItem_4}`}>
              <div class="bg-rose-100 h-screen flex items-end md:items-start justify-start">
                <div class="container">
                  <StaticImage src="../images/works/2nd/mock/000.png" placeholder="none" alt="2nd Kitchen" class="" />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
