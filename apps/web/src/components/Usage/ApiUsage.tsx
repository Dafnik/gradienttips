import React from 'preact/compat';
import type { gradientType } from '@gradienttips/types';
import { useState } from 'preact/hooks';

const apiUrl = 'https://gradient.tips/api/v1/g/';
export function ApiUsage({ gradient }: { gradient: gradientType }) {
  const [showAPIJqExample, setShowAPIJqExample] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-xl">API url</span>
        <div className="mockup-code" id="api-url-code">
          <pre>
            <code>
              {apiUrl}
              {gradient.id}.json
            </code>
          </pre>
        </div>
        <div class="flex flex-col max-w-xs sm:max-w-sm md:flex-row gap-2">
          <button
            className="btn btn-sm"
            onClick={() =>
              void navigator.clipboard.writeText(
                document.querySelector('#api-url-code')!.textContent!
              )
            }
          >
            Copy to clipboard
          </button>
        </div>
      </div>
      <div className="divider" />
      <div>
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
        <span className="text-xl">curl usage</span>
        <div className="mockup-code " id="api-curl-code">
          <pre>
            <code>
              curl -s -H "Content-Type: application/json"
              {` ${apiUrl}`}
              {gradient.id}.json
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
        <div className="mockup-code " id="api-wget-code">
          <pre>
            <code>
              wget -qO- {apiUrl}
              {gradient.id}.json
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
          <div className="mockup-code " id="api-response-code">
            <pre>
              <code>{`{"id":"${gradient.id}","name":"${
                gradient.name
              }","colors":[${gradient.colors.join(', ')}]}%`}</code>
            </pre>
          </div>
        )}

        {showAPIJqExample && (
          <div className="mockup-code " id="api-response-code">
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
  );
}
