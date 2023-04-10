import React, { ReactNode } from 'react';
import { getGradient, gradientDirection, gradientIds, gradientType } from '@gradienttips/data';
import { gradientColorsToBackgroundStyleProps } from './convert';

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
  const gradient = getGradient(id);
  return (
    <div
      style={{
        height: height ?? '',
        width: width ?? '',
        background: gradientColorsToBackgroundStyleProps(
          colors ?? gradient.colors,
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
