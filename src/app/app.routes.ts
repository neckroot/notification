import { Routes } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderDetailsComponent } from './reminder-details/reminder-details.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ReminderListComponent,
    title: 'Список напоминаний',
  },
  {
    path: 'details/:id',
    component: ReminderDetailsComponent,
    title: 'Детали напоминания',
  },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];
