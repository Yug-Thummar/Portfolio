import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [activeProjectTag, setActiveProjectTag] = useState('All')

  const experiences = [
    {
      year: 'Jan 2025 — Present',
      title: 'Software Engineer',
      company: <a href="https://www.linkedin.com/company/reactorbee/posts/?feedView=all" target="_blank" rel="noreferrer" className="hover:underline">ReactorBee Private Limited</a>,
      location: 'Surat, Gujarat, India',
      description: 'Design and develop production-grade web and cross-platform applications across healthcare, e-commerce, CRM, and industrial domains. Build scalable frontend and backend systems using React.js, React Native, Node.js, Java, Firebase, Firestore, PostgreSQL, and REST APIs. Develop secure payment integrations, authentication systems, cloud functions, and optimized database architectures while collaborating across complete product lifecycles.',
      borderColor: 'border-black'
    }
  ]

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

  const projectTags = ['All', ...new Set(projects.flatMap((project) => project.tags))]
  const featuredProjects =
    activeProjectTag === 'All'
      ? projects.slice(0, 6)
      : projects.filter((project) => project.tags.includes(activeProjectTag))

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="p-4 border-b-[3px] border-black bg-white">
<h1 className="font-headline-xl text-black text-[40px] sm:text-[55px] md:text-[80px] leading-[0.9] uppercase break-words mb-6">
  Software <br /> <span className="bg-[#FF5C00] text-white px-2">Engineer</span>
</h1>
        <div className="border-[3px] border-black bg-[#FF5C00] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none">
        <p className="font-label-bold text-white uppercase mb-1">
  Hi there! My name is Yug Thummar.
</p>

<p className="font-headline-md text-white">
  Software Engineer with 1.5 years of experience building production-grade web and mobile applications across healthcare, e-commerce, CRM, and industrial domains.<br /><br />
  Experienced in React.js, React Native, Node.js, TypeScript, Firebase, Java, and PostgreSQL.<br /><br />
  Specialized in scalable application architecture, secure payment integrations, enterprise solutions, and performance optimization.
</p> </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link to="/projects" className="bg-[#FF5C00] text-white border-[3px] border-black px-6 py-4 font-label-bold text-sm uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none hover:opacity-90 inline-block">
            View Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1Nt45RrJv5Cy_oLruZStNjUQ0eT5lJ3Et/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black border-[3px] border-black px-6 py-4 font-label-bold text-sm uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none hover:bg-black hover:text-white inline-block"
          >
            View Resume
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="w-full bg-black text-white p-6 font-headline-md uppercase border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-none">
            <p className="text-[48px] leading-none mb-2">10+</p>
            <p className="font-label-bold text-sm">Production Projects Delivered</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-b-[3px] border-black">
        <div className="inline-block animate-marquee font-headline-md uppercase">
          REACT.JS • REACT NATIVE • JAVASCRIPT • TYPESCRIPT • NODE.JS • EXPRESS.JS • JAVA • FIREBASE • FIRESTORE • CLOUD FUNCTIONS • POSTGRESQL • MONGODB • MYSQL • DOCKER • KUBERNETES • LIFERAY DXP • REST APIS • REDUX TOOLKIT • TAILWIND CSS • GIT • GITHUB • REACT.JS • REACT NATIVE • JAVASCRIPT • TYPESCRIPT • NODE.JS • EXPRESS.JS • JAVA • FIREBASE • FIRESTORE • CLOUD FUNCTIONS • POSTGRESQL • MONGODB • MYSQL • DOCKER • KUBERNETES • LIFERAY DXP • REST APIS • REDUX TOOLKIT • TAILWIND CSS • GIT • GITHUB •
        </div>
      </div>

      {/* Currently Working Section */}
      <section className="p-4 bg-white border-b-[3px] border-black">
        <h2 className="font-headline-lg uppercase mb-6 text-black border-b-[3px] border-black pb-2">Currently Working</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`border-l-[12px] ${exp.borderColor} pl-4`}>
              <h4 className="font-headline-md uppercase text-black text-lg mb-1">{exp.company}</h4>
              <span className="font-label-bold text-on-tertiary-container text-xs">{exp.year}</span>
              <h3 className="font-headline-md uppercase mt-1">{exp.title}</h3>
              <p className="font-body-md text-secondary text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="p-4 bg-surface-container-low border-b-[3px] border-black">
        <div className="mb-4 border-b-[3px] border-black pb-2 flex items-center justify-between gap-2">
          <h2 className="font-headline-lg uppercase text-black">Featured Projects</h2>
          <Link
            to="/projects"
            className="shrink-0 bg-[#FF5C00] text-white border-[3px] border-black px-3 py-1 font-label-bold text-[10px] uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            View All
          </Link>
        </div>
    
        <div className="mb-6 -mx-4 px-4 overflow-x-auto">
          <div className="flex w-max flex-nowrap gap-2 pb-1">
            {projectTags.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveProjectTag(filter)}
                className={`shrink-0 border-[3px] border-black px-3 py-1 font-label-bold text-[10px] uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${activeProjectTag === filter ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="-mx-4 px-4 overflow-x-auto">
          <div className="flex w-max gap-4 pb-2">
            {featuredProjects.map(project => (
              <div key={project.id} className="w-[300px] shrink-0 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="h-48 border-b-[3px] border-black relative">
                  <div className="w-full h-full bg-black text-white flex items-center justify-center p-4">
                    <span className="font-headline-md uppercase text-center text-2xl leading-tight">{project.title}</span>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#FF5C00] text-white px-3 py-2 font-label-bold border-l-[3px] border-b-[3px] border-black text-xs">
                    {project.badge}
                  </div>
                </div>
                <div className="p-4 min-h-[260px] flex flex-col">
                  <h3 className="font-headline-md uppercase mb-2 truncate">{project.title}</h3>
                  <p className="font-body-md mb-4 text-sm text-black">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-black text-white px-2 py-1 font-label-bold text-xs uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    {project.videoId ? (
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(project.videoId)}
                        className="w-full border-[3px] border-black p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                      >
                        Watch Video
                      </button>
                    ) : null}
                    {project.deployedUrl ? (
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center border-[3px] border-black p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm bg-white text-black hover:bg-[#FF5C00] hover:text-white flex items-center justify-center gap-2"
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
                        className="w-full text-center bg-white text-black border-[3px] border-black p-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5C00] hover:text-white transition-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
                      >
                        Github
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
