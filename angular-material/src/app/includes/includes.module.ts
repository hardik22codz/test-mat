import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IncludesRoutingModule } from './includes-routing.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, IncludesRoutingModule],
  exports: [FooterComponent, HeaderComponent],
})
export class IncludesModule {}
