'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { TeamMemberProps } from '../types';

interface TeamMemberComponentProps extends TeamMemberProps {
  id: string;
}

const TeamMember: React.FC<TeamMemberComponentProps> = ({ 
  id,
  name, 
  role, 
  bio, 
  profileImage,
  moreImages, 
  moreInfo 
}) => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleReadMore = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{role}</p>
            <p>{bio}</p>
            
            {(moreInfo || (moreImages && moreImages.length > 0)) && (
              <button
                className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors"
                onClick={() => toggleReadMore(id)}
              >
                {expandedMember === id ? "Show Less" : "Read More"}
              </button>
            )}
            
            {expandedMember === id && (
              <div className="mt-4">
                {moreInfo && (
                  <p className="text-gray-800 mb-4">{moreInfo}</p>
                )}
                
                {moreImages && moreImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {moreImages.map((img, index) => (
                      <div key={index} className="relative h-40">
                        <Image
                          src={img}
                          alt={`${name} Activity ${index + 1}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;