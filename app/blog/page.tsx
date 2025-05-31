import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Bee Foraging Patterns",
      excerpt: "An in-depth look at how bees select foraging locations and what factors influence their decisions.",
      date: "2025-03-15",
      author: "Aheebwa Steven",
      image: "/images/blog/foraging-patterns.jpg",
      tags: ["Research", "Foraging", "Behavior"],
    },
    {
      id: 2,
      title: "Deep Learning for Bee Activity Monitoring",
      excerpt: "How we're using computer vision and deep learning to track and analyze bee movement patterns.",
      date: "2025-03-01",
      author: "Kukunda Lynn",
      image: "/images/blog/deep-learning.jpg",
      tags: ["Technology", "AI", "Computer Vision"],
    },
    {
      id: 3,
      title: "The Impact of Climate Change on Bee Populations",
      excerpt: "Examining how changing weather patterns affect bee foraging behavior and colony health.",
      date: "2025-02-15",
      author: "Nabasa Rodrick",
      image: "/images/blog/climate-change.jpg",
      tags: ["Climate", "Conservation", "Research"],
    },
    {
      id: 4,
      title: "Building a User-Friendly Interface for Beekeepers",
      excerpt: "Our approach to designing an intuitive dashboard for beekeepers to monitor hive activity.",
      date: "2025-02-01",
      author: "Twebaze Lorna Laura",
      image: "/images/blog/ui-design.jpg",
      tags: ["Design", "UX", "Technology"],
    },
  ]

  return (
    <>
      <section className="bg-accent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Beesight Blog</h1>
          <p className="text-lg text-muted-foreground">Insights, updates, and research findings from our team</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="text-muted-foreground">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-xs text-primary">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
