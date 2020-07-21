import { NgModule } from "@angular/core";
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputComponent } from './components/inputs/date-input/date-input.component';

@NgModule({
    declarations: [
        TextInputComponent,
        DateInputComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TextInputComponent,
        DateInputComponent
    ]
})
export class AppCommonModule { }