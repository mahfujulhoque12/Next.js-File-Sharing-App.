"use client"
import React, { useState } from 'react';
import { Files,Upload,Shield } from 'lucide-react';
import Image from 'next/image';

const SideNav = () => {

    const [activeIndex,setActiveIndex]=useState(0)
    const menuList = [
        {
            id:1,
            name:'upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'files',
            icon:Files,
            path:'/files'
        },
        {
            id:3,
            name:'upgrade',
            icon:Shield,
            path:'/upgrade'
        }
    ]
    return (
      <div className='border-r h-full shadow-md'>
          <div className="p-5 border-b">
           <Image src='/logo.svg' width={100} height={50}></Image>
        </div>
        <div className='flex flex-col float-left w-full'>     
        {menuList.map((item,index)=>
            <button
             key={index}
             className={`flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500
             ${activeIndex === index ? 'bg-blue-50 text-teal-500' : ''}             
             `}
                  onClick={() => setActiveIndex(index)}
                  
             >
                <item.icon/>
                {item.name}
            </button>
        )}

        </div>
      </div>
    );
};

export default SideNav;