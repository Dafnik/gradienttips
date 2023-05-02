import { NgModule } from '@angular/core';
import { GradientDirective } from './gradient.directive';

@NgModule({
  imports: [GradientDirective],
  exports: [GradientDirective],
})
export class GradientModule {}
