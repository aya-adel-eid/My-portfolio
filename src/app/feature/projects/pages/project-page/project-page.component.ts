import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-page',
  imports: [ProjectCardComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent {
  projects_arr = [
    {
      name: 'Fresh-Cart',
      description:
        'A full-featured e-commerce platform built with Angular 20 & Tailwind CSS, featuring product browsing, cart management, wishlist, authentication system with password recovery, and Strapi CMS integration.',
      techStack: [
        {
          name: `Angular 20`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong`,
        },
        {
          name: `TypeScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Tailwind CSS`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Reactive Forms`,
          styles: `bg-neutral-secondary-medium border border-default-medium text-heading`,
        },
        {
          name: `Flowbite`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/E-Commerce`,
      demo: `https://freshcart-ecommerc.netlify.app/`,
      image: '/images/E-commerce.png',
    },
    {
      name: 'Social Media App',
      description: `A full-featured social media app built with Angular 21 using Signals, Angular Material & Tailwind CSS. Supports Dark Mode,
       full CRUD for posts & comments, user profile with avatar upload, and a complete Authentication System.`,
      techStack: [
        {
          name: `Angular 21`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong`,
        },
        {
          name: `Angular Material`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong`,
        },
        {
          name: `TypeScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Tailwind CSS`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Reactive Forms`,
          styles: `bg-neutral-secondary-medium border border-default-medium text-heading`,
        },
        {
          name: `Flowbite`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
        {
          name: `Api Integration `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
      ],
      github: `https://github.com/aya-adel-eid/Social-App`,
      demo: `https://social-app-navy-nu.vercel.app/`,
      image: '/images/Devolio.png',
    },
    {
      name: 'Start FrameWork',
      description: `My first Angular app — a portfolio website implementing core Angular concepts: Routing, Data Binding,
      Reusable Components with @Input, Event & Property Binding, and a dynamic image viewer on the portfolio page.`,
      techStack: [
        {
          name: `Angular 20`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong`,
        },

        {
          name: `TypeScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Template-driven forms`,
          styles: `bg-neutral-secondary-medium border border-default-medium text-heading`,
        },
        {
          name: `Flowbite`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
        {
          name: `Api Integration `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
      ],
      github: `https://github.com/aya-adel-eid/App1-angular-`,
      demo: `https://app1-angular-seven.vercel.app/`,
      image: '/images/firstApp.png',
    },
    {
      name: 'Yummy App',
      description: `A meals discovery app that lets you browse dishes by Category, Ingredient, or Area. Click any meal to view full details,
      or search by name with real-time letter-by-letter filtering — all powered by a REST API.`,
      techStack: [
        {
          name: `JavaScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
        {
          name: `REST API `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
      ],
      github: `https://github.com/aya-adel-eid/Yummy-`,
      demo: `https://aya-adel-eid.github.io/Yummy-/`,
      image: '/images/ymmum.png',
    },
    {
      name: 'E-Commerce(Js)',
      description: `A JavaScript CRUD app with full REST API integration — add, edit & delete products, filter by category & price,
       real-time admin search, and product detail page using Local Storage for ID persistence.`,
      techStack: [
        {
          name: `JavaScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
        {
          name: `REST API `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
      ],
      github: `https://github.com/aya-adel-eid/E-commerce-js-`,
      demo: `https://aya-adel-eid.github.io/E-commerce-js-/`,
      image: '/images/E-commerceJs.png',
    },
    {
      name: 'Smart login system ',
      description: `A smart login system built with Vanilla JS — features sign up & login with validation, duplicate account prevention,
      password rules, and a personalized welcome screen using Local Storage for session persistence`,
      techStack: [
        {
          name: `JavaScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Regestration`,
      demo: `https://aya-adel-eid.github.io/Regestration/`,
      image: '/images/formJs.png',
    },

    {
      name: 'Bookmarker',
      description: `A bookmark manager app built with Vanilla JS — save, view &
      delete important links with duplicate detection, URL validation via Regex, and persistent storage using Local Storage.`,
      techStack: [
        {
          name: `JavaScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Bookmarker`,
      demo: `https://aya-adel-eid.github.io/Bookmarker/`,
      image: '/images/BookMark.png',
    },
    {
      name: 'Quotes-app',
      description: `A random quote generator built with HTML,
       CSS & JavaScript — displays a new inspirational quote on every click with smooth styling.`,
      techStack: [
        {
          name: `JavaScript `,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Quotes-app`,
      demo: `https://aya-adel-eid.github.io/Quotes-app//`,
      image: '/images/Quote.png',
    },
    {
      name: 'Daniels-website',
      description: `A responsive business website built with HTML5, CSS3 & Bootstrap 5 — completed in 1.5 days.
      Mobile-first design with modern UI/UX and clean, maintainable code structure.`,
      techStack: [
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Daniels-website-with-Bootstrap`,
      demo: `https://aya-adel-eid.github.io/Daniels-website-with-Bootstrap/`,
      image: '/images/Danial.png',
    },
    {
      name: 'DevFolio-website',
      description: `A fully responsive website built with Bootstrap and Semantic
       HTML5 — focused on clean structure, accessibility, SEO optimization, and screen reader support.`,
      techStack: [
        {
          name: `Bootstrap Css`,
          styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong`,
        },

        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Project-on-Bootstrap`,
      demo: `https://aya-adel-eid.github.io/Project-on-Bootstrap/`,
      image: '/images/Devolio.png',
    },

    {
      name: 'Mealify-website',
      description: `A modern food-themed landing page built with pure HTML &
       CSS — featuring Flexbox layout, smooth scroll, CSS animations, hover effects, and clean visual spacing.`,
      techStack: [
        { name: `Css`, styles: `bg-brand-softer border border-brand-subtle text-fg-brand-strong` },
        {
          name: `Html`,
          styles: `bg-danger-soft border border-danger-subtle text-fg-danger-strong `,
        },
      ],
      github: `https://github.com/aya-adel-eid/Mealify-Project`,
      demo: `https://aya-adel-eid.github.io/Mealify-Project/`,
      image: '/images/Mealify.png',
    },
  ];
}
