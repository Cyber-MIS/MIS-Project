import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';

import { login } from '../../api/authentication';

export default function Login() {
  const loginSchema = Yup.object().shape({
    username: Yup.string().required(),
  });

  // const navigate = useNavigate();
  const [loggingError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const loginDeatails = {
      username: values.username,
      password: values.password,
    };

    login({ loginDeatails })
      .then((response) => {
        console.log(response);
        setSubmitting(false);
        if (response.auth === 'success') {
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
        setSubmitting(false);
      });
  };

  return (
    <div>
      <Card title='Login' className='login--card'>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const errorInputStyle = {
              borderColor: 'red',
            };
            return (
              <Form className='user--login--form'>
                <span>
                  <Field
                    type='text'
                    name='Username'
                    placeholder='Username'
                    style={
                      props.touched.name && props.errors.name
                        ? errorInputStyle
                        : null
                    }
                  />
                </span>
                <span>
                  <Field type='Password' name='Password' placeholder='Password' />
                </span>

                <Button
                  className='user--login--form--submit'
                  type='primary'
                  danger = {loggingError}
                  onClick={props.handleSubmit}
                  disabled={props.isSubmitting}
                >
                  Submit
                </Button>
                {Object.values(props.touched).includes(true) &&
                  Object.values(props.errors).length !== 0 && (
                    <div className='user--reg--form--errors'>
                      <ErrorMessage name='username' component='div' />
                      <ErrorMessage name='password' component='div' />
                    </div>
                  )}
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
}
