import Link from "next/link";

export default function Home() {

  return (
    <div className="h-full overflow-auto text-center pt-[110px] bg-stone-900">
      <Link href={'../gallery/a'} className="relative z-30">a</Link>

      <footer className="relative h-[90px] flex justify-center align-center uppercase text-lg font-medium z-20">
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );

}

