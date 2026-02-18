import { Component, Input } from '@angular/core';
import { IProject } from '../../interfaces/IProject';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: IProject;
}
