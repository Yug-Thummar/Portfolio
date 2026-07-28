import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b-[3px] border-black">
      <div className="md:col-span-8 p-lg md:p-xl border-r-[3px] border-black flex flex-col justify-center">
        <span className="font-label-bold text-label-bold uppercase mb-4 text-[#FF5C00]">Creative Developer // Architect of Code</span>
        <h1 className="font-headline-xl text-headline-xl uppercase text-primary leading-none mb-8">
          ALEX<br/>CHEN
        </h1>
        <p className="font-body-lg text-body-lg max-w-xl mb-12">
          Building digital infrastructures with architectural precision and high-impact aesthetics. Specializing in Neo-Brutalist interfaces and performance-first engineering.
        </p>
        <div className="flex gap-4">
          <Link to="/projects" className="bg-[#FF5C00] text-white border-[3px] border-black px-10 py-6 font-label-bold text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-none hover:opacity-90 inline-block">
            View Projects
          </Link>
        </div>
      </div>
      <div className="md:col-span-4 bg-surface-container-high relative min-h-[400px] flex items-center justify-center p-md">
        <div className="border-[3px] border-black bg-white w-full h-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
          <img className="w-full h-full object-cover grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0" alt="A striking portrait of a male developer with a sharp, modern appearance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqhMRKmLZ9K9Um-MAv3RXwo5daHWzrl5l8UyrI-BrmPzhYrEeswluPoKVzMU_997BThV1oqY644HXiv6M3KZQvgYPfn0QO6MmCDj-cIDK-8N5fOD4MaidICQw6dB6Hgy3pT4_pzMn5li04Rk4O50wR75CqBfgZDCrJSZXhVFYyssRKI6udisAl3cmbtxQRDFhyaJcfbXu8HwZQ8d4tSaHeOmI4TFoYVklhigeqRFnpU_txC9fVlYpuVlnpxxOz8J5GZXjKyevm8ool" />
        </div>
      </div>
    </section>
  )
}
