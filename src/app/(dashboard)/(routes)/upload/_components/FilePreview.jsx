import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FilePreview = ({file,removeFile}) => {
    console.log(file,'file----------')
    return (
        <div className='flex items-center justify-between border border-blue-500 mt-5 rounded '>

       <div className='flex items-center p-2'>
       <Image src='/file.png' width={150} height={100} alt='file'></Image>
          <div>
          <h2> <strong className='text-teal-500'>Name:</strong> {file?.name}</h2>
            <h2> <strong className="text-teal-500">Type:</strong> {file?.type} / <strong className='text-teal-500'>Size:</strong> {(file?.size/1024/1024).toFixed(2)} MB</h2>
          </div>
       </div>

            <X className='text-red-500 cursor-pointer'  onClick={()=> removeFile()}/>
        </div>
    );
};

export default FilePreview;