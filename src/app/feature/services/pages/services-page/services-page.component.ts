import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services-page',
  imports: [ServiceCardComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  services_arr = [
    {
      icon: 'fa-solid fa-code',
      title: 'Web Application Development',
      description:
        'Building dynamic, scalable web applications with Angular using clean and maintainable code.',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Responsive UI/UX Implementation',
      description:
        'Transforming Figma or Adobe XD designs into pixel-perfect, fully responsive interfaces.',
    },

    {
      icon: 'fa-regular fa-file-code',
      title: 'API Integration & Real-Time Data Handling',
      description:
        'Implementing seamless API integrations and real-time data synchronization to keep your applications connected and up-to-date.',
    },
    {
      icon: 'fa-solid fa-gauge-simple-high',
      title: 'Performance Optimization',
      description:
        'Delivering high-performance Angular applications through NgRx state management, lazy loading, caching, and optimized rendering techniques.',
    },
    {
      icon: 'fa-solid fa-user-lock',
      title: 'Authentication & Authorization',
      description:
        'Securing applications with JWT authentication, role-based access control, and protected routing to ensure safe and authorized user access.',
    },

    {
      icon: 'fa-solid fa-cubes',
      title: 'Component-Based Architecture',
      description:
        'Creating modular, reusable components that make applications easier to build, test, and maintain over time.',
    },
  ];
}
