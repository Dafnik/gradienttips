import React from 'preact/compat';
import type { gradientDirection, gradientType } from '@gradienttips/types';

export function CSSUsage({ gradient, direction }: { gradient: gradientType, direction: gradientDirection }) {
  return (
    <div className='flex flex-col gap-2'>
      <div
        className='mockup-code'
        id='css-code'
      >
            <pre>
              <code>
                background: {gradient.colors[0]}; /* fallback for old browsers
                */
              </code>
            </pre>
        <pre>
              <code>
                background: -webkit-linear-gradient(to {direction},{' '}
                {gradient.colors.join(', ')}); /* Chrome 10-25, Safari 5.1-6 */
              </code>
            </pre>
        <pre>
              <code>
                background: linear-gradient(to {direction},{' '}
                {gradient.colors.join(', ')}); /* W3C, IE 10+/ Edge, Firefox
                16+, Chrome 26+, Opera 12+, Safari 7+ */
              </code>
            </pre>
      </div>
      <div>
        <button
          className='btn btn-sm'
          onClick={() =>
            void navigator.clipboard.writeText(
              document.querySelector('#css-code')!.textContent!
            )
          }
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}