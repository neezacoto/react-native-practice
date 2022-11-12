import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorMessages from './ErrorMessages';

function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
      }
    
      const handleRemove = uri => [
        setFieldValue(name, imageUris.filter(imageUris => imageUris !== uri))
      ]
      
        return (
            <>
                <ImageInputList 
                    imageUris={imageUris}
                    onAddImage={handleAdd}
                    onRemoveImage={handleRemove}
                
                />
                <ErrorMessages error={errors[name]} visible={touched[name]} />
            </>
        );
}


export default FormImagePicker;