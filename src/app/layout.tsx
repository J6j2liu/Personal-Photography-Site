import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import reb10 from "/public/reb10.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import classNames from "classnames";

const inter = Arsenal({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Website",
  description: "Website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "overflow-auto")}>
        <div className="select-none">
          <Image
            className="fixed left-0 top-0 z-0 object-cover h-full select-none"
            src={reb10}
            alt="bg"
            placeholder="blur"
            priority
          />
        </div>

        <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 select-none">
          <Menu>
            <MenuButton className="rounded-3xl text-xl bg-white font-semibold text-stone-700 px-4 py-2 hover:bg-opacity-90 
              data-[active]:bg-stone-800 data-[active]:text-white
              ">
              {'\u2261'}</MenuButton>

            <MenuItems
              anchor="bottom"
              className="rounded-xl border border-stone-900 bg-stone-900 bg-opacity-90 w-[90px] p-1 text-sm/6 text-center
              origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 [--anchor-gap:4px] sm:[--anchor-gap:8px] z-30 select-none"
              transition
            >
              <MenuItem>

                <a className="block data-[focus]:bg-white/10 rounded-lg text-lg" href="/">
                  Home
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:bg-white/10 rounded-lg text-lg" href="/aboutme">
                  About Me
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:bg-white/10 rounded-lg text-lg" href="/license">
                  Gear
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>


          <span className="uppercase text-lg font-medium select-none">Jonathan Liu Photography</span>
        </header>

        {children}
      </body>
    </html>
  );
}
