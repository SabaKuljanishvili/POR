import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alertState = new BehaviorSubject<{ title: string, message: string, visible: boolean }>({
    title: '',
    message: '',
    visible: false
  });

  alertState$ = this.alertState.asObservable();

  showAlert(title: string, message: string) {
    this.alertState.next({ title, message, visible: true });
  }

  closeAlert() {
    this.alertState.next({ ...this.alertState.value, visible: false });
  }
}
