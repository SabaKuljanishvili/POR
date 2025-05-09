import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  title = '';
  message = '';
  visible = false;

  constructor(private alertService: AlertService) {
    this.alertService.alertState$.subscribe(state => {
      this.title = state.title;
      this.message = state.message;
      this.visible = state.visible;
    });
  }

  close() {
    this.alertService.closeAlert();
  }
}
