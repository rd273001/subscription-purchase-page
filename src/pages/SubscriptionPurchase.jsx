import React, { useState } from 'react'
import Header from '@/components/Header.jsx';
import ProductSelection from '@/components/ProductSelection';
import InvoiceDetails from '@/components/InvoiceDetails';

const SubscriptionPurchase = () => {
  const [userCount, setUserCount] = useState( 1 );
  const [selectedCycle, setSelectedCycle] = useState( 'Monthly' );
  const [address, setAddress] = useState( {
    line1: '',
    line2: '',
    pincode: '',
    state: '',
  } );

  const cyclePrices = {
    'Monthly': 1300,
    'Yearly': 14000,
  };
  const totalPrice = ( count, cycle ) => ( count * cyclePrices[cycle] ).toFixed( 2 );
  const actualTotalPrice = ( cyclePrices['Monthly'] * 12 ).toFixed( 2 );

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <div className='-mt-14 grid lg:grid-cols-2 justify-items-center gap-8 mb-40'>
        <div className='flex flex-col gap-y-10'>
          <ProductSelection
            userCount={ userCount }
            setUserCount={ setUserCount }
            selectedCycle={ selectedCycle }
            setSelectedCycle={ setSelectedCycle }
            cyclePrices={ cyclePrices }
            actualTotalPrice={ actualTotalPrice }
          />

          <InvoiceDetails address={ address } setAddress={ setAddress } />
        </div>
        
        {/* <Summary /> */ }
      </div>
    </div>
  );
};

export default SubscriptionPurchase;