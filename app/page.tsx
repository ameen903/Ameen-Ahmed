import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Code, Database, Wrench } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Ameen Ahmed</h1>
          <div className="flex flex-col items-center gap-2 text-accent mb-6">
            <a href="mailto:ahmedtamjid2006@gmail.com" className="hover:underline">
              ahmedtamjid2006@gmail.com
            </a>
            <span>+8801726738530</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground mb-6">
            <a href="https://github.com/ameen903" className="hover:text-accent transition-colors">
              github.com/ameen903
            </a>
            <div className="flex gap-2 justify-center">
              <span>Bangladesh</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Frontend developer focused on building clean, responsive and user-friendly interfaces. Passionate about solving problems, learning new technologies and improving user experience.
          </p>
          <Link href="#" className="inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Download Resume</Button>
          </Link>
        </div>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <div>
              <Monitor className="inline h-4 w-4 mr-1" />
              <span className="font-semibold">Frontend:</span>
              <span className="ml-2">HTML, CSS, JavaScript, React, Tailwind CSS, Responsive Design, UI/UX Fundamentals</span>
            </div>
            <div>
              <Code className="inline h-4 w-4 mr-1" />
              <span className="font-semibold">Programming:</span>
              <span className="ml-2">C, JavaScript</span>
            </div>
            <div>
              <Database className="inline h-4 w-4 mr-1" />
              <span className="font-semibold">Database:</span>
              <span className="ml-2">PostgreSQL, MongoDB</span>
            </div>
            <div>
              <Wrench className="inline h-4 w-4 mr-1" />
              <span className="font-semibold">Tools & Technologies:</span>
              <span className="ml-2">VS Code, Git, GitHub, Adobe Photoshop, Canva, Figma</span>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Work Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Kanect.live</h3>
                  <p className="text-sm text-accent">Frontend Developer</p>
                </div>
                <span className="text-sm text-accent">2023 – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Design and build small client websites and landing pages.</li>
                <li>Convert Figma/Canva designs into responsive frontend code.</li>
                <li>Optimize pages for speed and accessibility.</li>
                <li>Work with clients to understand requirements and deliver solutions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Work Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Project Work</h2>
          <div className="space-y-4 text-sm text-foreground">
            <div>
              <Link href="/projects#portfolio-website" className="font-semibold text-accent hover:underline">
                Portfolio Website
              </Link>
              <p className="text-muted-foreground mt-1">
                Personal portfolio website built to showcase projects, skills and experience. Technologies: HTML, CSS, JavaScript.
              </p>
            </div>
            <div>
              <Link href="/projects#responsive-landing-page" className="font-semibold text-accent hover:underline">
                Responsive Landing Page
              </Link>
              <p className="text-muted-foreground mt-1">
                A modern landing page with mobile-first design and clean layout. Technologies: HTML, Tailwind CSS.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
          <div className="border-l-2 border-accent pl-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Computer Science and Engineering</h3>
                <p className="text-sm text-accent">United International University, Bangladesh</p>
              </div>
              <span className="text-sm text-accent">2025 - 2029</span>
            </div>
          </div>
        </section>
        {/* Interests Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {["Travel", "DIY Home Projects", "Programming", "Photography", "Learning new technologies"].map((interest) => (
              <span key={interest} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </section>
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  )
}
