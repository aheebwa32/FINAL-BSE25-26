import { TeamMemberProps } from '../types';

export const teamMembers: TeamMemberProps[] = [
  {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Experienced full-stack developer with 8+ years in web development and team leadership.",
    profileImage: "/images/team/john-doe.jpg", // Fixed: changed from profileimage to profileImage
    moreImages: ["/images/team/john-work1.jpg", "/images/team/john-work2.jpg"],
    moreInfo: "Specializes in React, Node.js, and cloud architecture. Passionate about mentoring junior developers."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
    profileImage: "/images/team/jane-smith.jpg", // Fixed: changed from profileimage to profileImage
    moreImages: ["/images/team/jane-design1.jpg"],
    moreInfo: "Expert in Figma, Adobe Creative Suite, and user research methodologies."
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    bio: "Backend specialist with expertise in scalable server architectures and database optimization.",
    profileImage: "/images/team/mike-johnson.jpg", // Fixed: changed from profileimage to profileImage
    moreInfo: "Proficient in Python, PostgreSQL, and microservices architecture."
  },
  {
    name: "Sarah Wilson",
    role: "Project Manager",
    bio: "Agile project manager ensuring smooth delivery and team collaboration.",
    profileImage: "/images/team/sarah-wilson.jpg", // Fixed: changed from profileimage to profileImage
    moreImages: ["/images/team/sarah-meeting1.jpg", "/images/team/sarah-meeting2.jpg"],
    moreInfo: "Certified Scrum Master with experience in leading cross-functional teams."
  }
];