import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reminder } from './reminder.model';
import { reminderList } from './mock-data';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  public reminders$ = new BehaviorSubject<Reminder[]>(reminderList);
  private _router = inject(Router);
  private _location = inject(Location);

  public goToDetails(remindersID: number) {
    this._router.navigate(['/details', remindersID]);
  }

  public goBack() {
    this._location.back();
  }

  public getReminder(id: number) {
    return this.reminders$.value[id];
  }

  public updateReminder(id: number, newReminder: Reminder) {
    this.reminders$.next(this.reminders$.value.toSpliced(id, 1, newReminder));
  }
}
