export const enum Status {
  new = 'Новый',
  executed = 'Исполнен',
  planned = 'Запланирован',
  expired = 'Просрочен',
}

export interface Reminder {
  status: Status;
  shortDescription: string;
  fullDescription: string;
  creationDatetime: string;
  dueDatetime: string;
}

export const tableHeaders = {
  status: 'Статус',
  shortDescription: 'Краткое описание',
  fullDescription: 'Полное описание',
  creationDatetime: 'Дата и время создания',
  dueDatetime: 'Дата и время выполнения',
};
