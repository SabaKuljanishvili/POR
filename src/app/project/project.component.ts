import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = [
    {
      title: 'Train Ticket Booking',
      description: 'A train ticket booking site where you can easily book, cancel, and download your own tickets. The first complete website using Angular',
      image: '/img/Screenshot 2025-05-09 011527.png', 
      tags: ['Typescript', 'SCSS', 'HTML5', 'API'],
      link: 'https://georgiams.netlify.app/home'
    },
    {
      title: 'Traveling Agency',
      description: 'A travel information site using the Figma template, with some places modified by my interpretation.',
      image: '/img/Screenshot 2025-05-09 011547.png',
      tags: ['TypeScript', 'Chart.js', 'Firebase'],
      link: 'https://travel-sk.netlify.app/'
    },
    {
      title: 'Calculator',
      description: 'A simple calculator application built with JS and Html5, featuring basic arithmetic operations.',
      image: '/img/Screenshot 2025-05-09 011600.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://teal-kangaroo-a77825.netlify.app/'
    },
    {
      title: 'Color guessing game',
      description: 'A fun color guessing game where users guess the correct color based on RGB values.',
      image: '/img/Screenshot 2025-05-09 011621.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://tourmaline-sprite-68e5ac.netlify.app/'
    },
    {
      title: 'Meskhi 2000',
      description: 'The first project that is officially placed on the Web and has its own domain, the first experience with a similar official project. I launched this site in 2023-24.',
      image: '/img/Screenshot 2025-05-09 011632.png',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://meskhi2000.com/'
    },
    {
      title: 'First Train Booking',
      description: 'The first version of the train ticket booking site. The first complete Web site using APi',
      image: '/img/Screenshot 2025-05-09 015807.png',
      tags: ['JavaScript', 'CSS3', 'HTML5', 'API'],
      link: 'https://g-m-s.netlify.app/'
    }
  ];
}
