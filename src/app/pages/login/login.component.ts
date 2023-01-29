import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Im expecting a value
  @Input() formTitle: string = 'Hi worldssss!';
  @Input() formSubtitle: string = "";

  // I will emit pinindot event
  @Output() pinindot: EventEmitter<any> = new EventEmitter();

  // I will emit nagtype event
  @Output() nagtype: EventEmitter<any> = new EventEmitter();

  // Im just a plain variable used for ngModel
  userName: string = "";
}