import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
      <div class="pt-20">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <p class="font-serif mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-3xl">Works</p>
            <h2 class="font-serif mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-6xl">制作物</h2>
          </div>
        </div>

        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-3xl font-normal text-gray-800 md:mb-6 lg:text-6xl">WebSite</h2>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <Link to="/works-web-06" className="gradient-wrap bg-blue-100 group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/mic/mock/001.png" placeholder="none" alt="MICWARE CO., LTD." class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Corporate</span>
              </Link>

              <Link to="/works-web-04" className="gradient-wrap bg-lime-100 group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/ai/mock/001.png" placeholder="none" alt="Ai-MetaRoom" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-lime-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">LP</span>
              </Link>

              <Link to="/works-web-03" className="gradient-wrap group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/artiststore/mock/001.png" placeholder="none" alt="ARTISTSTORE.JP" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">EC</span>
              </Link>

              <Link to="/works-web-02" className="gradient-wrap bg-rose-100 group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/2nd/mock/001.png" placeholder="none" alt="2nd Kitchen" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">EC</span>
              </Link>

              <Link to="/works-web-01" className="gradient-wrap bg-pink-100 group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/woman/mock/001.png" placeholder="none" alt="Womanlife CO., LTD." class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Media / EC</span>
              </Link>

              <Link to="/works-web-00" className="gradient-wrap bg-purple-100 group relative flex h-48 items-end justify-end overflow-hidden rounded-lg shadow-lg md:h-96">
                <StaticImage src="../images/works/boj/mock/001.png" placeholder="none" alt="BALLET OFFICE JAPAN" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-800 via-transparent to-transparent opacity-50"></div>
                <span class="relative mr-3 mb-3 inline-block rounded-lg border border-white px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Corporate / EC</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export const Head = () => <Seo title="Works" />

export default SecondPage
