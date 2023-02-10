import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quems_ticketing-station-app';
  formTitleData = 'HELLO MAMA!';
  increasingNumber = 0;
  userName = "N/A";

  ngOnInit() {
    this.changeName('Ticket Station Login');
  }

  changeName(name: string) {
    this.formTitleData = `${name}`;
  }

  increaseNumber() {
    this.increasingNumber++;
  }

  changeYourNameText(name: string) {
    this.userName = name;
  }
}