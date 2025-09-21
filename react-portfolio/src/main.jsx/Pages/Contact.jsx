import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: 'Edgar Ivan',
    lastName: 'Soto Hernandez',
    contactNumber: '+ 1 647-624-2206',
    email: 'esotoher@my.centennialcollege.ca',
    message: 'Feel free to message me'
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    localStorage.setItem('lastContact', JSON.stringify({ ...form, ts: Date.now() }))
    navigate('/', { state: { flash: `Thanks ${form.firstName}! Your message was captured.` } })
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <div className="contact-panel">
        <p><strong>Email:</strong> esotoher@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> +1 647 624 2206</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="grid-2">
          <label>
            First Name
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </label>
          <label>
            Last Name
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </label>
        </div>
        <div className="grid-2">
          <label>
            Contact Number
            <input name="contactNumber" value={form.contactNumber} onChange={handleChange} />
          </label>
          <label>
            Email Address
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
        </label>

        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}