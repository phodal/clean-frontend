import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ThemePickerModule } from '../../utils/theme-picker';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule,
    CommonModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
})
export class NavBarModule {}
