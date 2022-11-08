import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessages from './ErrorMessages';

function AppFormField({name, width, ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                width={width}
                {...otherProps}
                onBlur={() => setFieldTouched(name) }
                onChangeText={handleChange(name)}
            />
            <ErrorMessages visible={touched[name]} error={errors[name]} />
        
        </>
    );
}

export default AppFormField;