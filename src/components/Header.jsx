import { useState } from 'react'
import { Link } from 'react-router-dom'
import resumePdf from '../assets/Yug_Thummar_CV.pdf'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <header className="bg-white dark:bg-black border-b-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex items-center justify-between w-full px-4 h-16 sticky top-0 z-50">
        <Link to="/" className="text-2xl font-black text-black dark:text-white uppercase font-['Space_Grotesk'] tracking-tighter">
          YUG THUMMAR
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 border-[3px] border-black dark:border-white text-black dark:text-white font-label-bold uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-[#FF5C00] hover:text-white transition-none"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={resumePdf}
            download="Yug-Thummar-Resume.pdf"
            className="px-4 py-2 border-[3px] border-black dark:border-white bg-[#FF5C00] text-white font-label-bold uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:opacity-90 transition-none"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden w-12 h-12 flex items-center justify-center border-l-[3px] border-black dark:border-white active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-black dark:text-white">menu</span>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="fixed top-16 left-0 right-0 bg-white dark:bg-black border-b-[3px] border-black dark:border-white z-40">
          <div className="grid grid-cols-2 gap-0">
          <Link to="/" className="block w-full px-4 py-4 border-r-[3px] border-b-[3px] border-black dark:border-white text-black dark:text-white font-bold uppercase hover:bg-[#FF5C00] hover:text-white transition-none" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/experience" className="block w-full px-4 py-4 border-b-[3px] border-black dark:border-white text-black dark:text-white font-bold uppercase hover:bg-[#FF5C00] hover:text-white transition-none" onClick={() => setMobileMenuOpen(false)}>
            Experience
          </Link>
          <Link to="/projects" className="block w-full px-4 py-4 border-r-[3px] text-black dark:text-white font-bold uppercase hover:bg-[#FF5C00] hover:text-white transition-none" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="block w-full px-4 py-4 border-t-[3px] border-black dark:border-white text-black dark:text-white font-bold uppercase hover:bg-[#FF5C00] hover:text-white transition-none" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <a
            href={resumePdf}
            download="Yug-Thummar-Resume.pdf"
            className="block w-full px-4 py-4 col-span-2 border-t-[3px] border-black dark:border-white bg-[#FF5C00] text-white font-bold uppercase hover:opacity-90 transition-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download Resume
          </a>
          </div>
        </nav>
      )}
    </>
  )
}
