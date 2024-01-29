import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderListComponent {

}
