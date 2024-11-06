import React from 'react';
import { cn } from '@/lib/utils';

const Card = ( { className, ...props } ) => (
  <div
    className={ cn( 'flex flex-col bg-white rounded-xl shadow-black/25 shadow-lg p-6 ', className ) }
    { ...props }
  />
);

export default Card;