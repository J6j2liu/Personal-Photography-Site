import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { reb } from "./_images";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const inter = Expletus_Sans({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Image
          className="fixed left-0 top-0 z-0 object-cover h-full"
          src={reb[10]}
          alt="bg"
          placeholder="blur"
          priority
        />

        <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
          <div>
            <div className="bg-black opacity-0 hover:opacity-90" />
            <Menu>
              <MenuButton className="rounded-3xl text-xl bg-white font-semibold text-stone-700 px-4 py-2 hover:bg-opacity-90">{'\u2261'}</MenuButton>
              <MenuItems className="z-30" anchor="bottom">
                <MenuItem>
                  <a className="block hover:opacity-90 my-5" href="/">
                    Home
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:opacity-90 my-5" href="/gallery/a">
                    Gallery
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:opacity-90 my-5" href="/license">
                    Gear
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>


          <span className="uppercase text-lg font-medium">Jonathan Liu Photography</span>
        </header>

        {children}

      </body>
    </html>
  );
}
