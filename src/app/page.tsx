import Link from "next/link";

export default function Home() {

  return (
    <div className="h-full overflow-auto text-center pt-[110px] bg-stone-900">
      <div className="relative z-30 text-3xl font-bold">Welcome!</div>
      <footer className="relative h-[90px] flex justify-center align-center uppercase text-lg font-medium z-20">
        <p>Jonathan Liu Photography</p>
      </footer>
    </div>
  );

}

