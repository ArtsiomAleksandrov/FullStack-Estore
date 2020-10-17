import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


export default function NativeSelects({inStock, helperText, value, onChange}) {

  return (
    <div>
      <FormControl>
        <NativeSelect value = {value} onChange = {onChange}
        >
          {[...Array(inStock).keys()].map(key => {
                return(
                    <option key = {key}>{key+1}</option>
                )
          })}
        </NativeSelect>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}