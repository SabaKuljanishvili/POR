import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  
    currentLang = signal<'en' | 'ka'>('en');

  switchLang() {
    this.currentLang.update(lang => (lang === 'en' ? 'ka' : 'en'));
  }
}
