import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  _MatMenuDirectivesModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
