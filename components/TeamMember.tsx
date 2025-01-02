'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { TeamMemberProps } from '../types/interfaces';

const TeamMember = ({ 
  id, 
  name, 
  role, 
  bio, 
  profileimage, 
  moreImages, 
  moreInfo, 
  expandedMember, 
  toggleReadMore 
}: TeamMemberProps) => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-32 h-32">
          <Image
            src={profileimage}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
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
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TeamMember;