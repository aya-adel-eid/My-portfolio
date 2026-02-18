export interface IProject {
  name: string;
  description: string;
  techStack: TechStack[];
  github: string;
  demo: string;
  image: string;
}

export interface TechStack {
  name: string;
  styles: string;
}
