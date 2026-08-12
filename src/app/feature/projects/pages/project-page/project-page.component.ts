import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { IProject } from '../../interfaces/IProject';
import { ProjectsService } from '../../Services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-page',
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent {
  projectsService = inject(ProjectsService);
}
