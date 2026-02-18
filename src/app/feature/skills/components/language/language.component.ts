import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-language',
  imports: [SkillCardComponent],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
})
export class LanguageComponent {
  languages_Arr = [
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
      styling: 'from-yellow-400 to-orange-500',
      styles: '90%',
      description: 'Programming language for the web',
    },
    {
      name: 'TypeScript',
      icon: 'fa-brands fa-typescript',
      styling: 'from-blue-600 to-blue-800',
      styles: '90%',
      description: 'Typed superset of JavaScript',
    },

    {
      name: 'C++',
      icon: 'fa-solid fa-code',
      styling: 'from-blue-600 to-indigo-700 ',
      styles: '85%',
      description: 'High-performance programming',
    },
  ];
}
