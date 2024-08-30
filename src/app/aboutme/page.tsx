import { Metadata } from "next";
import self from "/public/self.jpg"
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Me',
  description: "Jonathan Liu Photography",
  icons: "/favicon.ico",
};

export default function Home() {

  return (
    <div className="h-full overflow-auto text-center pt-[110px] bg-stone-900">
      <div className="relative z-30 text-3xl">About Me</div>

      <main className="py-8">
        <div className="flex flex-col items-center py-5 px-4">
          <div className="flex relative max-w-[900px] justify-center justify-between gap-5">
            <div className="relative flex max-w-[250px]">
              <Image
                src={self}
                alt="self"
                placeholder="blur"
              />
            </div>
            <div className="flex min-w-[300px] text-xl sm:text-2xl"> My name is Jonathan Liu, I am a computer science and chemisty major at the Univeristy of Washington and a hobbyist photograhper. I mainly do close up portrait photography.</div>
          </div>
        </div>
      </main>

      <div className="relative z-30 text-3xl">My Gear</div>
      <main className="py-8">
        <div className="flex flex-col h-full items-center py-5">
          <div className="flex relative max-w-[900px] justify-center justify-between gap-5">
            <div className="text-xl sm:text-2xl"> I currently use the Canon r50 as my camera body. Most of my shots are done using the ef 50mm f1.8 stm lens but I also have the rf-s 18-45mm kit lens and the ef 70-300mm zoom lens.</div>
          </div>
        </div>
      </main>
      <footer className="relative h-[90px] flex justify-center align-center uppercase text-lg font-medium z-20 select-none">
        <p>Jonathan Liu Photography</p>
      </footer>
    </div>

  );

}

