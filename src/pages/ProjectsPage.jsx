import { useState } from 'react'

export default function ProjectsPage() {
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const projects = [
    {
      id: 1,
      title: 'CarrerConnect - Job Portal',
      description: 'A job portal for matching candidates with openings and managing applications.',
      videoId: 'IZ5P_R5yR3Q',
      githubUrl: 'https://github.com/pawaradvait/Carrier-Connect--Job-Portal',
      tags: ['React', 'Job Portal', 'UI'],
      badge: 'WEB'
    },
    {
      id: 2,
      title: 'Physiokea',
      description: 'A digital physiotherapy and rehabilitation platform focused on guided therapy programs, online consultations, and home-based care solutions.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait',
      deployedUrl: 'https://physiokea.com/',
      tags: ['React', 'Firebase'],
      badge: 'APP'
    },
    {
      id: 3,
      title: 'Mandali Deals',
      description: 'An e-commerce and deals platform that provides discounted products, online shopping offers, and promotional deals across different categories.',
      videoId: '',
      deployedUrl: 'https://mandalideals.com/',
      tags: ['React', 'Firebase'],
      badge: 'WEB'
    },
    {
      id: 4,
      title: 'Tranquility Tech',
      description: 'A backend-driven project focused on workflow, stability, and enterprise delivery.',
      videoId: 'W4ooDpBKD_4',
      githubUrl: 'https://github.com/pawaradvait/tranquilty-backend',
      tags: ['Spring', 'Backend', 'Java'],
      badge: 'WEB'
    },
    {
      id: 5,
      title: 'Ease School - School Application',
      description: 'A school management application for handling academic and administrative needs.',
      videoId: 'fCZq0Vw1o4k',
      githubUrl: 'https://github.com/pawaradvait/Ease-School-Web-Application-',
      tags: ['React', 'School App', 'Management'],
      badge: 'WEB'
    },
    {
      id: 6,
      title: 'Banking Application',
      description: 'Microservice-based banking backend built for scalable enterprise workflows.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait/BankIndia---micorservice-architecture-',
      tags: ['Microservices', 'Backend', 'Banking'],
      badge: 'WEB'
    },
    {
      id: 7,
      title: 'Course App - Reactjs, Springboot',
      description: 'A course management application with a React frontend and Spring Boot backend.',
      videoId: '8z2rAmbZYvs',
      githubUrl: 'https://github.com/pawaradvait/CourseBackend',
      tags: ['React', 'Spring Boot', 'Course App'],
      badge: 'WEB'
    },
    {
      id: 8,
      title: 'Myntra Clone',
      description: 'An e-commerce clone project focused on shopping flows and product browsing.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait/myntra-ecom',
      tags: ['E-commerce', 'Clone', 'UI'],
      badge: 'WEB'
    },
    {
      id: 9,
      title: 'Neural Grid UI',
      description: 'A brutalist dashboard for monitoring distributed AI training clusters across multiple nodes.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait',
      tags: ['React', 'WebGL', 'D3.js'],
      badge: 'WEB'
    },
    {
      id: 10,
      title: 'Vector Core',
      description: 'Engineered a custom rendering engine for SVG-based architectural visualizations in-browser.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait',
      tags: ['Rust', 'Wasm'],
      badge: 'WEB'
    },
    {
      id: 11,
      title: 'Pulse Monitor',
      description: 'Live analytics cockpit for multi-region SaaS operations and incident tracking.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait',
      tags: ['React', 'Realtime'],
      badge: 'WEB'
    },
    {
      id: 12,
      title: 'Orbit Admin',
      description: 'Role-based enterprise admin panel with audit trails and policy controls.',
      videoId: '',
      githubUrl: 'https://github.com/pawaradvait',
      tags: ['TypeScript', 'RBAC'],
      badge: 'WEB'
    }
  ]

  const pageSize = 6
  const totalPages = Math.ceil(projects.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const currentProjects = projects.slice(startIndex, startIndex + pageSize)

  return (
    <main className="w-full">
      <section className="border-b-[3px] border-black bg-white">
        <div className="p-4 md:p-6">
          <h1 className="font-headline-lg text-headline-lg uppercase mb-3">Project Portfolio</h1>
          <p className="font-body-md text-body-md max-w-3xl text-black">
            Featured case studies from my portfolio. Each card includes a YouTube demo button when available.
          </p>
        </div>
      </section>

      <section className="p-3 md:p-6 bg-surface-container-low border-b-[3px] border-black">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 border-b-[3px] border-black relative">
                <div className="w-full h-full bg-black text-white flex items-center justify-center p-2 sm:p-4">
                  <span className="font-headline-md uppercase text-center text-sm sm:text-lg md:text-2xl leading-tight">{project.title}</span>
                </div>
                <div className="absolute top-0 right-0 bg-[#FF5C00] text-white px-2 py-1 sm:px-3 sm:py-2 font-label-bold border-l-[3px] border-b-[3px] border-black text-[10px] sm:text-xs">
                  {project.badge}
                </div>
              </div>
              <div className="p-2 sm:p-4 min-h-[220px] sm:min-h-[260px] flex flex-col">
                <h3 className="font-headline-md uppercase mb-2 truncate text-sm sm:text-base md:text-lg">{project.title}</h3>
                <p
                  className="font-body-md mb-3 sm:mb-4 text-[11px] sm:text-sm overflow-hidden text-black"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-black text-white px-1.5 py-1 sm:px-2 sm:py-1 font-label-bold text-[9px] sm:text-xs uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2 sm:gap-3">
                  {project.videoId ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(project.videoId)}
                      className="w-full border-[3px] border-black p-2 sm:p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-[10px] sm:text-sm bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                    >
                      Watch Video
                    </button>
                  ) : null}
                  {project.deployedUrl ? (
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center border-[3px] border-black p-2 sm:p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-[10px] sm:text-sm bg-white text-black hover:bg-[#FF5C00] hover:text-white flex items-center justify-center gap-2"
                    >
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 border border-black" aria-hidden="true"></span>
                      Open Live Site
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center bg-white text-black border-[3px] border-black p-2 sm:p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5C00] hover:text-white transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-[10px] sm:text-sm"
                    >
                      Github
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="bg-white text-black border-[3px] border-black px-4 py-2 font-label-bold text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1
            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`border-[3px] border-black px-3 py-2 font-label-bold text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${currentPage === page ? 'bg-[#FF5C00] text-white' : 'bg-white text-black'}`}
              >
                {page}
              </button>
            )
          })}

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="bg-white text-black border-[3px] border-black px-4 py-2 font-label-bold text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </section>

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

      <div className="h-24 md:h-0"></div>
    </main>
  )
}