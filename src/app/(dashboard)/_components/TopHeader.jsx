import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TopHeader = () => {
    return (
        <div className="flex p-5 border-b items-center justify-between md:justify-end">
            <AlignJustify className='md:hidden'/>
            <Image src="/logo.svg" width={100} height={50} className='md:hidden'/>
            <UserButton></UserButton>
           
        </div>
    );
};

export default TopHeader;