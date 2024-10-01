"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AboutPage() {
  const [idx, setIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const images = [
    "/images/oli1.jpeg",
    "/images/oli2.jpeg",
    "/images/oli3.jpeg",
    "/images/oli5.jpeg",
    "/images/maza.jpg",
  ];

  const imageRef = useRef<HTMLDivElement>(null);
  const next = () => {
    if (idx !== images.length - 1) {
      setOpacity(0);
      setTimeout(() => {
        setIdx(idx + 1);
        setOpacity(1);
      }, 200);
    }
  };
  const prev = () => {
    if (idx !== 0) {
      setOpacity(0);
      setTimeout(() => {
        setIdx(idx - 1);
        setOpacity(1);
      }, 200);
    }
  };

  const scrollToImage = () => {
    if (imageRef.current) {
      setIdx(images.length - 1);
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 ">
        <div className="flex flex-col items-center justify-between w-full lg:w-1/2 lg:self-center">
          <div
            ref={imageRef}
            className={`transition-opacity duration-200`}
            style={{ opacity }}
          >
            <Image
              src={images[idx]}
              alt="Profile"
              width={500}
              height={500}
              className="rounded border-8 border-gray-100 shadow-lg lg:max-h-96 object-cover hover:scale-110 transition-all duration-200"
            />
          </div>
          <div className="buttons flex gap-8 w-full justify-center mt-8">
            <ArrowLeft
              onClick={() => prev()}
              className="cursor-pointer text-white border-2 border-white rounded-full w-7 h-7 hover:bg-white hover:text-black transition-all duration-200"
            />
            <ArrowRight
              onClick={() => next()}
              className="cursor-pointer text-white border-2 border-white rounded-full w-7 h-7 hover:bg-white hover:text-black transition-all duration-200"
            />
            {/* <Button onClick={prev}>Previous</Button> */}
            {/* <Button onClick={next}>Next</Button> */}
          </div>
        </div>
        <div className="flex flex-col items-center w-full p-4 lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-cyan-500">About Me</h1>
          <p className="text-lg text-gray-300 self-start">
            <span className="text-green-400 font-bold text-xl">
              Hola! I'm Oliver, a Software Developer from Mexico.
            </span>{" "}
          </p>
          <p className="text-xl font-bold text-gray-300 self-start ">
            Visa status: <span className="text-green-400">Green Card</span>{" "}
            holder in the United States.
          </p>
          <p className="text-lg text-gray-300">
            I'm a Full Stack Developer with experience in both frontend and
            backend development. I love to create new technology for the world
            through code.
          </p>
          <p className="text-lg text-gray-300">
            I'm from a beautiful coastal city called{" "}
            <span
              className="text-green-400 underline cursor-pointer"
              onClick={scrollToImage}
            >
              Mazatlan, Sinaloa, Mexico
            </span>
            , which is where I got my bachelor's degree in Computer Information
            Systems in the Autonomous University of Sinaloa.
          </p>
          <p className="text-lg text-gray-300">
            Ever since I was a kid, I've always been fascinated with technology
            and how it works. <br />I started programming as a hobby when I was
            17 years old and since then I've been learning and creating new
            things with languages like Php, Javascript, Python and frameworks
            like Angular, React, Next.js, Node.js, TailwindCSS, among others.
          </p>
          <p className="text-lg text-gray-300">
            I also have 2 years of professional experience creating UX/UI
            designs for a large scale web application using Figma and the Adobe
            Suite.
          </p>
          <div className="flex space-x-4">
            <span className="text-cyan-500 font-semibold">Skills:</span>
            <span className="text-gray-300">
              JavaScript, React, Node.js, Next.js, TailwindCSS, Figma,
              Photoshop, Premiere, Audition Php, Angular, Python, SQL, MongoDB,
              Git, among others.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
