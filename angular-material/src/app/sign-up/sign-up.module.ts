import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../modules/mat/mat.module';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing';

@NgModule({
  declarations: [
    SignUpComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    MatModule
  ],
  providers: []
})
export class SignUpModule {}
