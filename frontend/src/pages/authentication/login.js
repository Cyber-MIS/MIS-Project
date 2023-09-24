import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../api/authentication';

export default function UserLoginReg() {
  const loginSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const [loggingError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const loginDetails = {
      username: values.username,
      password: values.password,
    };

    login({ loginDetails })
      .then((response) => {
        setSubmitting(false);
        if (response.auth === 'success') {
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        setLoginError(true);
        setSubmitting(false);
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center ">Login</div>
            <div className="card-body">
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="mb-3">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Username"
                          className={`form-control ${
                            props.touched.username && props.errors.username
                              ? 'is-invalid'
                              : ''
                          }`}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <button
                        type="submit"
                        className={`btn btn-primary btn-block ${
                          loggingError ? 'btn-danger' : ''
                        }`}
                        disabled={props.isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




