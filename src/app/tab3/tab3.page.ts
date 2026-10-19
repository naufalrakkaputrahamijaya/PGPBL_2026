import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleItem, ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  schedule: ScheduleItem = {
    subject: '',
    day: '',
    time: '',
    room: '',
  };

  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly router: Router,
  ) {}

  submitSchedule(): void {
    this.scheduleService.addSchedule({ ...this.schedule });
    this.schedule = { subject: '', day: '', time: '', room: '' };
    void this.router.navigate(['/tabs/tab2']);
  }

}
