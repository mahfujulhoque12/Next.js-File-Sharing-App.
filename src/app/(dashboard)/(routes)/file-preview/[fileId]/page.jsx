"use client"
import React, { useEffect } from 'react';

const filePreview = ({params}) => {
    useEffect(()=>{
        console.log(params?.fileId)
    },[])
    return (
        <div>
            <h1>filePreview</h1>
        </div>
    );
};

export default filePreview;