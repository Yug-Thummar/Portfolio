export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b-[3px] border-black" id="about">
      <div className="p-lg md:p-xl border-r-[3px] border-black">
        <h2 className="font-headline-lg text-headline-lg uppercase mb-8">THE MANIFESTO</h2>
        <p className="font-body-lg text-body-lg mb-6">
          I believe that the web has become too soft. My work rejects the generic curves and soft shadows of modern SaaS design in favor of hard edges, high contrast, and structural honesty.
        </p>
        <p className="font-body-lg text-body-lg">
          Every line of code is a structural beam. Every pixel is a brick. I don't just build websites; I construct digital monuments that stand out in a sea of sameness.
        </p>
      </div>
      <div className="p-lg md:p-xl flex flex-col gap-12 bg-white">
        <div className="border-[3px] border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-headline-md text-headline-md uppercase mb-4">ENGINEERING</h3>
          <p className="font-body-md text-body-md">Optimized runtime performance and scalable system architectures built with Next.js, Rust, and TypeScript.</p>
        </div>
        <div className="border-[3px] border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#FF5C00] text-white">
          <h3 className="font-headline-md text-headline-md uppercase mb-4">AESTHETICS</h3>
          <p className="font-body-md text-body-md">Radical UI design inspired by brutalist architecture and technical blueprints. Function over decoration.</p>
        </div>
      </div>
    </section>
  )
}
