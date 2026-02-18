import { Component, Input } from '@angular/core';
import { IContact } from '../../interfaces/IConect';

@Component({
  selector: 'app-card-contact',
  imports: [],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.css',
})
export class CardContactComponent {
  @Input() contact!: IContact;
}
