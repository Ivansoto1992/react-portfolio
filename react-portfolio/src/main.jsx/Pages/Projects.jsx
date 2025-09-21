const PROJECTS = [
  {
    img: '/Users/edgarsotohernandez/Desktop/WebDesignClass/Pages/Intune.png',
    title: 'Admin Microsoft Intune',
    role: 'Azure Admin',
    outcome: 'Managing Azure Assets',
  },
  {
    img: '/Users/edgarsotohernandez/Desktop/WebDesignClass/Pages/RedHat.png',
    title: 'RedHat',
    role: 'CyberSecurity Lvl 1',
    outcome: 'Detect any risk ',
  },
  {
    img: '/Users/edgarsotohernandez/Desktop/WebDesignClass/Pages/ServiceNow.png',
    title: 'ServiceNow Admin',
    role: 'Ticketing System',
    outcome: 'Managing the ticket system in order to resolve any issue from our systems',
  }
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="card-grid">
        {PROJECTS.map((p, i) => (
          <article className="card" key={i}>
            <img src={p.img} alt={p.title} className="card-img" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p><strong>Role:</strong> {p.role}</p>
              <p><strong>Outcome:</strong> {p.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}