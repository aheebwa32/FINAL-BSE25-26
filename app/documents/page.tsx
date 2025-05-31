import { Calendar, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function DocumentsPage() {
  const documents = [
    {
      title: "Concept Paper",
      date: "2025-01-01",
      type: "Paper",
      link: "https://onedrive.live.com/edit.aspx?resid=B07E87B5425076DA!seb5b7bef76b948c1aae0d9efd8ed38d5&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy9iMDdlODdiNTQyNTA3NmRhL0V1OTdXLXU1ZHNGSXF1RFo3OWp0T05VQlZrUnZMRXU1YS1PSE93WXhZSDBkaXc_ZT1Ka2sySmU&wd=target%28Documents.one%7C1a9ad575-89d3-4844-aa4c-411ed4e56fd4%2FConcept%20paper%7Cbb2e55ef-c0e1-4125-affb-fa4ef5fb708e%2F%29&wdorigin=703",
    },
    {
      title: "Questionnaire",
      date: "2025-01-01",
      type: "Paper",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeN2-my0pZHqvF5qIdHrpztMDsem7zlzmSx8FdCP26CGOoQAg/viewform",
    },
    {
      title: "Data Collection Survey",
      date: "2025-01-15",
      type: "Survey",
      link: "https://docs.google.com/forms/d/1ZUPUwDUWZpqs1IvFRyg_N3uMkUKhns7ZKUenjCMbbQs/edit",
    },
    {
      title: "Other Data Collection Tools",
      date: "2025-01-15",
      type: "Tools",
      link: "https://drive.google.com/drive/folders/1g1ZJaZKEfrWyCg4Wm5-FqAlnEmNrDqMb?usp=sharing",
    },
    {
      title: "Software Requirements Specification",
      date: "2025-02-01",
      type: "SRS",
      link: "https://docs.google.com/document/d/1IYw0etODpMuiQAeGKuSKL-gn2ydM5EW8RAwpXyToL-A/edit?tab=t.0",
    },
    {
      title: "Data Collection Report",
      date: "2025-02-01",
      type: "Report",
      link: "https://docs.google.com/document/d/1TecRGoPQvoT7qkVzYZ7770LJUys3h10jXBFEMO_q1GE/edit?usp=sharing",
    },
    {
      title: "Software Design Document",
      date: "2025-04-01",
      type: "SDD",
      link: "https://docs.google.com/document/d/1UUPm_t2N7dobpb6AYGHYNZYdYdwX9jbHPdeN23q5EMI/edit?usp=sharing",
    },
    {
      title: "Final Year Project Report",
      date: "2025-05-01",
      type: "Report",
      link: "https://docs.google.com/document/d/1i72ueYQ4YEGc5jMKN3UR70cVoGywVFf9pVeiO9_JbC0/edit?usp=sharing",
    },
  ]

  return (
    <>
      <section className="bg-accent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Project Documents</h1>
          <p className="text-lg text-muted-foreground">Access all the documentation related to the Beesight project</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center justify-center bg-primary/10 p-6 md:p-8">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex flex-grow flex-col p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={doc.date}>{doc.date}</time>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                      <p className="text-muted-foreground mb-4">{doc.type} - Beesight Project</p>
                      <div className="mt-auto">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-honey flex w-fit items-center gap-2"
                        >
                          View {doc.type}
                          <ExternalLink className="h-4 w-4" />
                        </a>
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
