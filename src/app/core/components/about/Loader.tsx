import React from 'react';

interface LoaderProps {
  loading: boolean;
  message?: string;
}

const LoaderComponent: React.FC<LoaderProps> = ({ loading, message }) => {
  return (
    <div className='flex flex-col py-14'>
      <div className="flex flex-col justify-center items-center gap-5">
        {/* <FadeLoader color="#EE9B8D" loading={loading}/> */}
        {loading && message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default LoaderComponent;
