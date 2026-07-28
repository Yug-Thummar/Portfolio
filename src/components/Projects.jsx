import { useState } from 'react'

export default function Projects() {
  const [activeVideoId, setActiveVideoId] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'CarrerConnect - Job Portal',
      description: 'A job portal for matching candidates with openings and managing applications.',
      videoId: 'IZ5P_R5yR3Q',
      githubUrl: 'https://github.com/pawaradvait/Carrier-Connect--Job-Portal',
      tags: ['React', 'Job Portal', 'UI']
    },
    {
      id: 2,
      title: 'Tranquility Tech',
      description: 'A backend-driven project focused on workflow, stability, and enterprise delivery.',
      videoId: 'W4ooDpBKD_4',
      githubUrl: 'https://github.com/pawaradvait/tranquilty-backend',
      tags: ['Spring', 'Backend', 'Java']
    },
    {
      id: 3,
      title: 'Ease School - School Application',
      description: 'A school management application for handling academic and administrative needs.',
      videoId: 'fCZq0Vw1o4k',
      githubUrl: 'https://github.com/pawaradvait/Ease-School-Web-Application-',
      tags: ['React', 'School App', 'Management']
    },
    {
      id: 4,
      title: 'Banking Application',
      description: 'Microservice-based banking backend built for scalable enterprise workflows.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait/BankIndia---micorservice-architecture-',
      tags: ['Microservices', 'Backend', 'Banking']
    },
    {
      id: 5,
      title: 'Course App - Reactjs, Springboot',
      description: 'A course management application with a React frontend and Spring Boot backend.',
      videoId: '8z2rAmbZYvs',
      githubUrl: 'https://github.com/pawaradvait/CourseBackend',
      tags: ['React', 'Spring Boot', 'Course App']
    },
    {
      id: 6,
      title: 'Myntra Clone',
      description: 'An e-commerce clone project focused on shopping flows and product browsing.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait/myntra-ecom',
      tags: ['E-commerce', 'Clone', 'UI']
    }
  ]

  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="border-b-[3px] border-black bg-white" id="projects">
      <div className="p-4 border-b-[3px] border-black">
        <h2 className="font-headline-lg uppercase mb-2">Projects</h2>
        <p className="font-body-md text-black max-w-3xl">
          Selected projects from my portfolio. Click Watch Video to open the YouTube demo when available.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`${index === 0 ? 'md:col-span-7 md:border-r-[3px]' : 'md:col-span-5'} border-b-[3px] border-black bg-black text-white p-4 md:p-6`}
          >
            <div className="border-[3px] border-white bg-black p-6 h-full flex flex-col justify-between gap-6">
              <div>
                <p className="font-label-bold text-xs uppercase mb-3 text-white/70">Featured Project</p>
                <h3 className="font-headline-md text-headline-md uppercase mb-3">{project.title}</h3>
                <p className="font-body-md text-body-md text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white text-black px-2 py-1 font-label-bold text-xs uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => project.videoId && setActiveVideoId(project.videoId)}
                  disabled={!project.videoId}
                  className={`border-[3px] border-white px-4 py-2 font-label-bold uppercase transition-none ${project.videoId ? 'bg-[#FF5C00] text-white hover:opacity-90' : 'bg-white text-black opacity-60 cursor-not-allowed'}`}
                >
                  {project.videoId ? 'Watch Video' : 'Video Coming Soon'}
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-[3px] border-white bg-white text-black px-4 py-2 font-label-bold uppercase transition-none hover:bg-black hover:text-white"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t-[3px] border-black">
        {projects.slice(2).map((project) => (
          <div key={project.id} className="border-r-[3px] border-b-[3px] border-black p-4 md:p-6 bg-white">
            <div className="border-[3px] border-black bg-surface-container-low min-h-[280px] flex flex-col justify-between p-5">
              <div>
                <h4 className="font-headline-md uppercase mb-3">{project.title}</h4>
                <p className="font-body-md text-body-md mb-4 text-black">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-black text-white px-2 py-1 font-label-bold text-xs uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => project.videoId && setActiveVideoId(project.videoId)}
                  disabled={!project.videoId}
                  className={`w-full border-[3px] border-black px-4 py-3 font-label-bold uppercase transition-none ${project.videoId ? 'bg-black text-white hover:bg-[#FF5C00]' : 'bg-white text-black opacity-60 cursor-not-allowed'}`}
                >
                  {project.videoId ? 'Watch Video' : 'Video Coming Soon'}
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center border-[3px] border-black px-4 py-3 font-label-bold uppercase transition-none hover:bg-black hover:text-white"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideoId ? (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl bg-white border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute top-3 right-3 z-10 bg-black text-white border-[3px] border-black px-3 py-1 font-label-bold uppercase"
              aria-label="Close video"
            >
              Close
            </button>
            <div className="aspect-video bg-black">
              <iframe
                title="Project video"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
