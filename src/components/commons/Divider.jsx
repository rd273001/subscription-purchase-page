import React from 'react';
import { cn } from '@/lib/utils';

const Divider = ( { className, ...props } ) => {
  return (
    <hr
      className={ cn( 'border border-custom-gray-300 my-3 rounded-full', className ) }
      { ...props }
    />
  );
};

export default Divider;