"use client"

import Masonry from "react-masonry-css";
import Image from "next/image";
import React from "react";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { dic } from "../_images";


export default function Page({ params }: { params: { id: string } }) {
    const [open, setOpen] = React.useState(false);
    const [ind, setInd] = React.useState(0);

    if (dic[params.id] == undefined) {
        return (
            <div className="h-full overflow-auto">
                <main className="relative pt-[110px] z-20 text-center text-4xl justify-center">Page Not Found :(</main>
            </div>
        );
    } else {

        return (
            <div className="h-full overflow-auto">
                <main className="relative pt-[110px] z-20">
                    <div className="text-center uppercase text-xl select-none p2">{dic[params.id].title}</div>

                    <div className="flex flex-col h-full items-center">
                        <Masonry breakpointCols={2} className="flex gap-4 h-full max-w-[900px] w-full p-2 sm:p-4 my-6 select-none">
                            {dic[params.id].data.map((image, idx) => (

                                <Image
                                    key={image.src}
                                    src={image}
                                    alt="reb1"
                                    className="my-4 cursor-pointer"
                                    placeholder="blur"
                                    onClick={() => { setOpen(true), setInd(idx) }}
                                />
                            )
                            )}
                        </Masonry>

                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={dic[params.id].data}
                            index={ind}
                            plugins={[Zoom, Thumbnails]}
                        />
                    </div>
                </main>

                <footer className="relative h-[90px] flex justify-center align-center uppercase text-lg font-medium z-20 select-none">
                    <p>Jonathan Liu Photography</p>
                </footer>
            </div>

        );
    }
}

