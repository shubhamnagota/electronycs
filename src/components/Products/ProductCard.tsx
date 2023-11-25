'use client';

import Image from 'next/image';
import React from 'react';
import Ratings from './Ratings';
import truncateText from '@/utils/truncate';

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 p-2 hover:scale-105 text-center text-sm'>
      <div className='flex flex-col gap-1 items-center w-full'>
        <div className='aspect-square overflow-hidden relative w-full'>
          <Image src={product.images[0]?.image} fill alt={product.name} className='w-full h-full object-contain' />
        </div>

        <div className='mt-4'>{truncateText(product.name)}</div>
        <div>
          <Ratings reviews={product.reviews} />
        </div>
        <div>reviwe</div>
        <div>price</div>
      </div>
    </div>
  );
};

export default ProductCard;
