import React from 'preact/compat';

export function GradientColorList({ colors }: { colors: string[] }) {
  return (
    <div class="flex flex-wrap gap-2 items-center">
      {colors.map((color, index) => (
        <>
          <div class="tooltip tooltip-bottom" data-tip="Copy to clipboard">
            <button onClick={() => void navigator.clipboard.writeText(color)}>
              <kbd className="kbd hover:underline hover:cursor-pointer">
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                  }}
                  className="rounded-md me-2"
                ></div>
                {color}
              </kbd>
            </button>
          </div>
          {index < colors.length - 1 && <b className="ms-1">{`>`}︎</b>}︎
        </>
      ))}
    </div>
  );
}
