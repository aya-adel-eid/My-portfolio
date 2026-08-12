import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { AboutPageComponent } from '../../about/about-page/about-page.component';

import { EducationPageComponent } from '../../educations/education-page/education-page.component';
import { ServicesPageComponent } from '../../services/pages/services-page/services-page.component';
import { SkillsPageComponent } from '../../skills/pages/skills-page/skills-page.component';

import { ContactPagesComponent } from '../../contact/pages/contact-pages/contact-pages.component';
import { SectionProjectsComponent } from '../../projects/pages/section-projects/section-projects.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutPageComponent,
    EducationPageComponent,
    ServicesPageComponent,
    SkillsPageComponent,
    ContactPagesComponent,
    SectionProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
