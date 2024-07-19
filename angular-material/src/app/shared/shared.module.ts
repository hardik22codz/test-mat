import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculateAgePipe } from './pipe/calculate-age.pipe';

@NgModule({
  declarations : [CalculateAgePipe],
  imports: [
    CommonModule,    
  ],
  exports: [
    CalculateAgePipe
  ],
})
export class SharedModule { }
