import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessages from "./ErrorMessages";

function AppFormPicker({ 
    items,
    name,
    PickerItemComponent,
    placeholder,
    width,
    numberOfColumns = 1
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
