import { Link } from 'react-router-dom'
export default function Home({ flash }) {
  return (
    <section>
      {flash && <div className="flash">{flash}</div>}

      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, Im a Web Design student, also I'm working as a Solutions Analyst for the Ontario Energy Board. 
      </p>
      <p className="mission">
        <strong>Mission:</strong> Im trying to develop a new skill such as Front-End skills.
      </p>

      <div className="cta-row">
        <Link className="btn" to="/about">About Me</Link>
        <Link className="btn outline" to="/projects">View Projects</Link>
      </div>
    </section>
  )
}