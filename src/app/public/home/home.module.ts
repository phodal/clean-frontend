import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule, MatSidenavModule
} from '@angular/material';

import { SharedModule } from '../../shared/shared.module';

const HOME_ROUTER_CONFIG: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule.forChild(HOME_ROUTER_CONFIG), MatButtonModule],
  declarations: [HomeComponent]
})
export class HomeModule {
}
