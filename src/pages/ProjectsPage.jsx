import { useState } from 'react'

export default function ProjectsPage() {
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const projects = [
    {
      id: 1,
      title: 'PhysioKea',
      description: 'A healthcare management platform for physiotherapy clinics with appointment scheduling, patient records, billing, and multi-role administration.',
      videoId: '',
      deployedUrl: 'https://physiokea.com/',
      tags: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'Firestore', 'Razorpay'],
      badge: 'APP'
    },
    {
      id: 2,
      title: 'MandaliDeals',
      description: 'A group-buying e-commerce platform where customers join campaigns to unlock volume-based discounts.',
      videoId: '',
      deployedUrl: 'https://mandalideals.com/',
      tags: ['React.js', 'React Native', 'Node.js', 'Firebase', 'Firestore', 'Razorpay', 'Cloud Functions'],
      badge: 'WEB'
    },
    {
      id: 3,
      title: 'Celestial Stores',
      description: 'A premium e-commerce website with modern UI, secure shopping experience, and SEO-optimized product pages.',
      videoId: '',
      deployedUrl: 'https://celestialstores.in/',
      tags: ['Next.js', 'React.js', 'Firebase', 'Tailwind CSS'],
      badge: 'WEB'
    },
    {
      id: 4,
      title: 'LabSoul Technologies',
      description: 'A corporate business website optimized for technical SEO, search engine indexing, and improved online visibility.',
      videoId: '',
      deployedUrl: 'https://labsoultechnologies.com/',
      tags: ['React.js', 'Firebase', 'Cloud Functions', 'SEO'],
      badge: 'WEB'
    },
    {
      id: 5,
      title: 'Samphire India',
      description: 'A business website with Firebase hosting, analytics integration, and performance tracking for user engagement.',
      videoId: '',
      deployedUrl: 'https://samphireindia.web.app/',
      tags: ['React.js', 'Firebase', 'Google Analytics 4'],
      badge: 'WEB'
    },
    {
      id: 6,
      title: 'Jewellery E-Commerce',
      description: 'A luxury jewellery e-commerce frontend built with Next.js and React, featuring responsive UI, product filtering, and interactive cart functionality.',
      videoId: '',
      deployedUrl: 'https://jewellery-nextjs-project.vercel.app/',
      tags: ['Next.js', 'React.js', 'Material UI'],
      badge: 'WEB'
    }
  ]

  const pageSize = 6
  const totalPages = Math.ceil(projects.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const currentProjects = projects.slice(startIndex, startIndex + pageSize)

  return (
    <main className="w-full">
      <section className="border-b-[3px] border-black bg-white text-center">
        <div className="p-4 md:p-6">
          <h1 className="font-headline-lg text-headline-lg uppercase mb-3 text-black">Project Portfolio</h1>
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
                <p className="font-body-md mb-3 sm:mb-4 text-[11px] sm:text-sm text-black">
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