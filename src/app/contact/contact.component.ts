import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AlertComponent } from '../alert/alert.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, AlertComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private alertService: AlertService) {}

  con = {
    title: 'Contact',
    email: 'kuljanisaba@gmial.com',
    location: 'Georgia',
    phone: '+995 592 12 82 83',
    workingHours: 'Full time',
    socialLinks: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ssabaa.7/',
        icon: 'fab fa-instagram'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/SabaKuljanishvili',
        icon: 'fab fa-github'
      }
    ]
  };

  private langService = inject(LanguageService);
  lang = this.langService.currentLang;

  text = computed(() => {
    return this.lang() === 'en'
      ? {
              title: 'Contact',
            email: 'Email',
            location: 'Location',
            locationn: 'Georgia',
            phone: 'Phone',
            workingHours: 'Working Hours',
            socialMedia: 'Social Media',
            formName: 'Full Name',
            formEmail: 'Email Address',
            formSubject: 'Subject',
            formMessage: 'Your Message',
            formButton: 'Send Message',
          }
        : {

                      title: 'კონტაქტი',
            email: 'ელ.ფოსტა',
            location: 'მდებარეობა',
            locationn: 'საქართველო',
            phone: 'ტელეფონი',
            workingHours: 'სამუშაო საათები',
            socialMedia: 'სოციალური ქსელები',
            formName: 'სრული სახელი',
            formEmail: 'ელ.ფოსტის მისამართი',
            formSubject: 'თემა',
            formMessage: 'შეტყობინება',
            formButton: 'შეტყობინების გაგზავნა',
          };
  });

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    const serviceID = 'service_j351zet';
    const templateID = 'template_9p0e6do';
    const userID = '3U_L1RyqRF4cFPqgZ'; 

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        this.alertService.showAlert('წარმატება!', 'შეტყობინება წარმატებით გაიგზავნა!');
        this.resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        this.alertService.showAlert('შეცდომა!', 'შეტყობინების გაგზავნა ვერ მოხერხდა. გთხოვ სცადე თავიდან.');
      });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
