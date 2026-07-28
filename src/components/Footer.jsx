export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t-[3px] border-black dark:border-white w-full flex flex-col items-center p-8 gap-6 mb-20 md:mb-0">
      <div className="font-black text-black dark:text-white uppercase font-['Space_Grotesk'] text-xl">
        DEVPORTFOLIO
      </div>
      <div className="flex flex-col gap-4 items-center">
        <a className="font-['Space_Grotesk'] font-bold uppercase text-sm text-black dark:text-white hover:underline decoration-[3px] underline-offset-4 transition-none" href="https://github.com/yugthummar" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a className="font-['Space_Grotesk'] font-bold uppercase text-sm text-black dark:text-white hover:underline decoration-[3px] underline-offset-4 transition-none" href="https://www.linkedin.com/in/yug-thummar/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
     
    </footer>
  )
}
