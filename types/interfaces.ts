export interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
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