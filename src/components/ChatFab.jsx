import { Link } from 'react-router-dom'

export default function ChatFab() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-24 right-4 bg-black text-white w-16 h-16 border-[3px] border-white shadow-[4px_4px_0px_0px_rgba(255,92,0,1)] flex items-center justify-center active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-none z-40 md:hidden hover:opacity-90"
      aria-label="Contact us"
    >
      <span className="material-symbols-outlined text-white">chat</span>
    </Link>
  )
}
