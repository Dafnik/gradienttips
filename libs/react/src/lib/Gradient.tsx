import React, { ReactNode, useEffect, useState } from 'react';
import { gradientColorsToBackgroundStyleProps } from './convert';
import { gradientDirection, gradientIds, gradientType } from '@gradienttips/types';
import { getGradient } from '@gradienttips/client';

interface ReactProps {
  id?: gradientIds;
  colors?: string[];
  direction?: gradientDirection;
  height?: string;
  width?: string;
  children?: ReactNode;

  [x: string]: any;
}

export function Gradient({
  id,
  colors,
  direction,
  width,
  height,
  children,
  ...rest
}: ReactProps) {
  if (!colors && !id) {
    throw new Error('Set color or gradientId');
  }

  const [gradient, setGradient] = useState<gradientType>();

  useEffect(() => {
    if (id) {
      getGradient(id).then((gradient) => setGradient(gradient))
    }
  }, [])

  return (
    <div
      style={{
        height: height ?? '',
        width: width ?? '',
        background: gradientColorsToBackgroundStyleProps(
          colors ?? gradient?.colors ?? [],
          direction
        ),
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Gradient;
