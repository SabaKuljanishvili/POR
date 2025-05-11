import { Component, computed, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 private langService = inject(LanguageService);
  lang = this.langService.currentLang;

  switchLanguage() {
    this.langService.switchLang();
  }

  texts = computed(() => {
    return this.lang() === 'en'
      ? {
          title: 'Saba Kuljanishvili',
          subtitle: 'Georgian Web Developer',
          viewWork: 'View My Work',
          contact: 'Contact Me',
          switchLabel: 'ქარ'
        }
      : {
          title: 'საბა ყულჯანიშვილი',
          subtitle: 'ქართველი ვებდეველოპერი',
          viewWork: 'ნახე ჩემი ნამუშევრები',
          contact: 'დამიკავშირდი',
          switchLabel: 'Eng'
        };
  });



  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private particleCount: number = window.innerWidth < 768 ? 30 : 60;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.canvasRef.nativeElement));
    }
  }

  private connectParticles() {
    const maxDistance = 150;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of this.particles) {
      p.update(canvas);
      p.draw(this.ctx);
    }

    this.connectParticles();
    requestAnimationFrame(this.animate);
  };

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
    this.initParticles();
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

}
