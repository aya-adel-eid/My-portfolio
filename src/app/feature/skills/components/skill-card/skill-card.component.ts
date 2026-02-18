import { Component, Input } from '@angular/core';
import { ISkill } from '../../interfaces/ISkill';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input() skill!: ISkill;
}
