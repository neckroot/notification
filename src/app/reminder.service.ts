import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reminder } from './reminder.model';
import { reminderList } from './mock-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  public reminders$ = new BehaviorSubject<Reminder[]>(reminderList);
  private _router = inject(Router);

  public goToDetails(remindersID: number) {
    this._router.navigate(['/details', remindersID]);
  }
}
