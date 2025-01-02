'use client';
import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { 
  currentPage: string; 
  setCurrentPage: (page: string) => void 
}) => (
  <nav className="bg-purple-400 p-4">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
      <div className="text-white font-bold text-xl">BSE25-26</div>
      <div className="flex space-x-4">
        {['Home','Documents', 'Team'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded ${
              currentPage === page
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

// Home Page Component
const HomePage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">Welcome to Our Final Year Project</h1>
    
      
        <p className="mb-4">
          This website showcases our team's work on Bee Foraging Advisory System. We are a group
          of four students working together to develop this system.
        </p>
      <img
          src="/bee.jpeg"
          alt="Project Banner"
          className="w-full rounded-lg mb-4 h-64 object-cover max-auto"
      />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Latest Updates</h2>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-600">January 1, 2025</p>
            <p>Project website launched</p>
            <p className="text-gray-600">January 1, 2025</p>
            <p>Project website launched</p>
          </div>
        </div>
    <h1 className="text-2xl text-center font-bold mb-6">About Our Project</h1>
      <CardContent className="p-6">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="mb-4">Monitoring honeybee foraging behavior is essential to understanding the factors affecting their health and to developing interventions for their protection. Traditional methods of monitoring bee activity are time-consuming, labor-intensive, and prone to human error.
				With advancements in technology, deep learning offers the potential to automate and enhance the analysis of honeybee behavior, providing accurate, real-time data. However, there is a lack of robust, scalable, and efficient deep learning systems specifically designed to monitor honeybee foraging patterns in different environments. This gap makes it difficult to assess the impact of foraging behavior on bee health and their role in pollination, leading to incomplete insights and delayed actions.

				The challenge is to develop a system that can accurately monitor and analyze honeybee foraging activities using deep learning techniques, to support ecological research, bee conservation efforts,</p>
          
          <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-32 font-bold">Phase 1</div>
              <div>Research and Planning</div>
            </div>
            <div className="flex items-start">
              <div className="w-32 font-bold">Phase 2</div>
              <div>Development</div>
            </div>
            <div className="flex items-start">
              <div className="w-32 font-bold">Phase 3</div>
              <div>Testing and Implementation</div>
            </div>
          </div>
        </div>
      </CardContent>
  
  </div>
);

// Documents Page Component
const DocumentsPage = () => {
  const documents = [
    { title: "Concept Paper",
       date: "2025-01-01",
        type: "Paper",
         link:"https://onedrive.live.com/edit.aspx?resid=B07E87B5425076DA!seb5b7bef76b948c1aae0d9efd8ed38d5&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy9iMDdlODdiNTQyNTA3NmRhL0V1OTdXLXU1ZHNGSXF1RFo3OWp0T05VQlZrUnZMRXU1YS1PSE93WXhZSDBkaXc_ZT1Ka2sySmU&wd=target%28Documents.one%7C1a9ad575-89d3-4844-aa4c-411ed4e56fd4%2FConcept%20paper%7Cbb2e55ef-c0e1-4125-affb-fa4ef5fb708e%2F%29&wdorigin=703"
        },
        { title: "Questionnaire",
          date: "2025-01-01",
           type: "Paper",
            link:"https://docs.google.com/forms/d/e/1FAIpQLSeN2-my0pZHqvF5qIdHrpztMDsem7zlzmSx8FdCP26CGOoQAg/viewform"
        },
      
    { title: "Data Collecton Survey", 
      date: "2025-01-15",
       type: "survey", 
       link:"https://docs.google.com/forms/d/1ZUPUwDUWZpqs1IvFRyg_N3uMkUKhns7ZKUenjCMbbQs/edit"
       },

       { title: "Other Data Collection Tools", 
        date: "2025-01-15",
         type: "Tools", 
         link:"https://drive.google.com/drive/folders/1g1ZJaZKEfrWyCg4Wm5-FqAlnEmNrDqMb?usp=sharing"
         },
    
    { title: "Software Requirements Specification", 
      date: "2025-02-01", 
      type: "SRS", 
      link:"https://docs.google.com/document/d/1IYw0etODpMuiQAeGKuSKL-gn2ydM5EW8RAwpXyToL-A/edit?tab=t.0" 
    },
    { title: "Data collection Report", date: "2025-02-01", type: "Google doc", link:"" }
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
interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  profileimage: string;
  description: string;
  moreImages: string[];
  moreInfo: string;
  expandedMember: number | null;
  toggleReadMore: (id: number) => void;
}

// Team Member Component
const TeamMember = ({ id, name, role, bio, profileimage, description, moreImages, moreInfo, expandedMember, toggleReadMore }: TeamMemberProps) => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={profileimage}
          alt={name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">{role}</p>
          <p>{bio}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
            onClick={() => toggleReadMore(id)}
          >
            {expandedMember === id ? "Show Less" : "Read More"}
          </button>
          {expandedMember === id && (
            <div className="mt-4">
              <p className="text-gray-800">{moreInfo}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {moreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${name} Activity ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Team Page Component
const TeamPage = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const toggleReadMore = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const teamMembers = [
    {
      id: 1,
      name: "AHEEBWA STEVEN",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "I am a final year student",
      profileimage: "/steve.jpeg",
      description: "Project Manager with expertise in team leadership",
      moreInfo: "Steven is an experienced project manager with a strong background in team leadership and project delivery.",
      moreImages: [
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Project+Management",
        "https://via.placeholder.com/150/00FF00/FFFFFF?text=Leadership"
      ]
    },
    {
      id: 2,
      name: "KUKUNDA LYNN",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileimage: "/api/placeholder/200/200",
      description: "Full-stack developer with expertise in modern web technologies",
      moreInfo: "Lynn is an expert in full-stack development. She contributes to open-source projects and enjoys volunteering for coding bootcamps.",
      moreImages: [
        "https://via.placeholder.com/150/FFA500/FFFFFF?text=Coding+Bootcamp",
        "https://via.placeholder.com/150/008080/FFFFFF?text=Open+Source"
      ]
    },
    {
      id: 3,
      name: "NABASA RODRICK",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileimage: "/api/placeholder/200/200",
      description: "Research specialist focused on data analysis",
      moreInfo: "Rodrick specializes in research methodologies and data analysis, bringing valuable insights to the project.",
      moreImages: [
        "https://via.placeholder.com/150/800080/FFFFFF?text=Research",
        "https://via.placeholder.com/150/008000/FFFFFF?text=Data+Analysis"
      ]
    },
    {
      id: 4,
      name: "TWEBAZE LORNA LAURA",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileimage: "/api/placeholder/200/200",
      description: "UI/UX designer with a creative approach",
      moreInfo: "Lorna is a talented designer with a keen eye for user experience and modern design trends.",
      moreImages: [
        "https://via.placeholder.com/150/FF1493/FFFFFF?text=UI+Design",
        "https://via.placeholder.com/150/4B0082/FFFFFF?text=UX+Design"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      {teamMembers.map((member) => (
        <TeamMember 
          key={member.id} 
          {...member} 
          expandedMember={expandedMember}
          toggleReadMore={toggleReadMore}
        />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Documents':
        return <DocumentsPage />;
      case 'Team':
        return <TeamPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;