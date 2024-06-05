"use client"
import React from 'react';
import UploadForm from './_components/UploadForm'

const Upload = () => {
    return (
        <div className='p-5 px-8 md:px-28'>
            <h1 className='text-center m-5 text-2xl'>Start <strong className='text-teal-500'>Upload</strong> File And <strong className='text-teal-500'>Share</strong> It</h1>
            <UploadForm></UploadForm>
        </div>
    );
};

export default Upload;