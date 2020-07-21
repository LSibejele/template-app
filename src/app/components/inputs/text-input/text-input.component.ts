import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InputBase } from '../input-base';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-input',
  providers: [{ provide: InputBase, useExisting: TextInputComponent }],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends InputBase implements OnInit, OnDestroy {
  subscription: Subscription;

  @Input()
  clearable = false;

  @Input()
  type = 'text';

  @Input()
  min: number;

  @Input()
  max: number;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.type === 'number') {
      if (this.min || this.max) {
        this.subscription = this.control.valueChanges.subscribe((value: number) => {
          let newValue;
          if (typeof value !== 'number') {
            newValue = +value;
          }
          if (this.min) {
            newValue = Math.max(value, this.min);
          }

          if (this.max) {
            newValue = Math.min(value, this.max);
          }
          this.control.setValue(newValue, { emitEvent: false });
        });
      }
    }
  }

  onClear() {
    this.control.setValue('');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
