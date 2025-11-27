import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:ahmedtamjid2006@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    ahmedtamjid2006@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+8801726738530" className="text-muted-foreground hover:text-accent transition-colors">
                    +880 1726 738530
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Link href="https://github.com/ameen903" className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}