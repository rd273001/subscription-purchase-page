import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef( ( { className, ...props }, ref ) => (
  <div
    ref={ ref }
    className={ cn( 'rounded-xl shadow-md p-4', className ) }
    { ...props }
  />
) );
Card.displayName = 'Card';

export const CardHeader = React.forwardRef( ( { className, ...props }, ref ) => (
  <div
    ref={ ref }
    className={ cn( 'flex flex-col space-y-1.5 p-6', className ) }
    { ...props }
  />
) );
CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef( ( { className, ...props }, ref ) => (
  <div ref={ ref } className={ cn( 'p-6 pt-0', className ) } { ...props } />
) );
CardContent.displayName = 'CardContent';