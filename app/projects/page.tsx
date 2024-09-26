export default function Projects() {
  interface ProjectItem {
    title: string;
    description: string[];
    image?: string;
    url?: string;
  }
  const projects: ProjectItem[] = [
    {
      title: "UFO Sightings API",
      description: [
        "API that provides information about UFO Sightings in the United States.",
      ],
      image: "/images/ufoapi.jpg",
      url: "https://rapidapi.com/almaguero95/api/ufo-aficionado-api",
    },
    {
      title: "Teraphy SAAS",
      description: [
        "A SAAS that helps doctors manage their patients and their health records.",
      ],
      image: "/images/therapy.jpg",
      url: "https://terapiapp.vercel.app/",
    },
    {
      title: "Dog Shelter",
      description: [
        "A website that provides information about dogs in a local shelter.",
      ],
      image: "/images/dog3.jpg",
      url: "https://amigos-zeta.vercel.app/",
    },
  ];
  return (
    <div>
      <div className=" w-full mx-auto flex justify-center flex-wrap gap-4 mt-10">
        {projects.map((project, index) => (
          <div className="flex justify-center ">
            <div className="max-w-[720px] mx-auto">
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
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
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {project.description.join(" ")}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  projects.map((project, index) => (
    <div className="container w-full mx-auto flex  flex-wrap gap-4">
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Apple AirPods
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  $95.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
