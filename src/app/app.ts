import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './core/components/navbar/navbar.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
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
