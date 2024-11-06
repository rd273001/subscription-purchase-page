import React from 'react';
import Card from '@commons/Card';
import Divider from '@commons/Divider';
import { ShieldCheck, LockKeyhole } from 'lucide-react';

const Summary = React.memo( ( { subtotal, gst, total } ) => {
  console.count( 'Summary Card Rendered' );

  return (
    <Card className='h-fit justify-center lg:col-span-2'>
      <h2 className='text-xl font-semibold'>Summary</h2>

      <Divider />

      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-end text-sm'>
          <div className='flex flex-col'>
            <p className='font-medium text-base'>Premium</p>
            <p>180 INR / employee / month</p>
          </div>
          <p>₹{ subtotal }</p>
        </div>
        <button className='text-custom-blue font-medium text-sm self-start'>Change plan</button>
        <button className='font-medium text-sm underline self-start'>Enter promo code</button>
      </div>

      <Divider />

      <div className='flex flex-col gap-2 text-sm'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>₹{ subtotal }</span>
        </div>
        <div className='flex justify-between'>
          <span>GST (18%)</span>
          <span>₹{ gst }</span>
        </div>
      </div>

      <Divider />

      <div className='flex justify-between items-baseline font-semibold'>
        <span>Total</span>
        <span className='text-sm'>₹{ total }</span>
      </div>

      <button className='bg-custom-blue text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 my-8'>
        <LockKeyhole className='text-white' strokeWidth={ 1.5 } />
        Submit Purchase
      </button>

      {/* Safe & Secure */ }
      <div className='flex items-center justify-center gap-2 mb-4'>
        <ShieldCheck className='text-[#60BC57]' fill='#E2F4DF' strokeWidth={ 1.5 } />
        Safe & Secure Payment
      </div>

      {/* Terms */ }
      <p className='text-xs text-custom-gray-500'>
        By purchasing, you accept the{ ' ' }
        <a href='#' className='text-blue-600'>
          Terms of Use
        </a>{ ' ' }
        and acknowledge reading the{ ' ' }
        <a href='#' className='text-blue-600'>
          Privacy Policy
        </a>
        . You also agree to auto renewal of your yearly subscription for US$136.99, which
        can be disabled at any time through your account. Any eligible tax exemptions will
        be applied when you're charged for your next renewal payment. Your card details
        will be saved for future purchases and subscription renewals.
      </p>
    </Card>
  );
} );

export default Summary;