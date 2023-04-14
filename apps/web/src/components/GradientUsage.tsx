import React, { useEffect } from 'preact/compat';
import { useState } from 'preact/hooks';
import type { gradientDirection, gradientType } from '@gradienttips/types';

type tabs = 'CSS' | 'REACT' | 'ANGULAR' | 'API';

export function GradientUsage({
  gradient,
  direction,
}: {
  gradient: gradientType;
  direction: gradientDirection;
}) {
  const [selectedTab, pSetSelectedTab] = useState<tabs>('CSS');

  const setSelectedTab = (tab: tabs) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('usage', tab);
    const newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
    pSetSelectedTab(tab);
  };

  useEffect(() => {
    const urlTab = new URLSearchParams(window.location.search).get(
      'usage'
    ) as tabs | null;

    if (urlTab) {
      setSelectedTab(urlTab);
    }
  }, []);

  const [showRoundedExample, setShowRoundedExample] = useState(false);
  const [showAPIJqExample, setShowAPIJqExample] = useState(false);

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
            selectedTab === 'API' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('API')}
        >
          API
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
            className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
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
      {selectedTab === 'API' && (
        <div className="flex flex-col gap-8">
          <div>
            <button
              className="btn btn-sm btn-primary mb-4"
              onClick={() =>
                void navigator.clipboard.writeText(
                  `https://gradient.tips/api/v1/g/${gradient.id}.json`
                )
              }
            >
              Copy url to clipboard
            </button>
            <div class="form-control">
              <label className="label cursor-pointer">
                <span class="label-text">
                  Prettify output with <code>jq</code> utility
                </span>
                <input
                  type="checkbox"
                  checked={showAPIJqExample}
                  className="checkbox checkbox-primary"
                  onChange={() => setShowAPIJqExample(!showAPIJqExample)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">CURL usage</span>
            <div
              className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
              id="api-curl-code"
            >
              <pre>
                <code>
                  curl -s -H "Content-Type: application/json"
                  https://gradient.tips/api/v1/g/{gradient.id}.json
                  {showAPIJqExample ? ' | jq' : ''}
                </code>
              </pre>
            </div>
            <div class="flex flex-col max-w-xs sm:max-w-sm md:flex-row gap-2">
              <button
                className="btn btn-sm"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    document.querySelector('#api-curl-code')!.textContent!
                  )
                }
              >
                Copy to clipboard
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">wget usage</span>
            <div
              className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
              id="api-wget-code"
            >
              <pre>
                <code>
                  wget -qO- https://gradient.tips/api/v1/g/{gradient.id}.json
                  {showAPIJqExample ? ' | jq' : ''}
                </code>
              </pre>
            </div>
            <div class="flex flex-col max-w-xs sm:max-w-sm md:flex-row gap-2">
              <button
                className="btn btn-sm"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    document.querySelector('#api-wget-code')!.textContent!
                  )
                }
              >
                Copy to clipboard
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Example output</span>
            {!showAPIJqExample && (
              <div
                className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
                id="api-response-code"
              >
                <pre>
                  <code>{`{"id":"${gradient.id}","name":"${
                    gradient.name
                  }","colors":[${gradient.colors.join(', ')}]}%`}</code>
                </pre>
              </div>
            )}

            {showAPIJqExample && (
              <div
                className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
                id="api-response-code"
              >
                <pre>
                  <code>{`{`}</code>
                </pre>
                <pre>
                  <code>{`  "id": "${gradient.id}",`}</code>
                </pre>
                <pre>
                  <code>{`  "name": "${gradient.name}",`}</code>
                </pre>
                <pre>
                  <code>{`  "colors": [`}</code>
                </pre>
                {gradient.colors.map((color, index) => (
                  <pre>
                    <code>{`    "${color}"${
                      index < gradient.colors.length - 1 ? ',' : ''
                    }`}</code>
                  </pre>
                ))}
                <pre>
                  <code>{`  ]`}</code>
                </pre>
                <pre>
                  <code>{`}`}</code>
                </pre>
              </div>
            )}
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
              className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
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
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xl">Background style usage</span>
            <div
              className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
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
                  {'   '}
                  {`<div style={{background: gradientColorsToBackgroundStyleProps(gradient.colors, '${direction}')}}${
                    showRoundedExample ? ` className='rounded-md'` : ''
                  }>`}
                </code>
              </pre>
              <pre data-prefix="7">
                <code>{'   ...'}</code>
              </pre>
              <pre data-prefix="8">
                <code>{`   </div>`}</code>
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
              className="mockup-code max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl"
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
          </div>
        </div>
      )}
    </div>
  );
}
