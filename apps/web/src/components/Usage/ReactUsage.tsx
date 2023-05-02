import React from 'preact/compat';
import { useState } from 'preact/hooks';
import type { gradientDirection, gradientType } from '@gradienttips/types';

const reactComponentUsageInfo = [
  {
    input: 'id',
    type: 'gradientIds | null | undefined | string',
    description: 'Id of gradient, colors or id must be defined',
    default: 'undefined',
  },
  {
    input: 'colors',
    type: 'string[] | null | undefined',
    description: 'Colors array of gradient, colors id must be defined',
    default: 'undefined',
  },
  {
    input: 'direction',
    type: `'right' | 'bottom' | 'left' | 'top'`,
    description: 'Direction the gradient should run from',
    default: 'right',
  },
  {
    input: 'height',
    type: 'string | null | undefined',
    description: `Height of the gradient, e.g.: '50px', '10rem'`,
    default: 'undefined',
  },
  {
    input: 'width',
    type: 'string | null | undefined',
    description: `Width of the gradient, e.g.: '50px', '10rem'`,
    default: 'undefined',
  },
];
const reactBackgroundStyleUsageInfo = [
  {
    input: 'colors',
    type: 'string[] | null | undefined',
    description: 'Colors array of gradient, colors id must be defined',
    default: 'undefined',
  },
  {
    input: 'direction',
    type: `'right' | 'bottom' | 'left' | 'top'`,
    description: 'Direction the gradient should run from',
    default: 'right',
  },
];

const reactProfilePictureUsageInfo = [
  {
    input: 'id',
    type: 'gradientIds | null | undefined | string',
    description:
      'Fallback id of gradient if imageUrl is undefined, colors or id must be defined',
    default: 'undefined',
  },
  {
    input: 'colors',
    type: 'string[] | null | undefined',
    description:
      'Fallback colors array of gradient if imageUrl is undefined, colors id must be defined',
    default: 'undefined',
  },
  {
    input: 'direction',
    type: `'right' | 'bottom' | 'left' | 'top'`,
    description: 'Direction the gradient should run from',
    default: 'right',
  },
  {
    input: 'height',
    type: 'string | null | undefined',
    description: `Height of the gradient, e.g.: '50px', '10rem'`,
    default: 'undefined',
  },
  {
    input: 'width',
    type: 'string | null | undefined',
    description: `Width of the gradient, e.g.: '50px', '10rem'`,
    default: 'undefined',
  },
  {
    input: 'imageUrl',
    type: 'string | null | undefined',
    description: 'Url of profile picture to display',
    default: 'undefined',
  },
  {
    input: 'alt',
    type: 'string | null | undefined',
    description: `Alt text of image`,
    default: 'Profile picture',
  },
];

export function ReactUsage({
  gradient,
  direction,
}: {
  gradient: gradientType;
  direction: gradientDirection;
}) {
  const [showRoundedExample, setShowRoundedExample] = useState(false);

  return (
    <div className="flex flex-col gap-12">
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
        <div className="mockup-code " id="react-code">
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
              {'   '}
              {`<Gradient id='${gradient.id}' direction='${direction}'${
                showRoundedExample ? ` className='rounded-md'` : ''
              }>`}
            </code>
          </pre>
          <pre data-prefix="6">
            <code> {'  ...'}</code>
          </pre>
          <pre data-prefix="7">
            <code>{`   </Gradient>`}</code>
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
        <div>
          <div class="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Inputs</th>
                  <th>Type</th>
                  <th>Descriptions</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                {reactComponentUsageInfo.map((info) => (
                  <tr>
                    <td>{info.input}</td>
                    <td>
                      <code>{info.type}</code>
                    </td>
                    <td>{info.description}</td>
                    <td>
                      <code>{info.default}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xl">Background style usage</span>
        <span className="text-lg">Function</span>
        <div className="mockup-code " id="react-code-2">
          <pre data-prefix="1">
            <code>{`import { gradientColorsToBackgroundStyleProps } from '@gradienttips/client';`}</code>
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
              {'   '}
              {`<div style={{background: gradientColorsToBackgroundStyleProps(['${gradient.colors.join(
                `', '`
              )}'], '${direction}')}}${
                showRoundedExample ? ` className='rounded-md'` : ''
              }>`}
            </code>
          </pre>
          <pre data-prefix="6">
            <code>{'   ...'}</code>
          </pre>
          <pre data-prefix="7">
            <code>{`   </div>`}</code>
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
                document.querySelector('#react-code-2')!.textContent!
              )
            }
          >
            Copy to clipboard
          </button>
        </div>
        <div>
          <div class="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Inputs</th>
                  <th>Type</th>
                  <th>Descriptions</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                {reactBackgroundStyleUsageInfo.map((info) => (
                  <tr>
                    <td>{info.input}</td>
                    <td>
                      <code>{info.type}</code>
                    </td>
                    <td>{info.description}</td>
                    <td>
                      <code>{info.default}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <span className="text-lg mt-2">CSS</span>
        <div className="mockup-code " id="react-code-css">
          <pre data-prefix="1">
            <code>
              {`<div style={{background: 'linear-gradient(to ${direction}, ${gradient.colors.join(
                `, `
              )})'}}${showRoundedExample ? ` className='rounded-md'` : ''}>`}
            </code>
          </pre>
          <pre data-prefix="2">
            <code>...</code>
          </pre>
          <pre data-prefix="3">
            <code>{`</div>`}</code>
          </pre>
        </div>
        <div>
          <button
            className="btn btn-sm"
            onClick={() =>
              void navigator.clipboard.writeText(
                document.querySelector('#react-code-css')!.textContent!
              )
            }
          >
            Copy to clipboard
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xl">Profile picture usage</span>
        <div className="mockup-code " id="react-code-2">
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
            <code> return (</code>
          </pre>
          <pre data-prefix="5">
            <code>
              {'   '}
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
        <div>
          <div class="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Inputs</th>
                  <th>Type</th>
                  <th>Descriptions</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                {reactProfilePictureUsageInfo.map((info) => (
                  <tr>
                    <td>{info.input}</td>
                    <td>
                      <code>{info.type}</code>
                    </td>
                    <td>{info.description}</td>
                    <td>
                      <code>{info.default}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
