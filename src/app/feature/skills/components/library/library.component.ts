import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-library',
  imports: [SkillCardComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  libraries_Arr = [
    {
      name: 'Angular',
      icon: 'fa-brands fa-angular',
      styling: 'from-red-500 to-pink-600',
      styles: '90%',
      description: 'Framework for building web applications',
    },
    {
      name: 'Flowbite',
      icon: 'fa-solid fa-water',
      styling: 'from-cyan-500 to-blue-600',
      styles: '90%',
      description: 'Tailwind CSS components library',
    },
    {
      name: 'PrimeNG',
      icon: 'fa-solid fa-gem',
      styling: 'from-indigo-500 to-purple-600',
      styles: '85%',
      description: 'Angular UI component library',
    },
    {
      name: 'Bootstrap',
      icon: 'fa-brands fa-bootstrap',
      styling: 'from-purple-600 to-pink-600 ',
      styles: '97%',
      description: 'CSS framework for responsive design',
    },
    {
      name: 'NgRx',
      icon: 'fa-solid fa-store',
      styling: 'from-purple-500 to-red-500 ',
      styles: '80%',
      description: 'State management for Angular',
    },
    {
      name: 'RxJS',
      icon: 'fa-solid fa-arrows-spin',
      styling: 'from-pink-500 to-rose-600 ',
      styles: '85%',
      description: 'Reactive programming library',
    },
    {
      name: 'jQuery',
      icon: 'fa-solid fa-j',
      styling: 'from-blue-400 to-blue-700 ',
      styles: '85%',
      description: 'Fast JavaScript library',
    },
    {
      name: 'Angular Material',
      icon: 'fa-brands fa-angular',
      styling: 'from-pink-500 to-purple-700',
      styles: '80%',
      description: 'UI component library for Angular',
    },

    {
      name: 'Tailwind CSS',
      icon: 'fa-brands fa-css3-alt',
      styling: 'from-cyan-400 to-blue-500 ',
      styles: '98%',
      description: 'Utility-first CSS framework',
    },
  ];
}
