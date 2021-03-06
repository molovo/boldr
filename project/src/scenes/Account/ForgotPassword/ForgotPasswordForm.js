/* @flow */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@boldr/ui/Button';
import Form, { TextFormField } from '@boldr/ui/Form';

export type Props = {
  handleSubmit: Function,
  submitting?: boolean,
  pristine?: boolean,
};
const ForgotPasswordForm = (props: Props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit} className="boldrui-form boldr-form--forgot">
      <Field
        id="email"
        name="email"
        type="email"
        placeholder="admin@boldr.io"
        label="Email Address"
        component={TextFormField}
      />
      <Button htmlType="submit" kind="primary" disabled={submitting || pristine} block>
        Send Reset Link
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: 'forgotPasswordForm',
})(ForgotPasswordForm);
