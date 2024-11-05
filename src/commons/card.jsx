import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef( ( { className, ...props }, ref ) => (
  <div
    ref={ ref }
    className={ cn( 'bg-white rounded-xl shadow-black/15 shadow-xl p-6 ', className ) }
    { ...props }
  />
) );
Card.displayName = 'Card';