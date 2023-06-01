import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Pdf from "../pdf/insight-guide-501-0-84822534-20230601144411528000000-eoYXXN.pdf";

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
      <div class="pt-20">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <p class="font-serif mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-3xl">About</p>
            <h2 class="font-serif mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-6xl">自己紹介</h2>
          </div>
        </div>

        <section class="text-gray-600 body-font py-6 sm:py-8 lg:py-12">
          <div class="container px-5 mx-auto flex flex-col">
            <div class="flex flex-col justify-center sm:flex-row">
              <div class="sm:w-2/4 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <StaticImage src="../images/about/avatar/000.jpg" placeholder="none" alt="土井 健司" class="rounded-full" />
                </div>
                <div class="flex flex-col items-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg text-center">土井 健司</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-2"></div>
                  <div class="flex justify-center flex-col items-center">
                    <p class="text-base text-left md:text-center">WEBデザイナー・フロントエンドエンジニアでご飯を食べています。
                    <br />ニート→制作会社正社員勤務→フリーランスで自宅勤務
                    <br />普段は大阪のワンルームでゲームを嗜みながら生きています。</p>
                    <ul class="mt-6">
                      <li class="my-3">
                        <a href="https://github.com/iodein-jk" target="_blank" class="flex items-center text-sky-400 hover:underline">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                          <span class="block">
                            Githubはこちら
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                          </svg>
                        </a>
                      </li>
                      <li class="my-3">
                        <a href={Pdf} target="_blank" class="flex items-center text-sky-400 hover:underline">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                          <span class="block">
                            ストレングスファインダーで自己分析してみた
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="sm:w-2/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div class="w-full text-left md:pr-10 md:py-6 pl-4">
                  <div class="flex relative pb-12">
                    <div class="h-full w-5 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">2012年4月</h2>
                      <p class="leading-relaxed">ECCコンピュータ専門学校、ゲームコースに入学。<br />しかし1日で挫折しWEBコースへ転科</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-5 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">2014年3月〜2015年7月</h2>
                      <p class="leading-relaxed">専門学校、WEBコースを卒業。<br />当時就職先を内定していましたが、自分探しの為辞退。<br />以後1年、実家でニート生活を送る</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-5 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">2015年8月〜2021年8月</h2>
                      <p class="leading-relaxed">時間を開け、改めてWeb業界に入りたいと考え、制作会社を受けを内定をいただく。<br />WEBデザイナーとして正社員になる</p>
                    </div>
                  </div>
                  <div class="flex relative">
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">2021年9月〜現在</h2>
                      <p class="leading-relaxed">主任という役職ももらえ、順風満帆。<br />しかしもっと新しい働き方を模索したいと考え、上記制作会社を退職。<br />フリーランスとして活動を開始</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-white py-6 sm:py-12 lg:py-24">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Works / Experience</h2>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">会社員／フリーランスの実務での制作物カテゴリ一覧</p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">コーポレートサイト</h3>
                  <p class="text-gray-500">平均5~10Pのサイト制作<br />静的サイト、WordPress。
                    <br />その他社内独自CMSでの作成</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">メディア/ECサイト</h3>
                  <p class="text-gray-500">WordPress（ゼロベース制作　カスタマイズ有）
                    <br />ECCUBE2.13.4
                    <br />ECCUBE4での作成、更新、保守管理</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">LPサイト</h3>
                  <p class="text-gray-500">社内新製品の広告サイト
                    <br />顧客商品販促サイト
                    <br />（すべて1P 問い合わせフォーム有）</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">システム管理画面のフロント構築</h3>
                  <p class="text-gray-500">モック制作
                    <br />javaScriptを用いた計測システム
                    <br />（グラフ等）作成</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">広告、パンフレット</h3>
                  <p class="text-gray-500">10~20P前後の紙媒体広告
                    <br />AI、PSDでの作成</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">動画</h3>
                  <p class="text-gray-500">社内、社外広報用の動画制作
                    <br />premiereProで制作</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-gray-600 body-font">
          <div class="mx-auto max-w-screen-2xl px-5">
            <div class="text-center">
              <h3 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Skill / Experience</h3>
            </div>
            <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">レスポンシブサイト制作</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">HTML5/CSS3</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">javascript</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">WordPress</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">ECCUBE2.13.5</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">jQuery</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Node.js</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Webデザイン</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">PHP</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">jQuery</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">ECCUBE4</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">ECCUBE3</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">Docker</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">vue.js</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">nuxt.js</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">react.js</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">gatsby.js</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">広告/販促物作成</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-green-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">動画制作</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-gray-600 body-font py-6 sm:py-12 lg:py-24">
          <div class="mx-auto max-w-screen-2xl px-5">
            <div class="text-center">
              <h3 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Tool / Experience</h3>
            </div>
            <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">Atom</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">Abode Photoshop</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">ChatWork</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-300 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">sublimetext</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-300 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">vscode</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Abode illustrator</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Abode XD</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Abode DreamWeaver</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">PHP</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">GoogleAnalytics</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">svn</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-200 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-300 text-blue-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Slack</span>
                </div>
              </div>
              <div class="p-0.5 sm:w-1/4 w-full">
                <div class="bg-blue-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-200 text-blue-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">Abode premierePro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default SecondPage
