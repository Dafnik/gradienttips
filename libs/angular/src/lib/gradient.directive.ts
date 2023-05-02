import { Directive, ElementRef, inject, Input, OnDestroy } from '@angular/core';
import { gradientDirection, gradientIds } from '@gradienttips/types';
import { getGradient, gradientColorsToBackgroundStyleProps } from '@gradienttips/client';
import { from, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[gradient]',
  standalone: true,
})
export class GradientDirective implements OnDestroy {
  @Input() set id(it: gradientIds | null) {
    if (it) {
      from(getGradient(it))
        .pipe(takeUntil(this.onDestroy))
        .subscribe((gradient) => {
          this._colors = gradient.colors;
          this.setBackground();
        });
    }
  }

  @Input() set colors(it: string[] | null) {
    if (it) {
      this._colors = it;
      this.setBackground();
    }
  }

  _colors?: string[];

  @Input() set direction(it: gradientDirection | null) {
    this._direction = it;
    this.setBackground();
  }

  _direction?: gradientDirection | null;

  nativeElement = inject(ElementRef<HTMLElement>).nativeElement;

  onDestroy = new Subject<boolean>();

  setBackground() {
    if (!this._colors) {
      throw new Error('Id or colors need to be set');
    }

    this.nativeElement.style.background = gradientColorsToBackgroundStyleProps(
      this._colors,
      this._direction
    );
  }

  ngOnDestroy() {
    this.onDestroy.next(true);
  }
}
