import React, { useMemo } from 'preact/compat';
import { getGradients } from '@gradienttips/data';
import { useState } from 'preact/hooks';
import { averageHexColors, isHexColorLight } from '@gradienttips/common';
import { Gradient } from '@gradienttips/react';
import type { gradientType } from '@gradienttips/types';

export function GradientList() {
  const [search, setSearch] = useState('');

  const gradients = useMemo(() => {
    return getGradients().filter((gradient) => {
      if (gradient.id.includes(search) || gradient.name.includes(search)) {
        return true;
      }

      for (const color of gradient.colors) {
        if (color.includes(search)) {
          return true;
        }
      }
      return false;
    });
  }, [search]);

  return (
    <>
      <input
        type='text'
        placeholder='Search here'
        className='input input-ghost w-full focus:outline-none px-0 pb-2'
        onChange={(event) => setSearch(event!.target!.value)}
      />
      <div className='flex justify-between flex-wrap gap-4'>
        {gradients.map((gradient) => (
          <GradientBox key={gradient.id} gradient={gradient} />
        ))}
        {gradients.length < 1 && (
          <span className='text-center w-full mt-10'>No gradient found</span>
        )}
      </div>
    </>
  );
}

export function GradientBox({ gradient }: { gradient: gradientType }) {
  const isLight = isHexColorLight(averageHexColors(gradient.colors));
  return (
    <a href={`/g/${gradient.id}`}>
      <Gradient
        className='rounded-md flex flex-col-reverse'
        colors={gradient.colors}
        height='15rem'
        width='15rem'
      >
        <span
          className={`text-center w-full ${
            isLight ? 'text-black' : 'text-white'
          }`}
        >
          {gradient.name}
        </span>
      </Gradient>
    </a>
  );
}
