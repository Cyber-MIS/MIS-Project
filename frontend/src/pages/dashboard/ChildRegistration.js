import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addChild } from '../../api/dashboard';

export default function ChildRegistration() {
  const childRegSchema = Yup.object().shape({
    Orphanage_ID: Yup.number().required(),
    Child_Name: Yup.string().required(),
    Age: Yup.number().required(),
    Gender: Yup.string().required(),
    Fostered: Yup.bool().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const child = {
      Orphanage_ID: values.Orphanage_ID,
      Child_Name: values.Child_Name,
      Age: values.Age,
      Gender: values.Gender,
      Fostered: values.Fostered,
    };
    addChild({ child }).then(() => setSubmitting(false));
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header text-center'>
              Child Registration
            </div>
            <div className='card-body'>
              <Formik
                initialValues={{
                  Orphanage_ID: '',
                  Child_Name: '',
                  Age: '',
                  Gender: '',
                  Frostered: ''
                }}
                validationSchema={childRegSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Child_Name'
                          placeholder='Child Name'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Child_Name'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Orphanage_ID'
                          placeholder='Orphanage ID'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Orphanage_ID'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Age'
                          placeholder='Age'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Age'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Gender'
                          placeholder='Gender'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Gender'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        // Frostered have to change to the boolean
                        <Field
                          type='text'
                          name='Frostred'
                          placeholder='Frostered'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Frostred'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <button
                        type='submit'
                        className='btn btn-primary btn-block'
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
