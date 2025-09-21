export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <div className="about-grid">
        <img
          src="/Users/edgarsotohernandez/Desktop/WebDesignClass/Pages/CVPhoto.jpg"  
          alt="CVPhoto"
          className="headshot"
        />
        <div>
          <h2>Edgar Ivan Soto Hernandez</h2>
          <p>
            I’m a Solutions Analyst Engineer with interests in full-stack development, cloud, and mobile apps.
            I enjoy learning React, Node.js, Javascript and some others. 
          </p>
          <a className="btn" href="/EdgarSotoResume.pdf" target="_blank" rel="noreferrer">View Resume (PDF)</a>
        </div>
      </div>
    </section>
  )
}