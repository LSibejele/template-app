import { Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

export class InputBase {
    @Input()
    control: FormControl = new FormControl();

    @Input()
    removable = false;

    @Output()
    remove = new Subject();

    @Input()
    placeholder: string;

    @Input()
    hint: string;

    onRemove() {
        this.remove.next();
    }
}
