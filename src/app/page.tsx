"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import Masonry from "react-masonry-css";

const tabs =  [
  {
    key: 'all',
    display: 'All'
  },
  {
    key: 'Reb',
    display: 'Rebecca'
  },
  {
    key: 'Claire', 
    display: 'Claire'
  },
]

export default function Home() {
  return (
    <div className="h-full bg-[url('/reb0.jpg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Website</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-6">
        <div>I need money</div>
        <Link href="#" className = "rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90">
          Get in touch
        </Link>

      </header>
      
      <main className="pt-[110px]">
        <div className="flex flex-col h-full items-center">
          <TabGroup className="flex flex-col items-center w-full h-full">
            <TabList className="flex item-center gap-12">
              {tabs.map(tab => (
                <Tab key={tab.key} className="px-2">
                {({selected}) => (
                  <span className={selected ? "text-white" : "text-stone-600"}>
                    {tab.display}
                  </span>
                )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <TabPanel>
                <Masonry breakpointCols={2} className="flex gap-2" columnClassName="">
                  <img src="/reb0.jpg" alt="reb0" className="my-2"/>
                  <img src="/reb1.jpg" alt="reb1" className="my-2"/>
                  <img src="/reb10.jpg" alt="reb2" className="my-2"/>
                  <img src="/reb3.jpg" alt="reb3" className="my-2"/>
                  <img src="/reb4.jpg" alt="reb4" className="my-2"/>
                </Masonry>
              </TabPanel>
              <TabPanel>Rebecca</TabPanel>
              <TabPanel>Claire</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center align-center">
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
