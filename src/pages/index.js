import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo"
import * as visual from "../styles/module/visual.module.scss"

const IndexPage = () => (
  <div>
    <div class="border-solid border-white flex items-start lg:items-center justify-center lg:justify-start h-screen relative">
      <section class="relative z-10 w-full lg:w-auto">
        <div class="bg-[#ffffff] flex flex-col justify-center p-6 sm:text-center lg:text-left">
          <p class="mb-4 font-serif text-indigo-500 text-center md:mb-2 text-md">Welcome To</p>

          <h1 class="font-serif text-black-800 text-center mb-4 text-2xl reveal-text">Kenji PortFolio</h1>

          <div class="flex gap-2.5 justify-center lg:justify-start">
            <Link to="/about" className="inline-block rounded-lg bg-indigo-300 px-6 py-2 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">About</Link>
            <Link to="/works" className="inline-block rounded-lg bg-indigo-300 px-6 py-2 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">Works</Link>
          </div>
        </div>
      </section>

      <div className={visual.images + " absolute rounded-md overflow-hidden top-0 left-0 w-full h-full"}>
        <div className={visual.images_pc + " w-full h-full lg:block hidden"}></div>
        <div className={visual.images_tb + " w-full h-full md:block hidden"}></div>
        <div className={visual.images_sp + " w-full h-full block"}></div>
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
