import { getBlogPost, getBlogPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { BlogPreview } from "@/components/blog-preview"

export async function generateStaticParams() {
  const blogs = await getBlogPosts()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = await getBlogPost(slug)
  if (!blog) return {}
  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = await getBlogPost(slug)

  if (!blog) {
    notFound()
  }

  const { frontmatter, content } = blog

  return (
    <main className="flex-1">
      <section className="max-w-2xl mx-auto px-4 py-12">
        <a href="/blogs" className="text-accent hover:underline mb-8 inline-block">
          ← Back to Blogs
        </a>

        <BlogPreview frontmatter={frontmatter} content={content} />
      </section>
    </main>
  )
}
