import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './core/components/navbar/navbar.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HomeComponent } from './feature/home/home/home.component';
import { AboutPageComponent } from './feature/about/about-page/about-page.component';
import { EducationPageComponent } from './feature/educations/education-page/education-page.component';
import { SkillsPageComponent } from './feature/skills/pages/skills-page/skills-page.component';
import { ProjectPageComponent } from './feature/projects/pages/project-page/project-page.component';
import { ContactPagesComponent } from './feature/contact/pages/contact-pages/contact-pages.component';
import { ServicesPageComponent } from './feature/services/pages/services-page/services-page.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutPageComponent,
    EducationPageComponent,
    SkillsPageComponent,
    ProjectPageComponent,
    ContactPagesComponent,
    ServicesPageComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  ngOnInit(): void {
    initFlowbite();
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, once: true, easing: 'ease-out', offset: 100 });
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          AOS.refresh();
        }
      });
    }
  }
}
