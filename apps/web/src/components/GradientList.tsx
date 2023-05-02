import React, { useMemo } from 'preact/compat';
import { getGradients } from '@gradienttips/data';
import { useState } from 'preact/hooks';
import { averageHexColors, isHexColorLight } from '@gradienttips/common';
import { Gradient } from '@gradienttips/react';
import './gradientbox.css';
// @ts-ignore
import * as ntc from './ntc.js';

const pureGradients = getGradients().map((g) => {
  const averageHexColor = averageHexColors(g.colors);
  const averageHexColorNtc = ntc.ntc.name(averageHexColor);
  const gradient = {
    ...g,
    color: averageHexColor,
    isLight: isHexColorLight(averageHexColor),
    colorName: averageHexColorNtc[1] as string,
    colorShade: averageHexColorNtc[3] as string,
    colors: g.colors.map((color) => {
      const colorNtc = ntc.ntc.name(color);
      return {
        color: color,
        colorName: colorNtc[1] as string,
        colorShade: colorNtc[3] as string,
      };
    }),
  };
  return gradient;
});

export function GradientList() {
  const [search, setSearch] = useState('');

  const gradients = useMemo(() => {
    return pureGradients.filter((gradient) => {
      const lSearch = search.trim().toLowerCase();
      if (
        gradient.id.trim().toLowerCase().includes(lSearch) ||
        gradient.name.trim().toLowerCase().includes(lSearch) ||
        gradient.colorName.trim().toLowerCase().includes(lSearch) ||
        gradient.colorShade.trim().toLowerCase().includes(lSearch)
      ) {
        return true;
      }

      for (const color of gradient.colors) {
        if (
          color.color.includes(lSearch) ||
          color.colorShade.trim().toLowerCase().includes(lSearch) ||
          color.colorName.trim().toLowerCase().includes(lSearch)
        ) {
          return true;
        }
      }
      return false;
    });
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search here"
        className="input input-ghost w-full focus:outline-none px-0 pb-2"
        onChange={(event) => setSearch(event!.target!.value)}
      />
      <div className="flex justify-evenly md:justify-between flex-wrap gap-4">
        {gradients.map((gradient) => (
          <GradientBox
            key={gradient.id}
            gradient={gradient}
            isSearching={search.length > 0}
          />
        ))}
        {gradients.length < 1 && (
          <span className="text-center w-full mt-10">No gradient found</span>
        )}
      </div>
    </>
  );
}

export function GradientBox({
  gradient,
  isSearching,
}: {
  gradient: (typeof pureGradients)[0];
  isSearching: boolean;
}) {
  return (
    <a
      href={`/g/${gradient.id}`}
      className="w-full sm:w-4/12 md:w-3/12 xl:w-2/12"
    >
      <Gradient
        className="rounded-md flex flex-col-reverse w-full"
        colors={gradient.colors.map((colors) => colors.color)}
        height="15rem"
      >
        <>
          <div
            className={`${
              !isSearching ? 'overlay' : ''
            } bg-base-200 rounded-b-md px-4 py-1 gap-x-2 flex-wrap`}
          >
            {gradient.colors.map((color, index) => (
              <span className="flex gap-2">
                <span>{color.color}</span>
                {index < gradient.colors.length - 1 ? (
                  <span>{' >'}</span>
                ) : null}
              </span>
            ))}
          </div>
          <span
            className={`text-center w-full mb-1 ${
              gradient.isLight ? 'text-black' : 'text-white'
            }`}
          >
            {gradient.name}
          </span>
        </>
      </Gradient>
    </a>
  );
}
