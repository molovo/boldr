/* @flow */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
// internal
import Row from '../../../components/Layout/Row';
import Col from '../../../components/Layout/Col';
import Button from '../../../components/Button';
import Form, { TextFormField } from '../../../components/Form';
import { isRequired, isEmail } from '../../../core/util/validations';

type Props = {
  handleSubmit: Function,
  submitting?: boolean,
  pristine?: boolean,
};

const SignupForm = (props: Props) => {
  const { handleSubmit, submitting, pristine } = props;
  return (
    <Form onSubmit={handleSubmit} className="boldrui-form boldrui-form--signup">
      <Row>
        <Col sm={6}>
          <Field
            id="email"
            name="email"
            type="email"
            component={TextFormField}
            label="Email address"
            placeholder="admin@boldr.io"
            validate={[isRequired, isEmail]}
          />
        </Col>
        <Col sm={6}>
          <Field
            id="password"
            name="password"
            type="password"
            component={TextFormField}
            label="Password"
            placeholder="*****"
            validate={[isRequired]}
          />
        </Col>
      </Row>
      <Button
        style={{ marginTop: '25px' }}
        htmlType="submit"
        kind="primary"
        disabled={submitting || pristine}
        block>
        Create Account
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: 'userSignupForm',
  destroyOnUnmount: false,
})(SignupForm);
