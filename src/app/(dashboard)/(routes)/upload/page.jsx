"use client";
import React from 'react';
import UploadForm from './_components/UploadForm';
import { app } from './../../../../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Upload = () => {
    const storage = getStorage(app);

    const uploadFile = (file) => {
      
        
        const metadata = {
            contentType: file.type,
        };

        const storageRef = ref(storage, 'file-upload/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                  });
            }, 
            
        );
    };

    return (
        <div className='p-5 px-8 md:px-28'>
            <h1 className='text-center m-5 text-2xl'>
                Start <strong className='text-teal-500'>Upload</strong> File And <strong className='text-teal-500'>Share</strong> It
            </h1>
            <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
        </div>
    );
};

export default Upload;
