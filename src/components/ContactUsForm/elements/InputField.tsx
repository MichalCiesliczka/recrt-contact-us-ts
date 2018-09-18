import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { WrappedFieldProps } from 'redux-form';

type Props = {
  label: string,
  multiline?: boolean,
} & WrappedFieldProps;

const InputField = ({
  input,
  label,
  multiline,
  meta: {
    touched,
    error,
  },
  ...custom
}: Props) => (
  <div className="input-wrapper">
    <TextField
      fullWidth={true}
      label={label}
      multiline={multiline}
      error={touched && !!error}
      {...input}
      {...custom}
    />
    {
      touched && error && (
        <FormHelperText error={true}>
          {error}
        </FormHelperText>
      )
    }
  </div>
);

export default InputField;
