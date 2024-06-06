"use client";
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import { app } from './../../../../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generetRandomString } from '../../../_utils/GeneretRandomStrings';
import { useRouter } from 'next/navigation';

const Upload = () => {
    const router = useRouter()
    const user = useUser()
    const [progress,setProgress] = useState();
    const storage = getStorage(app);
    const db = getFirestore(app);
    const [uploadComplete,setUploadComplete] = useState();
    const [fileDocId,setFileDocId] = useState()
        console.log(fileDocId,'dc Id--------------')

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
                setProgress(progress)
                progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    saveInfo(file,downloadURL)
                    setUploadComplete(true)
                  });
            }, 
            
        );
    };
    const saveInfo = async (file, fileUrl) => {
        try {
            const docID = generetRandomString().toString();
            console.log("docID========>", docID);
    
            const userEmail = user?.primaryEmailAddress?.emailAddress || '';
            const userName = user?.fullName || '';
    
            await setDoc(doc(db, "UploadedFile", docID), {
                fileName: file?.name,
                fileSize: file?.size,
                fileType: file?.type,
                fileUrl: fileUrl,
                userEmail: userEmail,
                userName: userName,
                password: '',
                id: docID,
                shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docID
            });
            setFileDocId(docID); // Update state here
            console.log('Document successfully written!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }
    };
    
    useEffect(()=>{
        uploadComplete && setTimeout(()=>{
            setUploadComplete(false)
            router.push('/file-preview/'+ fileDocId)
        },2000)
    },[uploadComplete==true])
    return (
        <div className='p-5 px-8 md:px-28'>
            <h1 className='text-center m-5 text-2xl'>
                Start <strong className='text-teal-500'>Upload</strong> File And <strong className='text-teal-500'>Share</strong> It
            </h1>
            <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
        </div>
    );
};

export default Upload;
