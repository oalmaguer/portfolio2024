interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  image?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Three Pillar Global.",
    period: "May 2022 - Currently working here",
    description: [
      "Developed and maintained web applications using JavaScript, Angular and Figma.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Improved application performance and user experience.",
    ],
    image: "/images/3pillar.png",
  },
  {
    title: "Software Developer",
    company: "IBM",
    period: "February 2021 - May 2022",
    description: [
      "Full Stack Software Developer working with Javascript, Docker, Angular, NodeJS and Flask to develop and maintain proprietary IBM software",
    ],
    image: "/images/ibm.png",
  },
  {
    title: "Software Developer",
    company: "Soluciones Triples",
    period: "August 2020 - February 2021",
    description: [
      "Developed and maintained a business administration software with HTML, CSS, JAVASCRIPT, PHP, JQUERY and MYSQL.",
    ],
    image: "/images/solu.jpg",
  },
  {
    title: "Web Designer",
    company: "Creativo A!",
    period: "January 2020 - February 2021",
    description: [
      "Designer and developer of Websites using Wordpress, Elementor, HTML, CSS, Javascript and Jquery.",
    ],
    image: "/images/uas.png",
  },
  {
    title: "Computer Technician",
    company: "Autonomous University of Sinaloa",
    period: "August 2017 - June 2019",
    description: [
      "Computer technician fixing all kinds of computer related problems in the center of language studies of my college.",
    ],
    image: "/images/uas.png",
  },
];

export default function Experience() {
  return (
    <div className="mt-10 bg-background flex flex-col w-100 py-16">
      <div className="flex gap-10 flex-wrap justify-center w-100">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mt-4 flex flex-col items-center bg-gray-100 rounded-lg w-80 p-5 bg-card border-1 shadow-md hover:shadow-lg border-gray-800 transition-opacity duration-300 hover:opacity-80"
          >
            <div className=" px-2 py-1 w-32 rounded-full flex">
              {exp.image && (
                <img
                  src={exp.image}
                  className="mb-4 rounded w-full  object-cover shadow-sm border-2 border-gray-100 hover:border-4 hover:border-gray-200 transition-all duration-100"
                />
              )}
            </div>
            <h2 className="text-xl font-semibold text-black">{exp.title}</h2>
            <h3 className="scroll-m-20 text-md text-muted- leading-6 text-gray-500">
              {exp.company}
            </h3>

            <div className="flex items-center mt-2 mb-1">
              <svg
                className="w-4 h-4 mr-2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
            <p className="text-sm  mb-2 scroll-m-20 leading-6  text-gray-600">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
