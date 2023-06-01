import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <>
      <div class="md:h-screen pt-20 px-4 md:px-24 relative">
        <section class="relative z-10">
          <div class="mx-auto max-w-screen-2xl md:px-8">
            <h1 class="font-serif text-center mb-4 text-3xl text-rose-500 md:mb-6 lg:text-6xl">2nd Kitchen</h1>
            <div class="container mx-auto text-center">
              <StaticImage src="../images/works/2nd/mock/000.png" placeholder="none" alt="" class="" />
            </div>
          </div>
        </section>
      </div>

      <div class="bg-rose-100 py-6 sm:py-12 lg:py-12">
        <div class="mx-auto px-4 md:px-8">
          <div class="flex flex-col justify-center items-end gap-4 md:gap-6 md:flex-row xl:gap-8">
            <figure class="relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-rose-700 rounded-full dark:bg-rose-600"></span>
                  <span class="w-2 h-2 bg-amber-300 rounded-full bg-amber-300"></span>
                  <span class="w-2 h-2 bg-green-600 rounded-full bg-green-600"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://www.second-kitchen.net</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/2nd/pc/000.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
              </div>
            </figure>
            <figure class="relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-rose-700 rounded-full dark:bg-rose-600"></span>
                  <span class="w-2 h-2 bg-amber-300 rounded-full bg-amber-300"></span>
                  <span class="w-2 h-2 bg-green-600 rounded-full bg-green-600"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://www.second-kitchen.net</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/2nd/pc/001.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
              </div>
            </figure>
          </div>

          <div class="flex flex-col justify-center items-end gap-4 md:gap-6 md:flex-row xl:gap-8 py-6">
            <figure class="relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-rose-700 rounded-full dark:bg-rose-600"></span>
                  <span class="w-2 h-2 bg-amber-300 rounded-full bg-amber-300"></span>
                  <span class="w-2 h-2 bg-green-600 rounded-full bg-green-600"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://www.second-kitchen.net</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/2nd/pc/002.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
              </div>
            </figure>
          </div>

          <div class="flex justify-center items-end gap-4 md:gap-6 xl:gap-8">
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/2nd/sp/000.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
              </div>
            </figure>
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/2nd/sp/001.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
              </div>
            </figure>
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/2nd/sp/002.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8 py-8 md:py-12">
          <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-rose-500 sm:text-lg md:text-xl">案件概要</h3>
              </div>

              <p class="text-gray-500">ECサイト
                <br />京都に店舗を構えるお弁当屋さんの通販サイト</p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-rose-500 sm:text-lg md:text-xl">担当内容</h3>
              </div>

              <p class="text-gray-500">サイトコーディング(レスポンシブ)
                <br />ECCUBE開発
                <br />Webページデザイン（TOP・下層ページ）</p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-rose-500 sm:text-lg md:text-xl">制作期間</h3>
              </div>

              <p class="text-gray-500">約3ヶ月</p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-rose-500 sm:text-lg md:text-xl">ツール/言語</h3>
              </div>
              <p class="text-gray-500">フロントエンド／HTML/CSS javaScript　jQuery
                <br />バックエンド／PHP Smarty
                <br />デザイン／Adobe Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </>
  </Layout>
)

export const Head = () => <Seo title="2nd Kitchen" />

export default SecondPage
