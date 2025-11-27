'use client'

import { MDXRemote } from "next-mdx-remote/rsc"
import { components } from "@/components/mdx-components"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

interface BlogPreviewProps {
  frontmatter: {
    title: string
    date: string
    description: string
    tags?: string[]
    readTime?: string
  }
  content: string
}

export function BlogPreview({ frontmatter, content }: BlogPreviewProps) {
  return (
    <div className="min-h-screen bg-background" data-code-name="blog-preview">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60" data-code-name="header">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">MDX Craft</h1>
              <div className="text-sm text-muted-foreground">
                Open-source MDX utility for rich, interactive markdown experiences.
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" data-code-name="menu-trigger">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" data-code-name="menu-content">
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(window.location.href)} data-code-name="copy-link">
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out MDX Craft!')}&url=${encodeURIComponent(window.location.href)}`, '_blank')} data-code-name="share-twitter">
                  Share on Twitter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl" data-code-name="main">
        <div className="bg-background border rounded-lg p-6 shadow-sm" data-code-name="content-box">
          <article className="prose prose-neutral dark:prose-invert max-w-none" data-code-name="article">
            <MDXRemote source={content} components={components} />
          </article>
        </div>
      </main>
    </div>
  )
}