import PrintButton from "../components/PrintButton";
import {
  profile,
  education,
  projects,
  activities,
  skills,
  softSkills,
  languages,
  reference,
} from "../data/profile";

const nav = [
  ["about", "About"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["leadership", "Leadership"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">
                {profile.role} · {profile.university}
              </p>
              <h1>
                Helping every learner find their <em>voice</em> in English.
              </h1>
              <p className="lede">
                I&apos;m {profile.name}, a final-year {profile.program} student
                focused on pedagogy, language assessment and communicative
                teaching.
              </p>
              <div className="actions">
                <a className="btn btn-solid" href="#contact">
                  Get in touch
                </a>
                <a className="btn btn-ghost" href="#projects">
                  See my work
                </a>
                <PrintButton />
              </div>
            </div>
            <div className="board" aria-hidden="true">
              <p className="board-label">Today&apos;s lesson</p>
              <p className="board-text">
                Communicative <br />
                competence
              </p>
              <ul>
                <li>Listen</li>
                <li>Speak</li>
                <li>Read</li>
                <li>Write</li>
              </ul>
            </div>
          </div>
          <div className="wrap stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="wrap narrow">
            <h2>About me</h2>
            <p className="about">{profile.summary}</p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section alt">
          <div className="wrap">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((e) => (
                <article key={e.title} className="tl-item">
                  <p className="period">{e.period}</p>
                  <div className="card">
                    <div className="card-head">
                      <h3>{e.title}</h3>
                      <span className="badge">CGPA {e.cgpa}</span>
                    </div>
                    <p className="muted">
                      {e.school} · {e.place}
                    </p>
                    <p className="small-label">Relevant coursework</p>
                    <ul className="chips">
                      {e.coursework.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="wrap">
            <h2>Academic projects</h2>
            <div className="grid-2">
              {projects.map((p) => (
                <article key={p.title} className="card project">
                  <div className="card-head">
                    <span className="tag">{p.tag}</span>
                    <span className="year">{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section alt">
          <div className="wrap">
            <h2>Leadership &amp; community</h2>
            <div className="grid-2">
              {activities.map((a) => (
                <article key={a.org} className="card">
                  <div className="card-head">
                    <h3>{a.role}</h3>
                    <span className="year">{a.year}</span>
                  </div>
                  <p className="muted">{a.org}</p>
                  <p>{a.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="wrap">
            <h2>Skills</h2>
            <div className="grid-2">
              {skills.map((s) => (
                <div key={s.group} className="card">
                  <h3 className="h-sm">{s.group}</h3>
                  <ul className="chips">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid-2 gap-top">
              <div className="card">
                <h3 className="h-sm">Soft skills</h3>
                <ul className="check">
                  {softSkills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="h-sm">Languages</h3>
                <ul className="langs">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <div className="lang-row">
                        <strong>{l.name}</strong>
                        <span className="muted">{l.level}</span>
                      </div>
                      <div
                        className="bar"
                        role="img"
                        aria-label={`${l.name}: ${l.level}`}
                      >
                        <span style={{ width: `${l.pct}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="wrap contact-grid">
            <div>
              <h2>Let&apos;s talk</h2>
              <p className="lede">
                Open to practicum placements, teaching assistant roles and
                collaborations in English language education.
              </p>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </li>
                <li>
                  <span>Address</span>
                  {profile.location}
                </li>
              </ul>
            </div>
            <div className="card ref">
              <p className="small-label">Reference</p>
              <h3>{reference.name}</h3>
              <p className="muted">
                {reference.role}, {reference.org}
              </p>
              <p>
                <a href={`mailto:${reference.email}`}>{reference.email}</a>
                <br />
                <a href={`tel:${reference.phone}`}>{reference.phone}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} {profile.name} · {profile.program},{" "}
          {profile.university}
        </div>
      </footer>
    </>
  );
}
