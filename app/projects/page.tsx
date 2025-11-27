import Link from "next/link"

const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    year: "2024",
    description:
      "Personal portfolio website built to showcase projects, skills and experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
  },
  {
    id: "responsive-landing-page",
    title: "Responsive Landing Page",
    year: "2024",
    description:
      "A modern landing page with mobile-first design and clean layout.",
    technologies: ["HTML", "Tailwind CSS"],
    role: "Frontend Developer",
  },
]

export default function Projects() {
  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Project Work</h1>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{project.title}</h2>
                  <p className="text-accent">{project.role}</p>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${project.id}`} className="inline-block text-accent hover:underline font-semibold">
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
