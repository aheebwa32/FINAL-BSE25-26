export interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
}