import { Component } from '@angular/core';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { CardContactComponent } from '../../components/card-contact/card-contact.component';

@Component({
  selector: 'app-contact-pages',
  imports: [FormContactComponent, CardContactComponent],
  templateUrl: './contact-pages.component.html',
  styleUrl: './contact-pages.component.css',
})
export class ContactPagesComponent {
  arr_contact = [
    {
      icon: `fa-solid fa-envelope-circle-check`,
      content: [`ayaadelyahoo66@gmail.com`],
    },
    {
      icon: `fa-solid fa-phone`,
      content: [`01091570360`, `0 11 05375018`],
    },
    {
      icon: `fa-solid fa-location-dot`,
      content: [`Cairo , Egypt`],
    },
  ];
}
