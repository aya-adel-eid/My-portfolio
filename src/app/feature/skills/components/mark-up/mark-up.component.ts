import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-mark-up',
  imports: [SkillCardComponent],
  templateUrl: './mark-up.component.html',
  styleUrl: './mark-up.component.css',
})
export class MarkUpComponent {
  markup_Styling_arr = [
    {
      name: 'HTML5',
      icon: 'fa-brands fa-html5',
      styling: 'from-orange-500 to-red-600',
      styles: '90%',
      description: 'Structure and semantic markup',
    },
    {
      name: 'CSS3 && Sacc',
      icon: 'fa-brands fa-css3-alt',
      styling: 'from-blue-500 to-cyan-500',
      styles: '98%',
      description: 'Styling and layout for web pages',
    },
  ];
}
