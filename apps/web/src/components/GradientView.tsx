import React from 'preact/compat';
import { Gradient } from '@gradienttips/react';
import { GradientColorList } from './GradientColorList';
import { GradientUsage } from './GradientUsage';
import { useState } from 'preact/hooks';
import type { gradientDirection, gradientType } from '@gradienttips/types';

export function GradientView({ gradient }: { gradient: gradientType }) {
  const [direction, setDirection] = useState<gradientDirection>('right');

  return (
    <div class="flex flex-col items-center lg:items-start lg:flex-row gap-16">
      <Gradient
        colors={gradient.colors}
        class="flex-none rounded-lg w-full h-96 md:w-96 "
        direction={direction}
      />
      <div class="col-span-2">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col md:flex-row items-start md:items-end text-4xl gap-4">
            <div>{gradient.name}</div>
            <div class="tooltip tooltip-right text-xl" data-tip="Copy id">
              <button
                className="hover:underline"
                onClick={() => void navigator.clipboard.writeText(gradient.id)}
              >
                #{gradient.id}
              </button>
            </div>
          </div>

          <GradientColorList colors={gradient.colors} />

          <div class="flex flex-col gap-2">
            <span class="text-lg">Direction</span>
            <div class="btn-group">
              <button
                className={`btn btn-sm ${
                  direction === 'right' ? 'btn-active' : ''
                }`}
                onClick={() => setDirection('right')}
              >
                Right
              </button>
              <button
                className={`btn btn-sm ${
                  direction === 'bottom' ? 'btn-active' : ''
                }`}
                onClick={() => setDirection('bottom')}
              >
                Bottom
              </button>
              <button
                className={`btn btn-sm ${
                  direction === 'left' ? 'btn-active' : ''
                }`}
                onClick={() => setDirection('left')}
              >
                Left
              </button>
              <button
                className={`btn btn-sm ${
                  direction === 'top' ? 'btn-active' : ''
                }`}
                onClick={() => setDirection('top')}
              >
                Top
              </button>
            </div>
          </div>

          <GradientUsage gradient={gradient} direction={direction} />
        </div>
      </div>
    </div>
  );
}
