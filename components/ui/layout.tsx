import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function PortfolioLayout() {
  return (
    <div className="bg-background text-foreground">
      <div className="grid grid-cols-2 gap-4 h-screen">
        <div className="flex items-center justify-center bg-card">
          <div className="flex flex-col gap-10 text-center items-center w-3/4">
            <h2 className="text-6xl font-bold">
              Hi, I'm <span className="text-primary">Oliver</span>
              <br />
              <span className="text-3xl text-muted-foreground text-xl">
                Software Developer
              </span>
            </h2>
            <p className="text-xl text-muted-foreground ">
              I'm a software developer with 4 years of experience in the field.
              I'm passionate about creating beautiful and functional software.
            </p>
            <Button className="w-32">See CV</Button>
            <div className="flex gap-10">
              <span className="p-1 flex items-center justify-center border-2 border-gray-600 rounded-full w-10 h-10">
                <Instagram />
              </span>
              <span className="p-1 flex items-center justify-center border-2 border-gray-600 rounded-full w-10 h-10">
                <Linkedin />
              </span>
              <span className="p-1 flex items-center justify-center border-2 border-gray-600 rounded-full w-10 h-10">
                <Github />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-secondary">
          <div className="text-center">
            <Image
              src="/images/oli.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-full transition duration-300 ease-in-out hover:scale-110 hover:rotate-3  dark:bg-surface-dark shadow-md hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
