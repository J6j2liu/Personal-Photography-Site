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

import claire0 from "/public/claire0.jpg";
import claire1 from "/public/claire1.jpg";
import claire2 from "/public/claire2.jpg";
import claire3 from "/public/claire3.jpg";
import claire4 from "/public/claire4.jpg";
import claire5 from "/public/claire5.jpg";
import claire6 from "/public/claire6.jpg";
import claire7 from "/public/claire7.jpg";
import claire8 from "/public/claire8.jpg";

import ang0 from "/public/ang0.jpg";
import ang1 from "/public/ang1.jpg";
import ang2 from "/public/ang2.jpg";
import ang3 from "/public/ang3.jpg";
import ang4 from "/public/ang4.jpg";
import ang5 from "/public/ang5.jpg";
import ang6 from "/public/ang6.jpg";
import ang7 from "/public/ang7.jpg";
import ang8 from "/public/ang8.jpg";
import ang9 from "/public/ang9.jpg";
import ang10 from "/public/ang10.jpg";

import sydney1 from "/public/sydney (1).jpg";
import sydney2 from "/public/sydney (2).jpg";
import sydney3 from "/public/sydney (3).jpg";
import sydney4 from "/public/sydney (4).jpg";
import sydney5 from "/public/sydney (5).jpg";
import sydney6 from "/public/sydney (6).jpg";
import sydney7 from "/public/sydney (7).jpg";
import sydney8 from "/public/sydney (8).jpg";

import eric0 from "/public/eric0.jpg";
import eric1 from "/public/eric1.jpg";
import eric2 from "/public/eric2.jpg";
import eric3 from "/public/eric3.jpg";
import eric4 from "/public/eric4.jpg";
import eric5 from "/public/eric5.jpg";
import eric6 from "/public/eric6.jpg";
import eric7 from "/public/eric7.jpg";
import eric8 from "/public/eric8.jpg";

import ella0 from "/public/ella0.jpg";
import ella1 from "/public/ella1.jpg";
import ella2 from "/public/ella2.jpg";
import ella3 from "/public/ella3.jpg";
import ella4 from "/public/ella4.jpg";

import lauren1 from "/public/lauren (1).jpg";
import lauren2 from "/public/lauren (2).jpg";
import lauren3 from "/public/lauren (3).jpg";
import lauren4 from "/public/lauren (4).jpg";
import lauren5 from "/public/lauren (5).jpg";
import lauren6 from "/public/lauren (6).jpg";
import lauren7 from "/public/lauren (7).jpg";
import lauren8 from "/public/lauren (8).jpg";
import lauren9 from "/public/lauren (9).jpg";
import lauren10 from "/public/lauren (10).jpg";

import { StaticImageData } from "next/image";

export const Eric = [
    eric0,
    eric1,
    eric3,
    eric2,
    eric4,
    eric5,
    eric6,
    eric8,
    eric7,
]

export const Ella = [
    ella0,
    ella3,
    ella1,
    ella2,
    ella4,

]


export const Rebecca_Beach = [
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
]

export const Claire = [
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

export const Angela = [
    ang0,
    ang1,
    ang2,
    ang3,
    ang4,
    ang5,
]

export const Ang = [
    ang6,
    ang7,
    ang8,
    ang9,
    ang10,
]

export const Sydney = [
    sydney3,
    sydney1,
    sydney2,
    sydney4,
    sydney5,
    sydney6,
    sydney7,
    sydney8,
]

export const Lauren = [
    lauren7,
    lauren2,
    lauren3,
    lauren4,
    lauren5,
    lauren6,
    lauren1,
    lauren8,
    lauren9,
    lauren10,
]

export const dic: { [name: string]: { data: StaticImageData[], title: string } } =
{
    "00": { data: Rebecca_Beach, title: "Sunset Beach Photoshoot" },
    "01": { data: Claire, title: "Sunny Forest Photoshoot" },
    "02": { data: Angela, title: "Misty Garden Photoshoot" },
    "03": { data: Sydney, title: "Misty Waterside Photoshoot" },
    "04": { data: Eric, title: "Soccer Photoshoot" },
    "05": { data: Ella, title: "Beachside Portirat Photoshoot" },
    "06": { data: Ang, title: "Retro Moody Photoshoot" },
    "07": { data: Lauren, title: "Pike Place Photoshoot" },
};

export const pics: string[] =
    ["00",
        "02",
        "03",
        "04",
        "05",
        "01",
        "06",
        "07",
    ];