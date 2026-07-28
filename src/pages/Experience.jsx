export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'ReactorBee Private Limited',
      period: 'Jul 2025 – Present',
      description: 'Design and develop production-grade web and cross-platform applications across healthcare, e-commerce, CRM, and industrial domains. Build scalable frontend and backend systems using React.js, React Native, Node.js, Java, Firebase, Firestore, PostgreSQL, and REST APIs. Develop secure payment integrations, authentication systems, cloud functions, and optimized database architectures while collaborating across complete product lifecycles.',
      skills: ['React.js', 'React Native', 'Node.js', 'TypeScript', 'Java', 'Firebase', 'Firestore', 'Cloud Functions', 'PostgreSQL', 'REST APIs']
    },
  ]

  return (
    <main className="w-full">
      <section className="border-b-[3px] border-black bg-white">
        <div className="p-4">
          <h1 className="font-headline-lg text-black text-headline-lg uppercase mb-4">CURRENTLY WORKING</h1>
          <p className="font-body-md text-body-md max-w-2xl">
            Currently working at ReactorBee Private Limited, designing and developing production-grade web and cross-platform applications.
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-black bg-white">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className={`p-4 ${idx !== experiences.length - 1 ? 'border-b-[3px] border-black' : ''}`}>
            <h3 className="font-headline-md text-headline-md uppercase mb-1">{exp.title}</h3>
            <p className="font-label-bold text-label-bold text-black mb-1">{exp.company}</p>
            <p className="font-body-md text-body-md text-gray-600 mb-3">{exp.period}</p>
            <p className="font-body-md text-body-md mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-black text-white px-3 py-1 font-label-bold text-xs uppercase border-[3px] border-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white p-4 border-b-[3px] border-black">
        <h2 className="font-headline-lg text-headline-lg uppercase mb-6">CORE COMPETENCIES</h2>
        <div className="space-y-4">
          <div className="border-[3px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-headline-md text-headline-md uppercase mb-3">TECHNICAL</h3>
            <ul className="font-body-md text-body-md space-y-1 text-sm">
              <li>• React.js & React Native</li>
              <li>• Node.js Backend Development</li>
              <li>• Firebase & Firestore</li>
              <li>• Java & Enterprise Development</li>
              <li>• Database Design & Optimization</li>
            </ul>
          </div>
          <div className="border-[3px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#FF5C00] text-white">
            <h3 className="font-headline-md text-headline-md uppercase mb-3">PROFESSIONAL</h3>
            <ul className="font-body-md text-body-md space-y-1 text-sm">
              <li>• Full Stack Development</li>
              <li>• REST API Integration</li>
              <li>• Payment Gateway Integration</li>
              <li>• Performance Optimization</li>
              <li>• Cross-functional Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-0"></div>
    </main>
  )
}