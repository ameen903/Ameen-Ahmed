import Link from "next/link"
import { getBlogPosts } from "@/lib/mdx"

export default async function BlogsPage() {
  const blogs = await getBlogPosts()

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Recent Blogs</h1>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="block border-l-4 border-accent pl-6 hover:bg-card/50 p-4 -ml-4 rounded transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                  {blog.title}
                </h2>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <p className="text-muted-foreground">{blog.description}</p>
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
