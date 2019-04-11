import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material';

const HOME_ROUTER_CONFIG: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(HOME_ROUTER_CONFIG), MatButtonModule],
  declarations: [HomeComponent],
})
export class HomeModule {
}
