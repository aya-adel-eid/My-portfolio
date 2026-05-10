import { Component, input } from '@angular/core';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css',
})
export class EducationCardComponent {
  edu = input<Education>();
}
