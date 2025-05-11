import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
   declare lang;

    constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private langService: LanguageService
  ) {
    this.lang = this.langService.currentLang;
  }

  about = computed(() => {
    if (this.lang()) {
      return this.lang() === 'en'
        ? {
            name: 'Saba Kuljanishvili',
            paragraphs: [
              "Hello! I am a frontend developer from Georgia. My story began with self-study, mastering HTML, CSS, JavaScript, React, and TypeScript, after which I achieved my first successful project—'Meskhi2000' which was officially added to social networks with its own Domain.",
              "To refine my skills, I enrolled at IT Academy Step, completing comprehensive courses in HTML, CSS, and JavaScript, where I built a complete professional website from scratch. After that, I started learning Angular 19 (standalone: true), and I made a site with API Now I can build a site with API in Angular.",
              "I specialize in creating responsive, accessible, and performant web applications with great attention to detail and user comfort."
            ],
            techStack: 'Tech Stack',
            aboutMe: 'About Me',
          }
        : {
            name: 'საბა ყულჯანიშვილი',
            paragraphs: [
              "გამარჯობა! მე ვარ frontend დეველოპერი საქართველოდან. ჩემი ისტორია დაიწყო თვითსწავლით, HTML-ის, CSS-ის, JavaScript-ის, React-ისა და TypeScript-ის დაუფლებით, რის შემდეგაც განვახორციელე ჩემი პირველი წარმატებული პროექტი — „Meskhi2000“, რომელიც ოფიციალურად დაემატა სოციალურ ქსელებს საკუთარი დომენით.",
              "ჩემი უნარების დასახვეწად, ჩავაბარე IT Academy Step-ში, გავიარე HTML-ის, CSS-ის და JavaScript-ის ყოვლისმომცველი კურსები, სადაც ნულიდან შევქმენი სრული პროფესიონალური ვებსაიტი. ამის შემდეგ დავიწყე Angular 19-ის (Standalone: true) შესწავლა და შევქმენი საიტი API-ით. ახლა უკვე შემიძლია საიტის შექმნა Angular-ში API-ით.",
              "სპეციალიზირებული ვარ რესპონსიული, ხელმისაწვდომი და ეფექტური ვებ აპლიკაციების შექმნაში, დეტალებსა და მომხმარებლის კომფორტზე დიდი ყურადღებით."
            ],
              techStack: 'ტექნოლოგიები',
              aboutMe: 'ჩემს შესახებ',
          };
    }
    return { name: '', paragraphs: [] };
  });
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
    { name: 'Angular', level: 80, animated: false },
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
