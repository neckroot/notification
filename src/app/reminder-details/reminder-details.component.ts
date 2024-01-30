import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { ReminderService } from '../reminder.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Reminder, Status, tableHeaders } from '../reminder.model';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-reminder-details',
  templateUrl: './reminder-details.component.html',
  styleUrl: './reminder-details.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatSelectModule,
  ],
})
export class ReminderDetailsComponent implements OnInit {
  private _reminderService = inject(ReminderService);
  private _activatedRoute = inject(ActivatedRoute);
  private _reminderID!: number;
  private _destroyRef = inject(DestroyRef);

  public reminderForm!: FormGroup;
  public reminder!: Reminder;
  public isEditMode = false;
  public headers = tableHeaders;
  public statuses: Status[] = [
    Status.new,
    Status.executed,
    Status.planned,
    Status.expired,
  ];

  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((params) => {
        this._reminderID = +params.get('id')!;
        this.reminder = this._reminderService.getReminder(this._reminderID);

        this.reminderForm = new FormGroup({
          status: new FormControl(this.reminder.status),
          shortDescription: new FormControl(this.reminder.shortDescription),
          fullDescription: new FormControl(this.reminder.fullDescription),
          creationDatetime: new FormControl(
            this.reminder.creationDatetime,
            Validators.pattern(/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/),
          ),
          dueDatetime: new FormControl(
            this.reminder.dueDatetime,
            Validators.pattern(/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/),
          ),
        });

        this.reminderForm.disable();
      });
  }

  public goBack() {
    this._reminderService.goBack();
  }

  public updateReminder() {
    this._reminderService.updateReminder(
      this._reminderID,
      this.reminderForm.value as Reminder,
    );

    this.reminderForm.disable();
    this.isEditMode = !this.isEditMode;
  }

  public toggleEditMode(): void {
    this.reminderForm.enable();
    this.isEditMode = !this.isEditMode;
  }
}
