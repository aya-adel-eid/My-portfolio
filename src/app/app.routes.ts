import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./feature/home/home/home.component').then((m) => m.HomeComponent),
    title: 'home-page',
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./feature/about/about-page/about-page.component').then((m) => m.AboutPageComponent),
    title: 'about-page',
  },

  {
    path: 'services',
    loadComponent: () =>
      import('./feature/services/pages/services-page/services-page.component').then(
        (m) => m.ServicesPageComponent,
      ),
    title: 'services-page',
  },

  {
    path: 'skills',
    loadComponent: () =>
      import('./feature/skills/pages/skills-page/skills-page.component').then(
        (m) => m.SkillsPageComponent,
      ),
    title: 'skills-page',

    children: [
      {
        path: '',
        redirectTo: 'lang',
        pathMatch: 'full',
      },

      {
        path: 'lang',
        loadChildren: () =>
          import('./feature/skills/components/language/language.component').then(
            (m) => m.LanguageComponent,
          ),
        title: 'Languages&FrontEnd',
      },

      {
        path: 'tools',
        loadChildren: () =>
          import('./feature/skills/components/tools/tools.component').then((m) => m.ToolsComponent),
        title: 'Tools&&platform',
      },

      {
        path: 'library',
        loadChildren: () =>
          import('./feature/skills/components/library/library.component').then(
            (m) => m.LibraryComponent,
          ),
        title: 'Libraries',
      },

      {
        path: 'markUp',
        loadChildren: () =>
          import('./feature/skills/components/mark-up/mark-up.component').then(
            (m) => m.MarkUpComponent,
          ),
        title: 'markUp&&Styling',
      },
    ],
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./feature/projects/pages/project-page/project-page.component').then(
        (m) => m.ProjectPageComponent,
      ),
    title: 'projects-page',
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./feature/contact/pages/contact-pages/contact-pages.component').then(
        (m) => m.ContactPagesComponent,
      ),
    title: 'contact-page',
  },
];
