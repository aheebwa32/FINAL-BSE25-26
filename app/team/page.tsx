import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "AHEEBWA STEVEN",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "I am a final year student specializing in app development , with a focus on developing systems with flutter.",
      profileImage: "/images/team/steven.jpg",
      socialLinks: {
        github: "https://github.com/aheebwa32",
        linkedin: "#",
        email: "aheebwasteve3@gmail.com",
      },
      skills: ["app dev", "programming", "Flutter", "React", "php"],
    },
    {
      id: 2,
      name: "KUKUNDA LYNN",

      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Passionate about data science and machine learning . Experienced in developing algorithms for pattern recognition and data analysis.",
      profileImage: "/images/team/lynn.jpg",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "lynnkukunda@gmail.com",
      },
      skills: ["Data Science", "Machine learning", "Computer vision", "Python"],
    },
    {
      id: 3,
      name: "NABASA RODRICK",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Focused on backend development and system architecture. Skilled in designing scalable and efficient systems for processing large datasets.",
      profileImage: "/images/team/rodrick.jpg",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "nabasarodrick@gmail.com",
      },
      skills: ["Backend Development", "System Architecture", "system testing", "Machine Learning"],
    },
    {
      id: 4,
      name: "TWEBAZE LORNA LAURA",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Specializing in UI/UX design and frontend development. Committed to creating intuitive and accessible interfaces for scientific applications.",
      profileImage: "/images/team/lorna.jpg",
      socialLinks: {
        github: "#",
        linkedin: "#",
        email: "lauraltwebaze@gmail.com",
      },
      skills: ["UI/UX Design", "Frontend Development", "React", "Figma"],
    },
  ]

  return (
    <>
      <section className="bg-accent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground">Meet the talented individuals behind the Beesight project</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-64 w-full md:h-auto md:w-1/3">
                      <Image
                        src={member.profileImage || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col p-6 md:w-2/3">
                      <h2 className="text-xl font-semibold">{member.name}</h2>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground mb-4">{member.bio}</p>

                      <div className="mt-2 mb-4">
                        <h3 className="text-sm font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-block bg-primary/10 text-secondary text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex gap-2">
                        <Button size="icon" variant="outline" asChild>
                          <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        </Button>
                        <Button size="icon" variant="outline" asChild>
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </Button>
                        <Button size="icon" variant="outline" asChild>
                          <a href={`mailto:${member.socialLinks.email}`}>
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}