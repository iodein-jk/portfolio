import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="flex text-base fixed top-0 left-0 w-full z-20">
    <div class="basis-3/12 p-5">
      <Link className="font-serif text-neutral-950" to="/">{siteTitle}</Link>
    </div>

    <nav class="basis-9/12">
      <ul class="flex justify-end p-5 m-0">
        <li><Link className="px-5 text-sky-400" to="/">Top</Link></li>
        <li><Link className="px-5 text-sky-400" to="/about">About</Link></li>
        <li><Link className="px-5 text-sky-400" to="/works">Works</Link></li>
        <li><a class="px-5 text-sky-400 flex items-center" href="https://iodein-jk.github.io/library/" target="_blank">
          Library
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
          </svg>
          </a></li>
      </ul>
    </nav>
  </header>
)

export default Header
