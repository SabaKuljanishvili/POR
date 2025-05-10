import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
    constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}
  about = {
    name: 'Saba Kuljanishvili',
    paragraphs: [
      "Hello! I'm a passionate frontend developer from Georgia with expertise in modern web technologies. My journey began with self-study, mastering HTML, CSS, JavaScript, React, and TypeScript, leading to my first successful project - a social network website.",
      "To refine my skills, I enrolled at IT Academy Step, completing comprehensive courses in HTML, CSS, and JavaScript, where I built a complete professional website from scratch. Now I can build Web site With API in Angular.",
      "I specialize in creating responsive, accessible, and performant web applications with great attention to detail and user comfort."
    ]
  };

  techStack = [
    { name: 'HTML5', iconClass: 'fab fa-html5' },
    { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
    { name: 'JavaScript', iconClass: 'fab fa-js' },
    { name: 'Angular', iconClass: 'fab fa-angular' },
    { name: 'TypeScript', iconClass: 'fas fa-code' },
    { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
    { name: 'Git', iconClass: 'fab fa-git-alt' },
    { name: 'GitHub', iconClass: 'fab fa-github' },
    { name: 'GitLab', iconClass: 'fab fa-gitlab' },
    { name: 'Postman', iconClass: 'fas fa-server' },
    { name: 'Figma', iconClass: 'fab fa-figma' },
    ];

  skills = [
    { name: 'HTML5', level: 95, animated: false },
    { name: 'CSS3', level: 90, animated: false },
    { name: 'JavaScript', level: 85, animated: false },
    { name: 'React', level: 80, animated: false },
    { name: 'TypeScript', level: 75, animated: false }
  ];

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'about') {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 0);
      }
    });

    this.initRevealAnimations();
    this.initSkillProgressObserver();
  }

  private initRevealAnimations(): void {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  private initSkillProgressObserver(): void {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(skillProgressBars).indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            this.skills[index].animated = true;
          }
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillProgressBars.forEach(el => skillObserver.observe(el));
  }
}
