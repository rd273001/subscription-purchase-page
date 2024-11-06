import { Info } from 'lucide-react';
import React from 'react'
import Card from '@commons/Card';

const InvoiceDetails = React.memo( ( { address, onAddressChange } ) => {
  // console.count( 'Invoice Card Rendered' );

  return (
    <Card>
      <div className='flex items-center gap-x-2 mb-4'>
        <h2 className='text-xl font-semibold'>Invoice details</h2>
        <Info className='text-custom-blue p-0.5' />
      </div>

      <div className='text-[#4D4D4D] space-y-4'>
        <div>
          <label className='block text-sm mb-1'>Address Line 1</label>
          <input
            type='text'
            placeholder='Eg: HSR Layout'
            className='w-full p-2 border rounded-lg outline-none focus:border-custom-blue placeholder:text-[#989898]'
            value={ address.line1 }
            onChange={ ( e ) => onAddressChange( { ...address, line1: e.target.value } ) }
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Address Line 2 ( Landmark )</label>
          <input
            type='text'
            placeholder='Eg: near apollo'
            className='w-full p-2 border rounded-lg outline-none focus:border-custom-blue placeholder:text-[#989898]'
            value={ address.line2 }
            onChange={ ( e ) => onAddressChange( { ...address, line2: e.target.value } ) }
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Pincode</label>
          <input
            type='text'
            placeholder='Eg: 5784'
            className='w-full p-2 border rounded-lg outline-none focus:border-custom-blue placeholder:text-[#989898]'
            value={ address.pincode }
            onChange={ ( e ) => onAddressChange( { ...address, pincode: e.target.value } ) }
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Office working location</label>
          <select
            className={ `w-full p-2 border outline-none focus:border-custom-blue rounded-lg ${ address.state ? 'text-custom-black' : 'text-[#989898]' }` }
            value={ address.state }
            onChange={ ( e ) => onAddressChange( { ...address, state: e.target.value } ) }
          >
            <option value='' className='text-[#989898]'>Select state</option>
            <option value='KA' className='text-[#4D4D4D]'>Karnataka</option>
            <option value='TN' className='text-[#4D4D4D]'>Tamil Nadu</option>
            <option value='MH' className='text-[#4D4D4D]'>Maharashtra</option>
          </select>
        </div>
      </div>
    </Card>
  );
} );

export default InvoiceDetails;