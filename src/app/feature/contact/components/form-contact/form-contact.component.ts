import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent {
  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(3)]],
    email: [null, [Validators.email, Validators.required]],
    subject: [null, [Validators.required]],
    message: [null],
    access_key: [`5d972dec-15f0-47f4-a5be-7540b0806513`, [Validators.required]],
  });
  sendData() {
    const endPoint = `https://api.web3forms.com/submit`;
    this.httpClient.post(endPoint, this.contactForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.error);
      },
    });
    console.log(this.contactForm.value);
  }
}
