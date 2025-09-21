
const SERVICES = [
  { name: 'Front-end Development', blurb: 'React, Node.js, REST APIs' },
  { name: 'Cybersecurity Service', blurb: 'Red Hat, Tenable, Fortinet' },
  { name: 'DevOps', blurb: 'CI/CD, Cloud deploys, monitoring' },
]

export default function Services() {
  return (
    <section>
      <h1>Services</h1>
      <ul className="services">
        {SERVICES.map((s, i) => (
          <li key={i} className="service-item">
            <h3>{s.name}</h3>
            <p>{s.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}