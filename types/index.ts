export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  profileImage: string; // Fixed: changed from profileimage to profileImage (camelCase)
  moreImages?: string[];
  moreInfo?: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}