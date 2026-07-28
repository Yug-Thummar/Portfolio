import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/projects', icon: 'work', label: 'Project' },
    { path: '/experience', icon: 'person', label: 'About' },
    { path: '/contact', icon: 'mail', label: 'Contact' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-[3px] border-black h-20 flex md:hidden z-50">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-none border-l-[3px] border-black ${
            idx === 0 ? '' : ''
          } ${location.pathname === item.path ? 'bg-[#FF5C00] text-white' : 'text-black hover:bg-[#FF5C00] hover:text-white'}`}
        >
          <span className="material-symbols-outlined text-xl" style={location.pathname === item.path ? { fontVariationSettings: "'FILL' 1" } : {}}>
            {item.icon}
          </span>
          <span className="text-[10px] font-label-bold uppercase">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
