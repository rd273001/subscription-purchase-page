import React from 'react'
import Header from '@/components/Header.jsx';
import ProductSelection from '@/components/ProductSelection';

const SubscriptionPurchase = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <div className='bg-white'>
        <div className='grid lg:grid-cols-2 justify-items-center gap-8'>
          <div className='flex flex-col gap-y-10'>
            <ProductSelection />
            {/* <InvoiceDetails /> */ }
            <ProductSelection />
          </div>
          {/* <Summary /> */ }
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPurchase;