import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { title, subtitle } from "@/components/primitives";
import Alink from "./Alink";
import Example from "@/components/features";
import { WalletIcon, MoonIcon, LockClosedIcon, PaperClipIcon, LanguageIcon, NoSymbolIcon } from "@heroicons/react/24/solid"

export default function Home() {
	return (
		<main>
		<section className="flex flex-col items-center justify-center gap-4 py-12 md:py-14">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Track&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Expenses&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Within FingerTips with Taka
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern Finance Management App.
				</h2>
			</div>

			<div className="flex gap-3">
      <Alink />
			</div>
			<div className="mt-8">
				<Snippet className="dark:bg-gray-700 bg-gray-300" hideSymbol hideCopyButton>
					<span>
						Get started by Downloading <Code color="primary">Taka</Code>
					</span>
				</Snippet>
			</div>
		</section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
		<div id="features" className="pt-20">
  <div className="header">
    <h1 className="text-4xl font-extrabold text-center text-black dark:text-white">
      We've got you <span className="text-tmk-blue">covered.</span>
    </h1>
    <p className="w-full px-8 mx-auto my-4 font-light text-center text-black dark:text-white md:w-1/2 lg:w-1/3">
      Taka offers a complete solution for your finance Management
	  With visuals, reports and more.
    </p>
  </div>
  <div className="grid grid-cols-1 gap-8 lg:mx-20 mt-20 text-center md:grid-cols-2 lg:grid-cols-3">
    {/* First */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-green-400 to-blue-500 p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500"
          style={{ zIndex: -10 }}
        />
		<WalletIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Local Storage
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          Every Transactions are saved in local storage with high-level encryption.
        </p>
      </div>
    </div>
    {/* Second */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-red-500"
          style={{ zIndex: -10 }}
        />
		<MoonIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Light and Dark Themes
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          Comes with out of the box support for light and dark themes that
          integrates seamlessly.
        </p>
      </div>
    </div>
    {/* Third */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-gray-700"
          style={{ zIndex: -10 }}
        />
		<LockClosedIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Biometric Lock
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          We support fingerprint and face recognition for easy access and Security purposes.
        </p>
      </div>
	  
    </div>
	    {/* Fourth */}
		<div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-blue-500 to-cyan-900 p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500"
          style={{ zIndex: -10 }}
        />
        <PaperClipIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Export to CSV
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          We have an export feature to export your transactions to CSV or Json file.
        </p>
      </div>
    </div>
    {/* Fifth */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-t from-[#a8edea] to-[#fed6e3] p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-cyan-500"
          style={{ zIndex: -10 }}
        />
		<LanguageIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Languages
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          We support 10+ languages to help you with your simplification. We will try to add more soon.
        </p>
      </div>
    </div>
    {/* Sixth */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 p-8">
        <div
          className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-purple-700"
          style={{ zIndex: -10 }}
        />
		<NoSymbolIcon className="w-7 h-7 text-white" />
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
          Ad-free and Open Source
        </h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          Taka is an Ad-free and open source app. You can check the source code on our <Link className="https://github.com/retromusicplayer/paisa" href="" underline="always">GitHub page</Link></p>
      </div>
	  
    </div>
  </div>
</div>
		</main>
	);
}
