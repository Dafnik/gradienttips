import React from 'react';
import Gradient from './Gradient';
import { gradientDirection, gradientIds } from '@gradienttips/types';

interface ReactProps {
  id: gradientIds;
  direction?: gradientDirection;
  height?: string;
  width?: string;
  imageUrl?: string | null;

  [x: string]: any;
}

export function ProfilePicture({
  id,
  direction,
  imageUrl,
  ...rest
}: ReactProps) {
  return imageUrl ? (
    <img src={imageUrl} {...rest}></img>
  ) : (
    <Gradient id={id} direction={direction} {...rest} />
  );
}

export default ProfilePicture;
