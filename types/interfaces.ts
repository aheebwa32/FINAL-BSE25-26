export interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  profileimage: string;
  moreImages: string[];
  moreInfo: string;
  expandedMember: number | null;
  toggleReadMore: (id: number) => void;
}

export interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}