'use client'
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../utils/details";
import Image from "next/image";

export default function Home() {
  const { name, tagline } = personalDetails;
  const [animationStarted, setAnimationStarted] = useState(false);
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    setAnimationStarted(true);
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "50%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center dark:bg-dark-mode">
        <div className={`${animationStarted ? 'opacity-100' : 'opacity-0'}`}>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Oi,👋<br></br>Meu nome é<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>
        <div className={`${animationStarted ? 'opacity-100' : 'opacity-0'} mt-5 md:mt-0`}>
          <Image
            ref={myimageref}
            width={500}
            height={300}
            className="w-4/6 md:w-3/4 md:ml-auto"
            src='/profile.png'
            alt="Leo Funa"
            priority
            unoptimized
          />
        </div>
    </main>
  );
}
