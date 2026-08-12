export interface Education {
  year: string;
  location: string;
  degree: string;
  institution: string;
  icon: string;
  bullets: string[];
  tags: string[];
  current?: boolean; // ← أضيفي دي
}
