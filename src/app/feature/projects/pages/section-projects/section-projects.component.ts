import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectsService } from '../../Services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-projects',
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.css',
})
export class SectionProjectsComponent {
  projectsService = inject(ProjectsService);
}
