import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addUser } from '../../api/authentication';   //
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
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
    <div>
      <Formik
        initialValues={{
          Name: '',
          Password: '',
          Age: '',
          Field: '',
        }}
        validationSchema={userRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='user--reg--form'>
              <h1>Guest User Registration</h1>
              <span>
                <Field
                  type='text'
                  name='Name'
                  placeholder='Name'
                />
              </span>
              <span>
                <Field type='text' name='Password' placeholder='Password' />
              </span>
              <span>
                <Field type='text' name='Age' placeholder='Age' />
              </span>
              <span>
                <Field type='text' name='Field' placeholder='Field' />
              </span>
           
              <Button
                className='user--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>

              <div className='user--reg--form--errors'>
                <ErrorMessage name='name' component='div' />
                <ErrorMessage name='password' component='div' />
                <ErrorMessage name='age' component='div' />
                <ErrorMessage name='field' component='div' />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}