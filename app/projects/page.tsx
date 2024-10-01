export default function Projects() {
  interface ProjectItem {
    title: string;
    description: string[];
    image?: string;
    url?: string;
    stack?: string[];
  }
  const projects: ProjectItem[] = [
    {
      title: "UFO Sightings API",
      description: [
        "API that provides information about UFO Sightings in the United States.",
      ],
      image: "/images/ufoapi.jpg",
      url: "https://rapidapi.com/almaguero95/api/ufo-aficionado-api",
      stack: ["RapidAPI", "Node.js", "Express"],
    },
    {
      title: "Teraphy SAAS",
      description: [
        "A SAAS that helps doctors manage their patients and their health records. Credentials: Username: test@gmail.com Password: 123456",
      ],
      image: "/images/therapy.jpg",
      url: "https://terapiapp.vercel.app/",
      stack: ["Supabase", "Angular", "SCSS"],
    },
    {
      title: "Dog Shelter",
      description: [
        "A website that provides information about dogs in a local shelter.",
      ],
      image: "/images/dog3.jpg",
      url: "https://amigos-zeta.vercel.app/",
      stack: ["NextJs", "TailwindCSS"],
    },
    {
      title: "Supabase / Angular Starter Kit",
      description: [
        "This project is a boilerplate for Angular applications using Supabase for authentication. It provides a basic setup for user registration, login, and toast notifications.",
      ],
      image: "/images/supaangular.jpeg",
      url: "https://github.com/oalmaguer/supa-angular",
      stack: ["Angular", "Supabase", "TailwindCSS"],
    },
  ];
  return (
    <div>
      <div className=" w-full mx-auto flex justify-center flex-wrap gap-20 py-8">
        {projects.map((project) => (
          <div className="flex justify-center mt-4 ">
            <div className="max-w-[720px] mx-auto">
              <div className="flex flex-col text-gray-700  shadow-md bg-clip-border rounded-xl w-96 bg-gray-100 sm:4/5">
                <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 ">
                  <img
                    src={project.image}
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {project.title}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"></p>
                  </div>
                  <p className="block font-sans text-md antialiased font-normal leading-normal">
                    {project.description.join(" ")}
                  </p>
                  <div className="flex flex-wrap gap-2 font-bold">
                    Stack:
                    {project.stack?.map((tech) => (
                      <span className="font-bold">{tech}</span>
                    ))}
                  </div>
                </div>
                <a target="_blank" href={project.url}>
                  <div className="p-6 -xl pt-0">
                    <button
                      className="align-middle bg-cyan-900 text-white select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      type="button"
                    >
                      Visit
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
