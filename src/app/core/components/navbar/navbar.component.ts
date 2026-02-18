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
  ngOnInit(): void {
    if (isPlatformBrowser(this.platId)) {
      this.darkServices.SaveFinal();
    }
  }
  toggleDark() {
    this.darkServices.toggleMode();
  }
}
