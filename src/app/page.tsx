"use client"

import Masonry from "react-masonry-css";
import Image from "next/image";

import { dic, pics } from "./_images";

export default function Page() {


  return (
    <div className="h-full overflow-auto">
      <main className="relative pt-[110px] z-20">
        <div className="text-center uppercase text-3xl select-none">Gallery</div>

        <div className="flex flex-col h-full items-center">
          <Masonry breakpointCols={2} className="flex gap-4 h-full max-w-[900px] w-full p-2 sm:p-4 my-6 select-none">
            {pics.map((key) => (
              <div key={key + "wrapper"} className="relative">
                <Image
                  key={key}
                  src={dic[key].data[0]}
                  alt="thumbnail"
                  className="my-4 cursor-pointer"
                  placeholder="blur"
                />
                <a key={key + "link"} href={"/" + key} className="absolute inset-0 bg-stone-900 opacity-0 hover:opacity-40
                items-center justify-center flex text-xl uppercase duration-300">{dic[key].title}</a>
              </div>
            ))}
          </Masonry>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center align-center uppercase text-lg font-medium z-20 select-none">
        <p>Jonathan Liu Photography</p>
      </footer>
    </div>
  );
}

