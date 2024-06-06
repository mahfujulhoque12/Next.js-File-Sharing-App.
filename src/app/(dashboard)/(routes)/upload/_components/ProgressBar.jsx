import React from 'react';

const ProgressBar = ({progress=40}) => {
    return (
        <div className='bg-gray-400  w-full mt-3 rounded-full h-4'>
            <div className='bg-teal-500 p-1 rounded-full h-4 text-[10px]' style={{width:`${progress}%`}}>
            {`${Number(progress).toFixed(0)}%`}
            </div>
           
        </div>
    );
};

export default ProgressBar;