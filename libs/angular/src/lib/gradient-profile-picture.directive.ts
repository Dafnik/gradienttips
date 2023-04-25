import { Directive, Input } from '@angular/core';
import { GradientDirective } from './gradient.directive';

@Directive({
  selector: '[gradientProfilePicture]',
  standalone: true
})
export class GradientProfilePictureDirective extends GradientDirective {
  @Input() set show(it: boolean | 'true' | 'false') {
    this._show = !!(it === 'true' || it);
  }

  _show = false;

  override setBackground() {
    if (!this._show) {
      return;
    }

    super.setBackground();
  }
}