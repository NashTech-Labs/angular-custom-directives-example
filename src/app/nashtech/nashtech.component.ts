import { Component } from '@angular/core';

@Component({
  selector: 'app-nashtech',
  templateUrl: './nashtech.component.html',
  styleUrls: ['./nashtech.component.css']
})

export class NashtechComponent {

  getNashTech() {
    window.open('https://www.nashtechglobal.com', '_blank');
  }

}

