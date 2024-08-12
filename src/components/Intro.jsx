import React from "react";
import Image from "next/image";
const Intro = () => {
    return (
        <div className="container">
            <p>Shahnameh</p>
            <p>Hakim Abul-Qâsem Ferdowsi</p>
            <div className="bg-cream-1 p-14 rounded-[20px] mb-16 lg:mb-8">
                <div className="flex justify-between mb-1 items-center flex-col lg:flex-row">
                    <div className="max-w-80">
                        <Image
                            src="/shahname.png"
                            alt="shahname"
                            width={1000}
                            height={1000}
                            className="max-w-full"
                        />
                    </div>
                    <div className="text-black/70 text-6xl font-normal w-full lg:w-1/2 h-fit flex flex-col gap-y-8 mb-16 lg:mb-0">
                        <p className="self-end !font-nast">
                            بسی رنج بردم در این سال سی
                        </p>
                        <p className="!font-nast">عجم زنده کردم بدین پارسی</p>
                    </div>
                </div>
                <div className="text-black">
                    <p className="!font-antique font-black text-xl">
                        Šāhnāmeh (The Book of Kings)
                    </p>
                    <p className="mt-8 !font-antique leading-8">
                        The Shahnameh (Persian: شاهنامه, romanized: Šāhnāme,
                        lit. 'The Book of Kings', pronounced [ʃɒːhnɒːˈme]), also
                        transliterated Shahnama,[a] is a long epic poem written
                        by the Persian poet Ferdowsi between c. 977 and 1010 CE
                        and is the national epic of Greater Iran. Consisting of
                        some 50,000 "distichs" or couplets (two-line verses),
                        the Shahnameh is one of the world's longest epic poems.
                        The work is of central importance in Persian culture and
                        Persian language. It is regarded as a literary
                        masterpiece, and definitive of the ethno-national
                        cultural identity of Iran.
                    </p>
                </div>
                <div className="flex justify-between mb-1 items-center lg:items-start w-fit mx-auto lg:ml-0">
                    <div className="max-w-80">
                        <Image
                            src="/ferdowsi.png"
                            alt="ferdowsi"
                            width={1000}
                            height={1000}
                            className="max-w-full mx-auto"
                        />
                    </div>
                </div>
                <div className="text-black ">
                    <p className="font-black text-xl !font-antique">
                        Hakim Abul-Qâsem Ferdowsi
                    </p>
                    <div className="mt-8 !font-antique leading-8">
                        Abul-Qâsem Ferdowsi Tusi (Persian: ابوالقاسم فردوسی
                        توسی; 940 – 1019/1025), also Ferdowsi (فردوسی), was a
                        Persian poet and the author of Shahnameh ("Book of
                        Kings"), which is one of the world's longest epic poems
                        created by a single poet, and the greatest epic of
                        Persian-speaking countries. Ferdowsi is celebrated as
                        one of the most influential figures of Persian
                        literature and one of the greatest in the history of
                        literature. Ferdowsi was born into a family of Iranian
                        landowners (dehqans) in 940 in the village of Paj, near
                        the city of Tus, in the Khorasan region of the Samanid
                        Empire, which is located in the present-day Razavi
                        Khorasan province of northeastern Iran.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
