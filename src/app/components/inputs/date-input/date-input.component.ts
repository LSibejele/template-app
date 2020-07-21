import { Component, Input } from '@angular/core';
import { InputBase } from '../input-base';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent extends InputBase {
  constructor() {
    super();
  }

  @Input()
  minAllowedDate: Date;

  @Input()
  maxAllowedDate: Date;
}
