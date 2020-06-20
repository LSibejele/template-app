import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatTableModule,
        MatMenuModule,
        MatListModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatToolbarModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatTableModule,
        MatMenuModule,
        MatListModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatToolbarModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
