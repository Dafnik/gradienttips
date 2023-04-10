import React from 'preact/compat';
import { useState } from 'preact/hooks';
import type { gradientDirection, gradientType } from '@gradienttips/types';

export function GradientUsage({
  gradient,
  direction,
}: {
  gradient: gradientType;
  direction: gradientDirection;
}) {
  const [selectedTab, setSelectedTab] = useState<'CSS' | 'REACT' | 'ANGULAR'>(
    'CSS'
  );

  const [showRoundedExample, setShowRoundedExample] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'CSS' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('CSS')}
        >
          CSS
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'REACT' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('REACT')}
        >
          React
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'ANGULAR' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('ANGULAR')}
        >
          Angular
        </a>
      </div>
      {selectedTab === 'CSS' && (
        <div className="flex flex-col gap-2">
          <div
            className="mockup-code max-w-sm md:max-w-5xl w-full"
            id="css-code"
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
              className="btn btn-sm"
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
      )}
      {selectedTab === 'REACT' && (
        <div className="flex flex-col gap-8">
          <div class="form-control">
            <label className="label cursor-pointer">
              <span class="label-text">Show tailwind rounded example</span>
              <input
                type="checkbox"
                checked={showRoundedExample}
                className="checkbox checkbox-primary"
                onChange={() => setShowRoundedExample(!showRoundedExample)}
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Component usage</span>
            <div
              className="mockup-code max-w-sm md:max-w-5xl w-full"
              id="react-code"
            >
              <pre data-prefix="1">
                <code>{`import { Gradient } from '@gradienttips/react';`}</code>
              </pre>
              <pre data-prefix="2">
                <code></code>
              </pre>
              <pre data-prefix="3">
                <code>{`export function GradientExample() {`}</code>
              </pre>
              <pre data-prefix="4">
                <code> return (</code>
              </pre>
              <pre data-prefix="5">
                <code>
                  {' '}
                  {`<Gradient id='${gradient.id}' direction='${direction}'${
                    showRoundedExample ? ` className='rounded-md'` : ''
                  }>`}
                </code>
              </pre>
              <pre data-prefix="6">
                <code> ...</code>
              </pre>
              <pre data-prefix="7">
                <code> {`</Gradient>`}</code>
              </pre>
              <pre data-prefix="8">
                <code> );</code>
              </pre>
              <pre data-prefix="9">
                <code>{'}'}</code>
              </pre>
            </div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    document.querySelector('#react-code')!.textContent!
                  )
                }
              >
                Copy to clipboard
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xl">Background style usage</span>
            <div
              className="mockup-code max-w-sm md:max-w-5xl w-full"
              id="react-code-2"
            >
              <pre data-prefix="1">
                <code>{`import { getGradient, gradientColorsToBackgroundStyleProps } from '@gradienttips/react';`}</code>
              </pre>
              <pre data-prefix="2">
                <code></code>
              </pre>
              <pre data-prefix="3">
                <code>{`export function GradientExample() {`}</code>
              </pre>
              <pre data-prefix="4">
                <code> const gradient = getGradient('{gradient.id}');</code>
              </pre>
              <pre data-prefix="5">
                <code> return (</code>
              </pre>
              <pre data-prefix="6">
                <code>
                  {' '}
                  {`<div style={{background: gradientColorsToBackgroundStyleProps(gradient.colors, '${direction}')}}${
                    showRoundedExample ? ` className='rounded-md'` : ''
                  }>`}
                </code>
              </pre>
              <pre data-prefix="7">
                <code> ...</code>
              </pre>
              <pre data-prefix="8">
                <code> {`</div>`}</code>
              </pre>
              <pre data-prefix="9">
                <code> );</code>
              </pre>
              <pre data-prefix="10">
                <code>{'}'}</code>
              </pre>
            </div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    document.querySelector('#react-code-2')!.textContent!
                  )
                }
              >
                Copy to clipboard
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Profile picture usage</span>
            <div
              className="mockup-code max-w-sm md:max-w-5xl w-full"
              id="react-code-2"
            >
              <pre data-prefix="1">
                <code>{`import { ProfilePicture } from '@gradienttips/react';`}</code>
              </pre>
              <pre data-prefix="2">
                <code></code>
              </pre>
              <pre data-prefix="3">
                <code>{`export function ProfilePictureGradientExample() {`}</code>
              </pre>
              <pre data-prefix="4">
                <code> const gradient = getGradient();</code>
              </pre>
              <pre data-prefix="5">
                <code> return (</code>
              </pre>
              <pre data-prefix="5">
                <code>
                  {' '}
                  {`<ProfilePicture id='${
                    gradient.id
                  }' imageUrl='https://exampleUrl' direction='${direction}'${
                    showRoundedExample ? ` className='rounded-md'` : ''
                  } />`}
                </code>
              </pre>
              <pre data-prefix="6">
                <code> );</code>
              </pre>
              <pre data-prefix="7">
                <code>{'}'}</code>
              </pre>
            </div>
            <div>
              <button
                className="btn btn-sm"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    document.querySelector('#react-code-2')!.textContent!
                  )
                }
              >
                Copy to clipboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
