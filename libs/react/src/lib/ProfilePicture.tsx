import React from 'react';
import Gradient from './Gradient';
import { gradientDirection, gradientIds } from '@gradienttips/types';

interface ReactProps {
  id: gradientIds | null;
  colors?: string[] | null;
  direction?: gradientDirection | null;
  height?: string | null;
  width?: string | null;
  imageUrl?: string | null;
  alt?: string | null;

  [x: string]: any;
}

export function ProfilePicture({
  id,
  colors,
  direction,
  imageUrl,
  alt,
  ...rest
}: ReactProps) {
  return imageUrl ? (
    <img src={imageUrl} alt={alt ?? 'Profile picture'} {...rest}></img>
  ) : (
    <Gradient id={id} direction={direction} colors={colors} {...rest} />
  );
}

export default ProfilePicture;
