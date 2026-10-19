import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
  standalone: false,
})
export class SplashscreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // Bagian ini diubah menjadi 'login'
      window.location.href = 'login';
    }, 2000);
  }

}