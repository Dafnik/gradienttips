import React from 'react';
import { gradientDirection, gradientIds } from '@gradienttips/data';
import Gradient from './Gradient';

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
