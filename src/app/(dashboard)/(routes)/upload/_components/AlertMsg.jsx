import { AlertCircle } from 'lucide-react';
import React from 'react';

const AlertMsg = ({msg}) => {
    return (
        <div className='p-5 bg-red-500 mt-5 text-white flex items-center gap-5 rounded-md'>
        
            <AlertCircle/>
            {msg}
        </div>
    );
};

export default AlertMsg;