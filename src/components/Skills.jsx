export default function Skills() {
  const skills = [
    { icon: 'terminal', title: 'Frontend', desc: 'React, Angular, JavaScript, TypeScript, HTML, JSP, Thymeleaf' },
    { icon: 'database', title: 'Backend', desc: 'Java, Spring Boot, Spring MVC, Spring, Hibernate, Servlets, MVC, REST, Microservices' },
    { icon: 'architecture', title: 'Database & Enterprise', desc: 'PostgreSQL, SQL, Liferay, Keycloak, Firebase' },
    { icon: 'draw', title: 'DevOps & Tools', desc: 'Maven, Gradle, Docker, Git, GitHub, CSS' }
  ]

  return (
    <section className="p-lg md:p-xl border-b-[3px] border-black bg-surface-container-low">
      <h2 className="font-headline-lg text-headline-lg uppercase mb-12">TECHNOLOGY STACK</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5C00] hover:text-white transition-none group">
            <div className="flex flex-col h-full justify-between">
              <span className="material-symbols-outlined text-4xl mb-8">{skill.icon}</span>
              <div>
                <span className="font-label-bold text-xl uppercase block mb-2">{skill.title}</span>
                <p className="font-body-md text-body-md text-sm opacity-90">{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
