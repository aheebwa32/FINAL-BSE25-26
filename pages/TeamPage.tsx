'use client';
import React, { useState } from 'react';
import TeamMember from '../components/TeamMember';

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
      description: "",
      moreInfo: "",
      moreImages: [
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Project+Management",
        "https://via.placeholder.com/150/00FF00/FFFFFF?text=Leadership"
      ]
    },
    {
      id: 2,
      name: "KUKUNDA LYNN",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "",
      profileimage: "/api/placeholder/200/200",
      description: "",
      moreInfo: "",
      moreImages: [
        "https://via.placeholder.com/150/FFA500/FFFFFF?text=Coding+Bootcamp",
        "https://via.placeholder.com/150/008080/FFFFFF?text=Open+Source"
      ]
    },
    {
      id: 3,
      name: "NABASA RODRICK",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "",
      profileimage: "/api/placeholder/200/200",
      description: "",
      moreInfo: "",
      moreImages: [
        "https://via.placeholder.com/150/800080/FFFFFF?text=Research",
        "https://via.placeholder.com/150/008000/FFFFFF?text=Data+Analysis"
      ]
    },
    {
      id: 4,
      name: "TWEBAZE LORNA LAURA",
      role: "SOFTWARE ENGINEERING STUDENT",
      bio: "",
      profileimage: "/api/placeholder/200/200",
      description: "",
      moreInfo: "",
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

export default TeamPage;