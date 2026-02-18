import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home/home.component';
import { AboutPageComponent } from './feature/about/about-page/about-page.component';
import { ServicesPageComponent } from './feature/services/pages/services-page/services-page.component';
import { SkillsPageComponent } from './feature/skills/pages/skills-page/skills-page.component';
import { ProjectPageComponent } from './feature/projects/pages/project-page/project-page.component';
import { ContactPagesComponent } from './feature/contact/pages/contact-pages/contact-pages.component';
import { LanguageComponent } from './feature/skills/components/language/language.component';
import { ToolsComponent } from './feature/skills/components/tools/tools.component';
import { LibraryComponent } from './feature/skills/components/library/library.component';
import { MarkUpComponent } from './feature/skills/components/mark-up/mark-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'home-page',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home-page',
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'about-page',
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: 'services-page',
  },
  {
    path: 'skills',
    component: SkillsPageComponent,
    title: 'skills-page',
    children: [
      { path: '', redirectTo: 'lang', pathMatch: 'full', title: 'Languages&FrontEnd' },
      { path: 'lang', component: LanguageComponent, title: 'Languages&FrontEnd' },
      { path: 'tools', component: ToolsComponent, title: 'Tools&&platform' },
      {
        path: 'library',
        component: LibraryComponent,
        title: 'Libraries',
      },
      {
        path: 'markUp',
        component: MarkUpComponent,
        title: 'markUp&&Styling',
      },
    ],
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
    title: 'projects-page',
  },
  {
    path: 'contact',
    component: ContactPagesComponent,
    title: 'contact-page',
  },
];
