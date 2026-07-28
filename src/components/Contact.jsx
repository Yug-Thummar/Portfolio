import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 bg-white" id="contact">
      <div className="md:col-span-5 p-lg md:p-xl border-r-[3px] border-black bg-[#FF5C00] text-white">
        <h2 className="font-headline-lg text-headline-lg uppercase mb-8">INITIATE<br/>CONTACT</h2>
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-label-bold text-label-bold block uppercase mb-2">Location</span>
            <p className="text-2xl font-bold uppercase">San Francisco, CA</p>
          </div>
          <div>
            <span className="font-label-bold text-label-bold block uppercase mb-2">Availability</span>
            <p className="text-2xl font-bold uppercase">Open for Commissions</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-7 p-lg md:p-xl bg-surface">
        <form className="flex flex-col gap-8 max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold uppercase">Identify Self / Entity Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-[3px] border-black p-4 focus:ring-0 focus:border-[#FF5C00] transition-none text-xl uppercase font-bold" 
              placeholder="ENTER NAME" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold uppercase">Transmission Channel (Email)</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-[3px] border-black p-4 focus:ring-0 focus:border-[#FF5C00] transition-none text-xl uppercase font-bold" 
              placeholder="EMAIL ADDRESS" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold uppercase">Project Parameters / Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-[3px] border-black p-4 focus:ring-0 focus:border-[#FF5C00] transition-none text-xl uppercase font-bold" 
              placeholder="DESCRIBE THE MISSION" 
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-12 py-6 font-headline-md uppercase shadow-[6px_6px_0px_0px_rgba(255,92,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-none hover:opacity-90 w-fit">
            SEND DATA
          </button>
        </form>
      </div>
    </section>
  )
}
