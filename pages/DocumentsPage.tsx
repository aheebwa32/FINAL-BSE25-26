'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DocumentsPage = () => {
  const documents = [
    {
      title: "Concept Paper",
      date: "2025-01-01",
      type: "Paper",
      link: "https://onedrive.live.com/edit.aspx?resid=B07E87B5425076DA!seb5b7bef76b948c1aae0d9efd8ed38d5&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy9iMDdlODdiNTQyNTA3NmRhL0V1OTdXLXU1ZHNGSXF1RFo3OWp0T05VQlZrUnZMRXU1YS1PSE93WXhZSDBkaXc_ZT1Ka2sySmU&wd=target%28Documents.one%7C1a9ad575-89d3-4844-aa4c-411ed4e56fd4%2FConcept%20paper%7Cbb2e55ef-c0e1-4125-affb-fa4ef5fb708e%2F%29&wdorigin=703"
    },
    {
      title: "Questionnaire",
      date: "2025-01-01",
      type: "Paper",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeN2-my0pZHqvF5qIdHrpztMDsem7zlzmSx8FdCP26CGOoQAg/viewform"
    },
    {
      title: "Data Collection Survey",
      date: "2025-01-15",
      type: "survey",
      link: "https://docs.google.com/forms/d/1ZUPUwDUWZpqs1IvFRyg_N3uMkUKhns7ZKUenjCMbbQs/edit"
    },
    {
      title: "Other Data Collection Tools",
      date: "2025-01-15",
      type: "Tools",
      link: "https://drive.google.com/drive/folders/1g1ZJaZKEfrWyCg4Wm5-FqAlnEmNrDqMb?usp=sharing"
    },
    {
      title: "Software Requirements Specification",
      date: "2025-02-01",
      type: "SRS",
      link: "https://docs.google.com/document/d/1IYw0etODpMuiQAeGKuSKL-gn2ydM5EW8RAwpXyToL-A/edit?tab=t.0"
    },
    {
      title: "Data collection Report",
      date: "2025-02-01",
      type: "Google doc",
      link: ""
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Project Documents</h1>
      <div className="grid gap-4">
        {documents.map((doc, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-sm text-gray-500">{doc.date}</p>
              </div>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View {doc.type}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;