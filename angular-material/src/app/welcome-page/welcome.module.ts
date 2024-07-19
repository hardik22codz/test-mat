import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../modules/mat/mat.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomePageComponent } from './welcome-page.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
    WelcomePageComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
    MatModule
  ],
  providers: []
})
export class WelcomeModule {}
