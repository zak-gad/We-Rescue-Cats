import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.contactForm.value, 'YOUR_USER_ID')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error: { text: string }) => {
          console.log(error.text);
          alert('Failed to send message.');
        });
    }
  }
}
