import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Reminder} from "./reminder.model";
import {reminderList} from "./mock-data";

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  public reminders$ = new BehaviorSubject<Reminder[]>(reminderList);

}
