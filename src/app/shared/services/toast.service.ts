import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'danger';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private nextId = 0;

  private toastsSubject = new BehaviorSubject<Toast[]>([]);

  toasts$ = this.toastsSubject.asObservable();

  show(message: string, type: 'success' | 'danger' = 'success'): void {
    const id = ++this.nextId;
    this.toastsSubject.next([...this.toastsSubject.getValue(), { id, message, type }]);
    setTimeout(() => this.dismiss(id), 3000);
  }

  dismiss(id: number): void {
    this.toastsSubject.next(this.toastsSubject.getValue().filter(t => t.id !== id));
  }

}
