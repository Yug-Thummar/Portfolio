export default function Contact() {
  return (
    <main className="w-full">
      {/* Contact Header */}
      <section className="p-4 border-b-[3px] border-black bg-white">
        <h1 className="font-headline-lg text-[48px] leading-none uppercase mb-4">Contact</h1>
        <p className="font-body-md text-sm max-w-2xl">
          Reach out using the details below.
        </p>
      </section>

      {/* Contact Options */}
      <section className="p-4 bg-white border-b-[3px] border-black">
        <div className="space-y-4">
          {/* Email */}
          <div className="border-[3px] border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-headline-md uppercase mb-2">Email</h3>
            <a href="mailto:yugthummar563@gmail.com" className="font-body-md text-black text-sm hover:underline">
              yugthummar563@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="border-[3px] border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-headline-md uppercase mb-2">Phone</h3>
            <a href="tel:+918780646272" className="font-body-md text-black text-sm hover:underline">
              (+91) 8780646272
            </a>
          </div>

          {/* Location */}
          <div className="border-[3px] border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-headline-md uppercase mb-2">Location</h3>
            <p className="font-body-md text-sm">Surat, Gujarat, India</p>
          </div>
        </div>
      </section>

      {/* Direct Message Section */}
      <section className="p-4 bg-black text-white border-b-[3px] border-black">
        <h2 className="font-headline-md uppercase mb-4">Send Message</h2>
        <div className="contact__container bd-grid">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-3">
            <input type="hidden" name="access_key" value="645cec7d-72f8-4f9d-ad90-0ecbc920ea2d" />
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              className="w-full bg-black border-[3px] border-white p-4 font-label-bold uppercase text-white placeholder:text-surface-dim focus:ring-0 focus:border-[#FF5C00] transition-none text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-black border-[3px] border-white p-4 font-label-bold uppercase text-white placeholder:text-surface-dim focus:ring-0 focus:border-[#FF5C00] transition-none text-sm"
            />
            <textarea
              name="message"
              id=""
              cols="0"
              rows="4"
              className="w-full bg-black border-[3px] border-white p-4 font-label-bold uppercase text-white placeholder:text-surface-dim focus:ring-0 focus:border-[#FF5C00] transition-none text-sm resize-none"
              placeholder="MESSAGE"
            ></textarea>
            <input type="submit" value="Send" className="w-full bg-[#FF5C00] text-white p-4 font-headline-md uppercase border-[3px] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none hover:opacity-90" />
          </form>
        </div>
      </section>

      {/* Social Links */}
      <section className="p-4 bg-white">
        <h3 className="font-headline-md uppercase mb-4 border-b-[3px] border-black pb-2">Follow</h3>
        <div className="grid grid-cols-2 gap-3">
          <a href="https://github.com/yugthummar" target="_blank" rel="noreferrer" className="border-[3px] border-black p-4 text-center font-label-bold uppercase text-sm hover:bg-black hover:text-white transition-none">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yug-thummar/" target="_blank" rel="noreferrer" className="border-[3px] border-black p-4 text-center font-label-bold uppercase text-sm hover:bg-black hover:text-white transition-none">
            LinkedIn
          </a>
          <a href="#" className="border-[3px] border-black p-4 text-center font-label-bold uppercase text-sm hover:bg-black hover:text-white transition-none">
            Dribbble
          </a>
        </div>
      </section>

      <div className="h-24 md:h-0"></div>
    </main>
  )
}
