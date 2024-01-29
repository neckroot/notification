import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReminderService } from '../reminder.service';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { tableHeaders } from '../reminder.model';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, KeyValuePipe],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReminderListComponent {
  private _reminderService = inject(ReminderService);

  public reminders$ = this._reminderService.reminders$;
  public readonly tableHeaders = tableHeaders;
  public readonly headers = [
    'shortDescription',
    'fullDescription',
    'creationDatetime',
    'dueDatetime',
    'status',
  ];

  public goToDetails(remindersID: number) {
    this._reminderService.goToDetails(remindersID);
  }
}
