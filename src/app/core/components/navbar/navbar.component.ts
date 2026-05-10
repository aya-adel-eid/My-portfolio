import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkService } from '../../services/dark.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly darkServices = inject(DarkService);
  private readonly platId = inject(PLATFORM_ID);
  isMenuOpen: boolean = false;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platId)) {
      this.darkServices.SaveFinal();
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  toggleDark() {
    this.darkServices.toggleMode();
  }
  nav_arr: NavItem[] = [
    { label: 'Home', route: '/home', icon: 'fa-regular fa-envelope-open' },
    { label: 'About', route: '/about', icon: 'fa-regular fa-user' },
    { label: 'Education', route: '/educations', icon: 'fa-solid fa-graduation-cap' },
    { label: 'Services', route: '/services', icon: 'fa-solid fa-laptop' },
    { label: 'Skills', route: '/skills', icon: 'fa-regular fa-lightbulb' },
    { label: 'Projects', route: '/projects', icon: 'fa-solid fa-code' },
    { label: 'Contact', route: '/contact', icon: 'fa-regular fa-envelope' },
  ];
}
