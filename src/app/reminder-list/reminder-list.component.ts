import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReminderService } from '../reminder.service';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { tableHeaders } from '../reminder.model';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, MatTableModule, KeyValuePipe],
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
