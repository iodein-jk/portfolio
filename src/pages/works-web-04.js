import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <>
      <div class="md:min-h-screen pt-20 px-12 md:px-24 relative">
        <section class="relative z-10">
          <div class="mx-auto max-w-screen-2xl md:px-8">
            <h1 class="font-serif text-center mb-4 text-3xl text-lime-500 md:mb-6 lg:text-6xl">Ai-MetaRoom</h1>
            <div class="container mx-auto text-center">
              <StaticImage src="../images/works/ai/mock/000.png" placeholder="none" alt="" class="" />
            </div>
          </div>
        </section>
      </div>

      <div class="bg-lime-100 py-6 sm:py-12 lg:py-12">
        <div class="mx-auto px-4 md:px-8">
          <div class="flex flex-col justify-center items-end gap-4 md:gap-6 md:flex-row xl:gap-8">
            <figure class="relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-rose-700 rounded-full dark:bg-rose-600"></span>
                  <span class="w-2 h-2 bg-amber-300 rounded-full bg-amber-300"></span>
                  <span class="w-2 h-2 bg-green-600 rounded-full bg-green-600"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://ai-metaroom.com</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/ai/pc/000.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
              </div>
            </figure>
            
            <figure class="relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-rose-700 rounded-full dark:bg-rose-600"></span>
                  <span class="w-2 h-2 bg-amber-300 rounded-full bg-amber-300"></span>
                  <span class="w-2 h-2 bg-green-600 rounded-full bg-green-600"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://ai-metaroom.com</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/ai/pc/001.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
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
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">https://ai-metaroom.com</div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <StaticImage src="../images/works/ai/pc/002.png" placeholder="none" alt="" class="max-w-full h-auto rounded-b-lg" />
              </div>
            </figure>
          </div>

          <div class="flex justify-center items-end gap-4 md:gap-6 xl:gap-8">
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/ai/sp/000.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
              </div>
            </figure>
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/ai/sp/001.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
              </div>
            </figure>
            <figure class="mt-12 max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <StaticImage src="../images/works/ai/sp/002.png" placeholder="none" alt="" class="max-w-full h-auto rounded-[1.25rem]" />
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
                <h3 class="font-semibold text-lime-500 sm:text-lg md:text-xl">案件概要</h3>
              </div>

              <p class="text-gray-500">LPサイト
                <br />Aiを用いた社内システム管理ツール紹介用LPサイト</p>
              <a href="https://ai-metaroom.com" target="_blank" class="flex items-center text-sky-400 hover:underline">
                <span class="block">
                  https://ai-metaroom.com
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                </svg>
              </a>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-lime-500 sm:text-lg md:text-xl">担当内容</h3>
              </div>

              <p class="text-gray-500">サイトコーディング(レスポンシブ)
              <br />アニメーション組込</p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-lime-500 sm:text-lg md:text-xl">制作期間</h3>
              </div>

              <p class="text-gray-500">1ヶ月</p>
            </div>

            <div class="rounded-lg bg-gray-100 p-5">
              <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 class="font-semibold text-lime-500 sm:text-lg md:text-xl">ツール/言語</h3>
              </div>
              <p class="text-gray-500">フロントエンド／HTML/CSS javaScript</p>
            </div>
          </div>
        </div>
      </div>
    </>
  </Layout>
)

export const Head = () => <Seo title="Ai-MetaRoom" />

export default SecondPage
