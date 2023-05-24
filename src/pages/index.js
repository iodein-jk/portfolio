import * as React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
import Seo from "../components/seo"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const IndexPage = () => (
  <div>
    <div class="flex items-center h-screen p-12 md:p-24 relative">
      <section class="relative z-10">
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:py-24">
          <p class="mb-4 font-serif font-semibold text-indigo-500 md:mb-6 text-xl xl:text-6xl">Welcome To</p>

          <h1 class="font-serif text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-9xl reveal-text">Kenji PortFolio</h1>

          <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

          <div class="flex gap-2.5 sm:justify-center lg:justify-start">
            <Link to="/about" className="inline-block rounded-lg bg-indigo-500 px-10 py-4 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">About</Link>
            <Link to="/works" className="inline-block rounded-lg bg-indigo-500 px-10 py-4 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">Works</Link>
          </div>
        </div>
      </section>

      <div class="absolute top-0 left-0 w-full h-full">
        
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
