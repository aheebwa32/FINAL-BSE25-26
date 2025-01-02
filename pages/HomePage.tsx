'use client';
import React from 'react';
import { CardContent } from '@/components/ui/card';
import Image from 'next/image';

const HomePage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">Welcome to Our Final Year Project</h1>
    
    <p className="mb-4">
      This website showcases our team&apos;s work on Bee Foraging Advisory System. We are a group
      of four students working together to develop this system.
    </p>
    
    <div className="relative w-full h-64 mb-4">
      <Image
        src="/bee.jpg"
        alt="Project Banner"
        fill
        className="rounded-lg object-cover"
      />
    </div>

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
        <p className="mb-4">
          Monitoring honeybee foraging behavior is essential to understanding the factors affecting their health and to developing interventions for their protection. Traditional methods of monitoring bee activity are time-consuming, labor-intensive, and prone to human error.
          With advancements in technology, deep learning offers the potential to automate and enhance the analysis of honeybee behavior, providing accurate, real-time data. However, there is a lack of robust, scalable, and efficient deep learning systems specifically designed to monitor honeybee foraging patterns in different environments. This gap makes it difficult to assess the impact of foraging behavior on bee health and their role in pollination, leading to incomplete insights and delayed actions.
          The challenge is to develop a system that can accurately monitor and analyze honeybee foraging activities using deep learning techniques, to support ecological research, bee conservation efforts,
        </p>
        
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

export default HomePage;