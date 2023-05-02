import React, { PropsWithChildren, useEffect, useState } from 'react';
import { gradientDirection, gradientIds, gradientType } from '@gradienttips/types';
import { getGradient, gradientColorsToBackgroundStyleProps } from '@gradienttips/client';

interface GradientProps {
  id?: gradientIds | null;
  colors?: string[] | null;
  direction?: gradientDirection | null;
  height?: string | null;
  width?: string | null;
  style?: {
    [x: string]: any;
  };

  [x: string]: any;
}

export function Gradient({
  id,
  colors,
  direction,
  width,
  height,
  style,
  children,
  ...rest
}: PropsWithChildren<GradientProps>) {
  if (!colors && !id) {
    throw new Error('Set color or gradientId');
  }

  const [gradient, setGradient] = useState<gradientType>();

  useEffect(() => {
    if (id) {
      getGradient(id).then((gradient) => setGradient(gradient));
    }
  }, [id]);

  return (
    <div
      style={{
        height: height ?? style?.height ?? '',
        width: width ?? style?.width ?? '',
        background: gradientColorsToBackgroundStyleProps(
          colors ?? gradient?.colors ?? [],
          direction
        ),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Gradient;
