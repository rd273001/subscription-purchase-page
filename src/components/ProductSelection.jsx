import React, { useState } from 'react';
import { Info, Minus, Plus } from 'lucide-react';
import { Card } from './ui/Card';

const ProductSelection = () => {
  const [userCount, setUserCount] = useState( 1 );

  return (
    <Card>
      <div className='flex items-center mb-4'>
        <img src='logo.png' className='w-9 p-1.5 bg-gradient-to-b from-[#5187EE] to-[#324C7E] rounded-md mr-2' />
        <h2 className='text-xl font-bold'>Your products</h2>
        <Info className='ml-2 text-custom-blue' size={ 16 } />
      </div>
      <div className='mb-4'>
        <div className='flex justify-between items-center mb-2'>
          <label className='font-medium'>Select the number of users</label>
          <Info className='text-gray-400' size={ 16 } />
        </div>
        <p className='text-sm text-gray-500 mb-2'>The minimum amount is 1 user.</p>
        <div className='flex'>
          <input
            type='number'
            className='border border-custom-gray-100 rounded-md text-center text-custom-blue py-1.5'
            value={ userCount }
            onChange={ ( e ) => setUserCount( Math.max( 1, parseInt( e.target.value ) || 1 ) ) }
          />
          <button
            className='border rounded-md p-2'
            onClick={ () => setUserCount( Math.max( 1, userCount - 1 ) ) }
          >
            <Minus className='text-[#9CA3AF]' />
          </button>
          <button
            className='border rounded-md p-2'
            onClick={ () => setUserCount( userCount + 1 ) }
          >
            <Plus className='text-[#9CA3AF]' />
          </button>
        </div>
      </div>
      <div>
        <label className='font-medium block mb-2'>Select a subscription cycle</label>
        <div className='grid grid-cols-2 gap-4'>
          { ['Monthly', 'Yearly'].map( ( cycle ) => (
            <div key={ cycle } className='border rounded-lg p-4 focus:border-custom-blue'>
              <h3 className='font-medium'>{ cycle }</h3>
              <p className='text-2xl font-bold'>₹1300</p>
              <p className='text-sm text-gray-500'>/month/user, billed monthly</p>
            </div>
          ) ) }
        </div>
      </div>
    </Card>
  );
};

export default ProductSelection;