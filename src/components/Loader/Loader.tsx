import React from 'react';
import { RotatingLines, TailSpinProps } from 'react-loader-spinner';

const Loader: React.FC = () => {
    return (
        <div className='h-[75vh] w-[100%] flex items-center justify-center'>
            <RotatingLines
                visible={true}
                height={140}
                width="140"
                color="#FED83C"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default Loader;
