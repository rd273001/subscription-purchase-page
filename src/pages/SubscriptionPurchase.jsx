import React, { useState } from 'react'
import Header from '@components/Header';
import ProductSelection from '@components/ProductSelection';
import InvoiceDetails from '@components/InvoiceDetails';
import Summary from '@components/Summary';

const SubscriptionPurchase = () => {
  const [userCount, setUserCount] = useState( 1 );
  const [selectedCycle, setSelectedCycle] = useState( 'Monthly' );
  const [address, setAddress] = useState( {
    line1: '',
    line2: '',
    pincode: '',
    state: '',
  } );
  const [cyclePrices, setCyclePrices] = useState( {
    'Monthly': 1300,
    'Yearly': 14000,
  } );  // Here dummy data, but data will be fetched from an api in real-time

  const totalPrice = ( userCount * cyclePrices[selectedCycle] ).toFixed( 2 );
  const actualTotalPrice = ( cyclePrices['Monthly'] * 12 ).toFixed( 2 );
  const gstAmount = ( 0.18 * totalPrice ).toFixed( 2 );
  const totalPriceWithGst = ( Number( totalPrice ) + Number( gstAmount ) ).toFixed( 2 );

  // const handleUserCount = useCallback( ( count ) => {
  //   setUserCount( prev => count );
  // }, [userCount] );

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />

      <div className='-mt-14 grid lg:grid-cols-5 w-full max-w-screen-xl mx-auto p-4 pb-0 gap-x-10 gap-y-8 mb-40'>
        <div className='flex flex-col gap-y-8 w-full lg:col-span-3'>
          <ProductSelection
            userCount={ userCount }
            setUserCount={ setUserCount }
            selectedCycle={ selectedCycle }
            setSelectedCycle={ setSelectedCycle }
            cyclePrices={ cyclePrices }
            actualTotalPrice={ actualTotalPrice }
          />

          <InvoiceDetails address={ address } onAddressChange={ setAddress } />
        </div>

        <Summary
          subtotal={ totalPrice }
          gst={ gstAmount }
          total={ totalPriceWithGst }
        />
      </div>
    </div>
  );
};

export default SubscriptionPurchase;