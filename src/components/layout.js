/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>

        <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
          <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="py-8 text-center text-sm text-gray-400">© {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://portfolio-iodein.netlify.app/">portfolio-iodein</a></div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
