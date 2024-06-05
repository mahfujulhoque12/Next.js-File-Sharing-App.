import React, { useState } from 'react';
import AlertMsg from './AlertMsg';

const UploadForm = () => {
    const [file,setFile]= useState()
    const [errorMsg,setErrorMsg] = useState()

    const onFileSeletc = (file)=>{
        console.log(file,'----') 
        if(file && file.size >2000000)

            {   console.log('file size is greater than 2 mb')
                return;
            }
            setErrorMsg('Max file size is 2 Mb')
            setFile(file)
    }
    return (
        <div className='text-center'> 
           
            <div className="flex items-center justify-center w-full">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-teal-300 border-dashed rounded-lg cursor-pointer bg-teal-50 dark:hover:bg-bray-800 dark:bg-teal-700 hover:bg-teal-100 dark:border-teal-600 dark:hover:border-teal-500 dark:hover:bg-teal-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-teal-500 dark:text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-teal-500 dark:text-black"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-teal-500 dark:text-teal-400">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                    </div>
                    <input onChange={(event)=>onFileSeletc(event.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 

           {errorMsg ?<AlertMsg msg={errorMsg}></AlertMsg>:''}
            <button disabled={!file} class='w-32 p-2 mt-3 rounded-full bg-teal-500 hover:bg-teal-600 hover:text-teal-100 transition-colors duration-500 disabled:bg-gray-400'>Upload</button>

        </div>
    );
};

export default UploadForm;