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
      </ul>
    </nav>
  </header>
)

export default Header
