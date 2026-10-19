import { Injectable } from '@angular/core';

export interface ScheduleItem {
  subject: string;
  day: string;
  time: string;
  room: string;
}

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private readonly storageKey = 'pgpbl-schedule-items';

  private readonly defaultSchedules: ScheduleItem[] = [
    { subject: 'PAI', day: 'Senin', time: '09.00 - 10.40', room: 'C 203 Filsafat' },
    { subject: 'Pancasila', day: 'Senin', time: '11.15 - 12.55', room: 'C 203 Filsafat' },
    { subject: 'PKN', day: 'Senin', time: '13.00 - 14.40', room: 'Daring' },
    { subject: 'PGPBL', day: 'Selasa', time: '11.00 - 13.00', room: 'Lab SIG A' },
    { subject: 'IKK', day: 'Rabu', time: '11.10 - 12.50', room: 'Hall' },
    { subject: 'SDG', day: 'Rabu', time: '13.00 - 16.00', room: 'Lab SIG A' },
    { subject: 'MetoPen', day: 'Kamis', time: '11.10 - 12.50', room: 'Hall' },
    { subject: 'SIG PPK', day: 'Kamis', time: '13.00 - 15.00', room: 'Lab PJ A' },
    { subject: 'B.Indo', day: 'Jumat', time: '07.15 - 08.55', room: 'Poerbatjaraka 203' },
    { subject: 'SIGPL', day: 'Jumat', time: '09.15 - 11.15', room: 'Lab SIG (Asprak)' },
    { subject: 'SIG SDA', day: 'Jumat', time: '13.00 - 15.00', room: 'Lab SIG A' },
  ];

  getSchedules(): ScheduleItem[] {
    const savedSchedules = localStorage.getItem(this.storageKey);

    if (!savedSchedules) {
      return [...this.defaultSchedules];
    }

    try {
      const savedItems = JSON.parse(savedSchedules) as ScheduleItem[];
      const schedules = [...this.defaultSchedules];

      for (const savedItem of savedItems) {
        const alreadyExists = schedules.some((schedule) =>
          schedule.subject === savedItem.subject &&
          schedule.day === savedItem.day &&
          schedule.time === savedItem.time &&
          schedule.room === savedItem.room,
        );

        if (!alreadyExists) {
          schedules.push(savedItem);
        }
      }

      return schedules;
    } catch {
      return [...this.defaultSchedules];
    }
  }

  addSchedule(schedule: ScheduleItem): void {
    const schedules = [...this.getSchedules(), schedule];
    localStorage.setItem(this.storageKey, JSON.stringify(schedules));
  }
}