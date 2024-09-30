"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import Navbar from "./navbar";
import { Link } from "next-view-transitions";
export default function PortfolioLayout() {
  return (
    <div className="text-foreground py-16">
      <div className="flex flex-col gap-4 h-fit">
        {/* //start image */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Image
              src="/images/oli.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full  mb-8  border-white-600 transition duration-300 ease-in-out hover:scale-110 hover:rotate-3 dark:bg-surface-dark  shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
        <div className="transition duration-300 ease-in-out flex items-center justify-center ">
          <div className="flex flex-col gap-7 text-center items-center w-3/4 text-white ">
            <h2 className="text-6xl font-bold ">
              Hi, I'm{" "}
              <span className="bg-cyan-600 inline-block p-2 px-4 rounded text-white hover:bg-cyan-700 transition-all duration-300 ">
                Oliver
              </span>
            </h2>
            <span className="text-6xl font-extralight">Software Developer</span>
            <p className=" text-foreground text-xl w-3/4">
              I'm passionate about creating beautiful and functional software.
            </p>
            <div className="flex gap-10 ">
              <Link target="_blank" href="/docs/resume.pdf">
                <Button className="w-32 h-16 bg-green-700 shadow-md hover:shadow-lg hover:bg-green-800 text-white text-lg">
                  Resume
                </Button>
              </Link>
              <Link href="/projects">
                <Button className="w-32 h-16 bg-cyan-700 shadow-md hover:shadow-lg hover:bg-cyan-800 text-white text-lg">
                  Projects
                </Button>
              </Link>
            </div>
            <div className="flex-auto sm:flex gap-10 border-2 border-slate-700 rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link
                target="_blank"
                href="https://www.instagram.com/olialmaguer/"
              >
                <span className="mb-4 sm:mb-0 p-1 w-16 h-16 flex items-center justify-center border-2 border-slate-300 rounded-full  hover:bg-cyan-900 hover:text-white transition-all duration-300">
                  <Instagram />
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/oliveralmaguer/"
              >
                <span className="mb-4 sm:mb-0 p-1 w-16 h-16 flex items-center justify-center border-2 border-slate-300 rounded-full  hover:bg-cyan-900 hover:text-white transition-all duration-300">
                  <Linkedin />
                </span>
              </Link>
              <Link target="_blank" href="https://github.com/oalmaguer">
                <span className="mb-4 sm:mb-0 p-1 w-16 h-16 flex items-center justify-center border-2 border-slate-300 rounded-full  hover:bg-cyan-900 hover:text-white transition-all duration-300">
                  <Github />
                </span>
              </Link>
              <Link target="_blank" href="mailto:almaguero95@gmail.com">
                <span className="mb-4 sm:mb-0 p-1 w-16 h-16 flex items-center justify-center border-2 border-slate-300 rounded-full hover:bg-cyan-900 hover:text-white transition-all duration-300">
                  <Mail />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
