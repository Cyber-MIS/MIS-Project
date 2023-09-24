import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addUser } from '../../api/authentication';

export default function UserReg() {
  const userRegSchema = Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required(),
    age: Yup.string().required(),
    field: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const user = {
      name: values.name,
      password: values.password,
      age: values.age,
      field: values.field,
    };
    addUser({ user }).then(() => setSubmitting(false));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">Guest User Registration</div>
            <div className="card-body">
              <Formik
                initialValues={{
                  name: '',
                  password: '',
                  age: '',
                  field: '',
                }}
                validationSchema={userRegSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="mb-3">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
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
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="text"
                          name="age"
                          placeholder="Age"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="age"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="text"
                          name="field"
                          placeholder="Field"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="field"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
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
