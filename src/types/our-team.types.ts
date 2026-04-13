export interface TeamMemberLinks {
  whatsapp: string;
  phone: string;
  email: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageSrc: string;
  imageAlt: string;
  links: TeamMemberLinks;
}

export interface OurTeamContent {
  title: string;
  description: string;
  members: TeamMember[];
}
