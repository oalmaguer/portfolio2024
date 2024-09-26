import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { DarkMode } from "./darkmode";
export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center"></div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/experience"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                About
              </Link>
              <Link
                target="_blank"
                href="/docs/resume.pdf"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                CV
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <Link target="_blank" href="mailto:almaguero95@gmail.com">
              <Button className="bg-cyan-700 shadow-md hover:shadow-lg hover:bg-cyan-800 text-white text-md">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
