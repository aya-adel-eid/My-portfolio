import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-tools',
  imports: [SkillCardComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css',
})
export class ToolsComponent {
  tools_Arr = [
    {
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
      styling: 'from-orange-600 to-red-700',
      styles: '90%',
      description: 'Version control system',
    },

    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      styling: 'from-gray-700 to-gray-900 ',
      styles: '82%',
      description: 'Code hosting and collaboration',
    },
    {
      name: 'Visual Studio Code',
      icon: 'fa-brands fa-code',
      styling: 'from-blue-500 to-blue-700',
      styles: '85%',
      description: 'Code editor and development environment',
    },
    {
      name: 'NPM',
      icon: 'fa-brands fa-npm',
      styling: 'from-red-600 to-red-800',
      styles: '85%',
      description: 'Package manager for JavaScript',
    },
  ];
}
