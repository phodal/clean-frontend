import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavBarModule } from './components/navbar/navbar.module';
import { ThemePickerModule } from './utils/theme-picker';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ThemePickerModule,
    MatButtonModule,
    NavBarModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemePickerModule,
    NavBarModule,
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
