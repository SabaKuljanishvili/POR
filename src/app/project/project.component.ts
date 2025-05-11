import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  private langService = inject(LanguageService);
  lang = this.langService.currentLang;

  texts = computed(() => {
    return this.lang() === 'en'
      ? {
          sectionTitle: 'Featured Projects',
          viewProject: 'View Project',
          projects: [
            {
              title: 'Train Ticket Booking',
              description:
                'A train ticket booking site where you can easily book, cancel, and download your own tickets. The first complete website using Angular',
            },
            {
              title: 'Traveling Agency',
              description:
                'A travel information site using the Figma template, with some places modified by my interpretation.',
            },
            {
              title: 'Calculator',
              description:
                'A simple calculator application built with JS and Html5, featuring basic arithmetic operations.',
            },
            {
              title: 'Color guessing game',
              description:
                'A fun color guessing game where users guess the correct color based on RGB values.',
            },
            {
              title: 'Meskhi 2000',
              description:
                'The first project that is officially placed on the Web and has its own domain, the first experience with a similar official project. I launched this site in 2023-24.',
            },
            {
              title: 'First Train Booking',
              description:
                'The first version of the train ticket booking site. The first complete Web site using API.',
            },
          ],
        }
      : {
          sectionTitle: 'რჩეული პროექტები',
          viewProject: 'ნახე პროექტი',
          projects: [
            {
              title: 'მატარებლის ბილეთების დაჯავშნა',
              description:
                'ბილეთების დაჯავშნის საიტი, სადაც შეგიძლია მარტივად დაჯავშნო, გააუქმო და გადმოწერო ბილეთი. პირველი Angular-ზე აგებული სრული პროექტი.',
            },
            {
              title: 'მოგზაურების სააგენტო',
              description:
                'მოგზაურობის საინფორმაციო საიტი, რომელიც დაფუძნებულია Figma-ს შაბლონზე და ინტერპრეტირებულია ჩემი ხედვით.',
            },
            {
              title: 'კალკულატორი',
              description:
                'მარტივი კალკულატორი HTML და JavaScript-ით, რომელიც ასრულებს არითმეტიკულ ოპერაციებს.',
            },
            {
              title: 'ფერების გამოცნობის თამაში',
              description:
                'გასართობი თამაში, რომელშიც მომხმარებელი უნდა გამოიცნოს ფერი RGB მნიშვნელობებზე დაყრდნობით.',
            },
            {
              title: 'მესხი 2000',
              description:
                'პირველი ოფიციალურად გამოქვეყნებული პროექტი, საკუთარი დომენით. საიტი გამოქვეყნდა 2023-24 წლებში.',
            },
            {
              title: 'პირველი ბილეთების დაჯავშნის ვერსია',
              description:
                'მატარებლის ბილეთების დაჯავშნის პირველი ვერსია, სადაც გამოყენებულია API. პირველი სრული ვებსაიტი.',
            },
          ],
        };
  });

  projects = [
    {
      image: '/img/Screenshot 2025-05-09 011527.png',
      tags: ['Typescript', 'SCSS', 'HTML5', 'API'],
      link: 'https://georgiams.netlify.app/home',
    },
    {
      image: '/img/Screenshot 2025-05-09 011547.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://travel-sk.netlify.app/',
    },
    {
      image: '/img/Screenshot 2025-05-09 011600.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://teal-kangaroo-a77825.netlify.app/',
    },
    {
      image: '/img/Screenshot 2025-05-09 011621.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://tourmaline-sprite-68e5ac.netlify.app/',
    },
    {
      image: '/img/Screenshot 2025-05-09 011632.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://meskhi2000.com/',
    },
    {
      image: '/img/Screenshot 2025-05-09 015807.png',
      tags: ['JavaScript', 'CSS3', 'HTML5', 'API'],
      link: 'https://g-m-s.netlify.app/',
    },
  ];

  ngAfterViewInit(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
