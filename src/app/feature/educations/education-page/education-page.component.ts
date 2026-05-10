import { Component } from '@angular/core';
import { Education } from '../interfaces/education';
import { EducationCardComponent } from '../components/education-card/education-card.component';

@Component({
  selector: 'app-education-page',
  imports: [EducationCardComponent],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css',
})
export class EducationPageComponent {
  education_arr: Education[] = [
    {
      year: 'Jun 2025 – Jan 2026',
      degree: 'Front-End Diploma (Angular)',
      institution: 'Route Academy Egypt',
      location: 'Cairo, Egypt',
      icon: 'fa-solid fa-graduation-cap',
      bullets: [
        'Developed production-ready Angular applications integrating REST APIs, managing complex state, and optimizing performance with lazy loading.',
        'Engineered responsive, pixel-perfect UIs using Tailwind CSS and Bootstrap with a strong focus on clean, maintainable code.',
        'Architected scalable front-end solutions using Angular best practices including reusable components, services, and reactive programming with RxJS.',
      ],
      tags: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind CSS',
        'Bootstrap',
        'REST APIs',
        'JavaScript',
        'HTML',
        'CSS',
      ],
    },
    {
      year: 'Nov 2024 – May 2025',
      degree: 'Programming Fundamentals Diploma',
      institution: 'Route Academy Egypt',
      location: 'Cairo, Egypt',
      icon: 'fa-solid fa-code',
      bullets: [
        'Built projects demonstrating understanding of algorithms, data structures, and OOP principles.',
        'Participated in hands-on labs and coding challenges to strengthen practical software development skills.',
      ],
      tags: ['Algorithms', 'Data Structures', 'OOP', 'C++'],
    },
  ];
}
