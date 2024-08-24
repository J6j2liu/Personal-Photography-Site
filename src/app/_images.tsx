import reb0 from "/public/reb0.jpg";
import reb1 from "/public/reb1.jpg";
import reb2 from "/public/reb2.jpg";
import reb3 from "/public/reb3.jpg";
import reb4 from "/public/reb4.jpg";
import reb5 from "/public/reb5.jpg";
import reb6 from "/public/reb6.jpg";
import reb7 from "/public/reb7.jpg";
import reb8 from "/public/reb8.jpg";
import reb9 from "/public/reb9.jpg";
import reb10 from "/public/reb10.jpg";

import claire0 from "/public/claire0.jpg";
import claire1 from "/public/claire1.jpg";
import claire2 from "/public/claire2.jpg";
import claire3 from "/public/claire3.jpg";
import claire4 from "/public/claire4.jpg";
import claire5 from "/public/claire5.jpg";
import claire6 from "/public/claire6.jpg";
import claire7 from "/public/claire7.jpg";
import claire8 from "/public/claire8.jpg";

import { StaticImageData } from "next/image";

export const reb = [
    reb0,
    reb1,
    reb2,
    reb3,
    reb4,
    reb5,
    reb6,
    reb7,
    reb8,
    reb9,
    reb10,
]

export const claire = [
    claire1,
    claire2,
    claire3,
    claire4,
    claire5,
    claire0,
    claire6,
    claire7,
    claire8,
]

export const dic: { [name: string]: StaticImageData[] } = { "reb": reb, "claire": claire };
export const pics: string[] = ["reb", "claire"];