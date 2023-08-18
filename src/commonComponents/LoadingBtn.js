import React from 'react';
import { Button, Spinner } from 'flowbite-react';


const LoadingBtn = () => {
  return (
    <Button color="gray" className="mx-auto my-64">
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3">
        Loading...
      </span>
    </Button>
  );
};

export default LoadingBtn;