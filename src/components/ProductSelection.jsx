import React from 'react';
import { Check, Info, Minus, Plus } from 'lucide-react';
import Card from '@/commons/Card';
import Divider from '@/commons/Divider';

const ProductSelection = React.memo( ( { userCount, setUserCount, selectedCycle, setSelectedCycle, cyclePrices, actualTotalPrice } ) => {
  console.count( 'Product Card Rendered' );

  return (
    <Card>
      <div className='flex items-center gap-x-2'>
        <img src='logo.png' className='w-9 p-1.5 bg-gradient-to-b from-[#5187EE] to-[#324C7E] rounded-md' />
        <h2 className='text-xl font-semibold'>Your products</h2>
        <Check className='text-white bg-custom-blue rounded-full p-0.5' size={ 16 } />
      </div>

      <Divider className='w-5/6' />

      <div className='mb-4'>
        <div className='flex items-center mb-2 gap-x-2'>
          <label className='text-lg font-medium'>Select the number of users</label>
          <Info className='text-custom-blue p-0.5' />
        </div>
        <p className='text-sm text-custom-gray-500 mb-2'>The minimum amount is 1 user.</p>
        <div className='flex'>
          <input
            type='number'
            className='border border-e-0 border-custom-gray-100 outline-none focus:border-custom-blue rounded-lg rounded-r-none text-center text-custom-blue py-1.5'
            value={ userCount }
            onChange={ ( e ) => setUserCount( Math.max( 1, parseInt( e.target.value ) || 1 ) ) }
          />
          <button
            className='border p-2'
            onClick={ () => setUserCount( Math.max( 1, userCount - 1 ) ) }
          >
            <Minus className='text-[#9CA3AF]' />
          </button>
          <button
            className='border border-l-0 rounded-lg rounded-l-none p-2'
            onClick={ () => setUserCount( userCount + 1 ) }
          >
            <Plus className='text-[#9CA3AF]' />
          </button>
        </div>
      </div>

      <div>
        <label className='text-lg font-medium block mb-2'>Select a subscription cycle</label>
        <div className='grid grid-cols-2 gap-4'>
          { Object.keys( cyclePrices ).map( ( cycle ) => (
            <button
              key={ cycle }
              onClick={ () => setSelectedCycle( cycle ) }
              className={ `flex flex-col border rounded-lg p-4 ${ cycle === selectedCycle ? 'border-custom-blue' : 'border-custom-gray-300' }` }
            >
              <p>{ cycle }</p>
              { cycle === 'Monthly' && <p className='text-[clamp(1.75rem,4.5vw,2.125rem)] font-bold'>{ `₹${ cyclePrices[cycle] }` }</p> }
              { cycle === 'Yearly' && <p className='text-[clamp(1.75rem,4.5vw,2.125rem)] font-bold'>
                { `₹${ cyclePrices[cycle] }` }<span className='ml-1 text-sm font-light line-through'>{ actualTotalPrice }</span>
              </p>
              }
              <p className='text-sm text-custom-gray-500 text-left'>{ `${ cycle === 'Monthly' ? '/month' : '/year' }/user, billed ${ String( cycle ).toLowerCase() }` }</p>
            </button>
          ) ) }
        </div>
      </div>
    </Card>
  );
} );

export default ProductSelection;