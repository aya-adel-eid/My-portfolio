import { Component } from '@angular/core';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { ServiceCardComponent } from '../../../services/components/service-card/service-card.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-skills-page',
  imports: [SkillCardComponent, ServiceCardComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css',
})
export class SkillsPageComponent {
  // tools_Arr = [
  //   {
  //     name: 'Git',
  //     icon: 'fa-brands fa-git-alt',
  //     styling: 'from-orange-600 to-red-700',
  //     styles: '90%',
  //     description: 'Version control system',
  //   },
  //   {
  //     name: 'GitHub',
  //     icon: 'fa-brands fa-github',
  //     styling: 'from-gray-700 to-gray-900 ',
  //     styles: '82%',
  //     description: 'Code hosting and collaboration',
  //   },
  //   {
  //     name: 'Visual Studio Code',
  //     icon: 'fa-brands fa-code',
  //     styling: 'from-blue-500 to-blue-700',
  //     styles: '85%',
  //     description: 'Code editor and development environment',
  //   },
  //   {
  //     name: 'NPM',
  //     icon: 'fa-brands fa-npm',
  //     styling: 'from-red-600 to-red-800',
  //     styles: '85%',
  //     description: 'Package manager for JavaScript',
  //   },
  // ];
  // libraries_Arr = [
  //   {
  //     name: 'Flowbite',
  //     icon: 'fa-solid fa-water',
  //     styling: 'from-cyan-500 to-blue-600',
  //     styles: '90%',
  //     description: 'Tailwind CSS components library',
  //   },
  //   {
  //     name: 'PrimeNG',
  //     icon: 'fa-solid fa-gem',
  //     styling: 'from-indigo-500 to-purple-600',
  //     styles: '85%',
  //     description: 'Angular UI component library',
  //   },
  //   {
  //     name: 'Bootstrap',
  //     icon: 'fa-brands fa-bootstrap',
  //     styling: 'from-purple-600 to-pink-600 ',
  //     styles: '97%',
  //     description: 'CSS framework for responsive design',
  //   },
  //   {
  //     name: 'NgRx',
  //     icon: 'fa-solid fa-store',
  //     styling: 'from-purple-500 to-red-500 ',
  //     styles: '80%',
  //     description: 'State management for Angular',
  //   },
  //   {
  //     name: 'RxJS',
  //     icon: 'fa-solid fa-arrows-spin',
  //     styling: 'from-pink-500 to-rose-600 ',
  //     styles: '85%',
  //     description: 'Reactive programming library',
  //   },
  //   {
  //     name: 'jQuery',
  //     icon: 'fa-solid fa-j',
  //     styling: 'from-blue-400 to-blue-700 ',
  //     styles: '85%',
  //     description: 'Fast JavaScript library',
  //   },
  //   {
  //     name: 'Angular Material',
  //     icon: 'fa-brands fa-angular',
  //     styling: 'from-pink-500 to-purple-700',
  //     styles: '80%',
  //     description: 'UI component library for Angular',
  //   },
  // ];
  // languages_Arr = [
  //   {
  //     name: 'Angular',
  //     icon: 'fa-brands fa-angular',
  //     styling: 'from-red-500 to-pink-600',
  //     styles: '90%',
  //     description: 'Framework for building web applications',
  //   },
  //   {
  //     name: 'JavaScript',
  //     icon: 'fa-brands fa-js',
  //     styling: 'from-yellow-400 to-orange-500',
  //     styles: '90%',
  //     description: 'Programming language for the web',
  //   },
  //   {
  //     name: 'HTML5',
  //     icon: 'fa-brands fa-html5',
  //     styling: 'from-orange-500 to-red-600',
  //     styles: '90%',
  //     description: 'Structure and semantic markup',
  //   },
  //   {
  //     name: 'CSS3 && Sacc',
  //     icon: 'fa-brands fa-css3-alt',
  //     styling: 'from-blue-500 to-cyan-500',
  //     styles: '98%',
  //     description: 'Styling and layout for web pages',
  //   },
  //   {
  //     name: 'Tailwind CSS',
  //     icon: 'fa-brands fa-css3-alt',
  //     styling: 'from-cyan-400 to-blue-500 ',
  //     styles: '98%',
  //     description: 'Utility-first CSS framework',
  //   },
  //   {
  //     name: 'TypeScript',
  //     icon: 'fa-brands fa-typescript',
  //     styling: 'from-blue-600 to-blue-800',
  //     styles: '90%',
  //     description: 'Typed superset of JavaScript',
  //   },
  //   {
  //     name: 'C++',
  //     icon: 'fa-solid fa-code',
  //     styling: 'from-blue-600 to-indigo-700 ',
  //     styles: '85%',
  //     description: 'High-performance programming',
  //   },
  // ];
}
