const projectDetails: Record<string, any> = {
  "portfolio-website": {
    title: "Portfolio Website",
    year: "2024",
    role: "Frontend Developer",
    description:
      "Personal portfolio website built to showcase projects, skills and experience. Features a clean, responsive design with sections for work, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design for all devices",
      "Project showcase gallery",
      "Skills and experience sections",
      "Contact form integration",
      "Smooth animations and transitions",
    ],
    challenges: [
      "Creating a responsive layout",
      "Optimizing for performance",
      "Implementing clean UI/UX design",
      "Ensuring cross-browser compatibility",
    ],
  },
  "responsive-landing-page": {
    title: "Responsive Landing Page",
    year: "2024",
    role: "Frontend Developer",
    description:
      "A modern landing page with mobile-first design and clean layout. Built to promote a product or service with an engaging user interface.",
    technologies: ["HTML", "Tailwind CSS"],
    features: [
      "Mobile-first responsive design",
      "Clean and modern UI",
      "Call-to-action sections",
      "Optimized for conversions",
      "Fast loading times",
    ],
    challenges: [
      "Designing an engaging layout",
      "Ensuring mobile responsiveness",
      "Using Tailwind CSS efficiently",
      "Optimizing for user experience",
    ],
  },
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectDetails[id]

  if (!project) {
    return (
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
        </section>
      </main>
    )
  }

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <a href="/projects" className="text-accent hover:underline mb-8 inline-block">
          ← Back to Projects
        </a>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <span>{project.year}</span>
            <span className="text-accent">{project.role}</span>
          </div>
          <p className="text-lg text-foreground leading-relaxed">{project.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex gap-2 text-foreground">
                  <span className="text-accent shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Challenges Overcome</h2>
          <ul className="space-y-2">
            {project.challenges.map((challenge: string) => (
              <li key={challenge} className="flex gap-2 text-foreground">
                <span className="text-accent shrink-0">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
