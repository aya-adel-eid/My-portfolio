import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent {
  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly toaster = inject(ToastrService);
  loading = false;
  contactForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.email, Validators.required]],
    subject: [null, [Validators.required]],
    message: [null],
    access_key: [`5d972dec-15f0-47f4-a5be-7540b0806513`],
  });
  sendData() {
    const endPoint = `https://api.web3forms.com/submit`;
    if (this.contactForm.valid) {
      this.loading = true;
      this.httpClient.post<any>(endPoint, this.contactForm.value).subscribe({
        next: (resp) => {
          this.loading = false;
          this.toaster.success(resp.message, '', {
            progressBar: true,
          });
        },
        error: (err: HttpErrorResponse) => {
          this.toaster.error(err.error.error);
          this.loading = false;
        },
      });
    }
  }
}
