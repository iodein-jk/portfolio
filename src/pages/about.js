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

        <div class="bg-white py-6 sm:py-12 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
                </div>
              </div>

              <div class="md:pt-8">
                <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">土井 健司</h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />

                  This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>

                <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white py-6 sm:py-12 lg:py-24">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">これまでの経歴</h2>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>

            <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
              <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">July 19, 2021</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
                  </h2>

                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                  <div>
                    <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">April 07, 2021</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
                  </h2>

                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                  <div>
                    <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">March 15, 2021</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
                  </h2>

                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                  <div>
                    <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">January 27, 2021</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
                  </h2>

                  <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                  <div>
                    <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Authentic Cliche Forage</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Coloring Book Ethical</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Typewriter Polaroid Cray</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Pack Truffaut Blue</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/3 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
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
