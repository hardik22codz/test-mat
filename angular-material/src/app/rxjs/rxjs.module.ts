import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../modules/mat/mat.module';
import { SharedModule } from '../shared/shared.module';
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs.routing';

@NgModule({
  declarations: [
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RxjsRoutingModule,
    MatModule
  ],
  providers: []
})
export class RxjsModule { }
