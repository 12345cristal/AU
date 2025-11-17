import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private theme: 'light' | 'dark' = 'light';

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    this.theme = saved || 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  isDark() {
    return this.theme === 'dark';
  }
}
