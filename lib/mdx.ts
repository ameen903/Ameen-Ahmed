import { getBlogPosts as getPosts, getBlogPost as getPost } from "./blog-data"
import path from "path"

const blogsDirectory = path.join(process.cwd(), "content/blogs")

interface BlogFrontmatter {
  title: string
  date: string
  description: string
  tags?: string[]
  readTime?: string
}

interface Blog {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
}

export interface BlogMetadata {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

export async function getBlogPosts(): Promise<BlogMetadata[]> {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    tags: post.tags,
  }))
}

export async function getBlogPost(slug: string) {
  const post = getPost(slug)
  if (!post) return null

  return {
    slug: post.slug,
    frontmatter: {
      title: post.title,
      date: post.date,
      description: post.description,
      tags: post.tags,
      readTime: post.readTime,
    },
    content: post.content,
  }
}
