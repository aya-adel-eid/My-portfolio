import { Component, Input } from '@angular/core';
import { Iservice } from '../../interfaces/Iservice';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() service!: Iservice;
}
