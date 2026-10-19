import { Component } from '@angular/core';
import { ScheduleItem, ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  readonly days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  schedules: ScheduleItem[];

  constructor(private readonly scheduleService: ScheduleService) {
    this.schedules = this.scheduleService.getSchedules();
  }

  ionViewWillEnter(): void {
    this.schedules = this.scheduleService.getSchedules();
  }

  schedulesForDay(day: string): ScheduleItem[] {
    return this.schedules.filter((schedule) => schedule.day.toLowerCase() === day.toLowerCase());
  }

}
