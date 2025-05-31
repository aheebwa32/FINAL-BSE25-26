import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden honeycomb-bg py-16 md:py-24">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-secondary">
                Final Year Project
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-secondary md:text-5xl lg:text-6xl">
                Bee<span className="text-primary">sight</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Leveraging foraging methods to improve bee hive productivity, combining advanced technology with
                ecological conservation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/documents">
                    View Project Documents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/hero-bee.jpg" alt="Bee on a flower" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      </section>

      {/* Latest Updates Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Updates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src={`/images/update-${i}.jpg`} alt={`Update ${i}`} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime="2025-01-01">October 1, 2024</time>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Milestone {i} Reached</h3>
                  <p className="text-muted-foreground mb-4">
                    We've made significant progress in planning our bee foraging advisory system, carrying out interviews with various entities
                    and individuals collecting valuable data.
                  </p>
                  <Link
                    href={`/blog/update-${i}`}
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

      {/* Project Overview Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <h2 className="section-title">About Our Project</h2>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="prose prose-stone max-w-none dark:prose-invert">
              <p>
                Monitoring honeybee foraging behavior is essential to understanding the factors affecting their health
                and to developing interventions for their protection. Traditional methods of monitoring bee activity are
                time-consuming, labor-intensive, and prone to human error.
              </p>
              <p>
                With advancements in technology, deep learning offers the potential to automate and enhance the analysis
                of honeybee behavior, providing accurate, real-time data. However, there is a lack of robust, scalable,
                and efficient deep learning systems specifically designed to monitor honeybee foraging patterns in
                different environments.
              </p>
              <p>
                The challenge is to develop a system that can accurately monitor and analyze honeybee foraging
                activities using deep learning techniques, to support ecological research, bee conservation efforts, and
                agricultural productivity.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Project Timeline</h3>
              <div className="space-y-6">
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30">
                  <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h4 className="font-semibold">Research and Planning</h4>
                  <p className="text-muted-foreground">Literature review, requirements gathering, and system design</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30">
                  <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-muted-foreground">
                    Implementation of the deep learning models and system components
                  </p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30">
                  <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h4 className="font-semibold">Testing and Implementation</h4>
                  <p className="text-muted-foreground">Validation, field testing, and deployment of the system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
