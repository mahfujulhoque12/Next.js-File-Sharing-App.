import React from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

const layout = ({children}) => {
    return (
        <div>
            <div className=' h-full w-64  flex-col fixed  md:flex hidden inset-y-0 z-50'>
            <SideNav/>
            </div>

            <div className='md:ml-64'>
                <TopHeader></TopHeader>
            {children}
            </div>
        </div>
    );
};

export default layout;