import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reminder-details',
  standalone: true,
  imports: [],
  templateUrl: './reminder-details.component.html',
  styleUrl: './reminder-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderDetailsComponent {

}
