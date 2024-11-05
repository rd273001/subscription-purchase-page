import React from 'react';
import { Check } from 'lucide-react';

const Header = () => {
  return (
    <div className='mt-20 pt-8 pb-20 bg-gradient-to-r from-[#86BAE380] to-[#3180BD80]'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl text-[#124974] font-semibold mb-4'>Complete Your Purchase</h1>
        <div className='grid grid-cols-4 justify-self-center gap-6 text-custom-black'>
          <span className='text-[#124974] size-fit'>Your plan includes:</span>
          { Array( 3 ).fill( '24/7 customer care' ).map( ( feature, i ) => (
            <div key={ i } className='flex items-center gap-2'>
              {/* <div className='rounded-full bg-custom-blue'> */}
                <Check className='size-6 p-0.5 text-white bg-custom-blue rounded-full' />
              {/* </div> */}
              <span className=''>{ feature }</span>
            </div>
          ) ) }
        </div>
      </div>
    </div>
  );
};

export default Header;