import { useState } from 'react';
import { NativeSelect } from '@mantine/core';


const PickLimit = ({value, setValue}:{value:number, setValue:(value:number)=>void}) => {
  

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(parseInt(event.currentTarget.value))}
      data={['10', '20', '50', '100']}
    />
  );
}

export default PickLimit