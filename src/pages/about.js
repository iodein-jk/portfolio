import * as React from "react"
import { Link } from "gatsby"

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
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-1/4 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                </div>
              </div>
              <div class="sm:w-3/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div class="w-full text-left md:pr-10 md:py-6 pl-4">
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                      <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                      <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                      <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                      <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div class="flex relative">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                      <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
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
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Security</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Support</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>

              <div class="flex divide-x rounded-lg border bg-gray-50">
                <div class="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div class="p-4 md:p-6">
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-gray-600 body-font">
          <div class="mx-auto max-w-screen-xl px-5">
            <div class="text-center">
              <h3 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h3>
            </div>
            <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-200 text-green-500 mr-4">1年未満</span>
                  <span class="title-font font-medium">Authentic Cliche Forage</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800 mr-4">1~2年</span>
                  <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">3年以上</span>
                  <span class="title-font font-medium">Coloring Book Ethical</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">Badge</span>
                  <span class="title-font font-medium">Typewriter Polaroid Cray</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">Badge</span>
                  <span class="title-font font-medium">Pack Truffaut Blue</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white flex-shrink-0 mr-4">Badge</span>
                  <span class="title-font font-medium">The Catcher In The Rye</span>
                </div>
              </div>
            </div>

            <div class="text-center py-6">
              <Link to="/works" className="inline-block rounded-lg bg-indigo-500 px-10 py-4 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">Works</Link>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
