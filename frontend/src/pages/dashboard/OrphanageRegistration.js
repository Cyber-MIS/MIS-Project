import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addOrphanage } from '../../api/dashboard';

export default function OrphanageRegistration() {
  const orphanageRegSchema = Yup.object().shape({
    Orphanage_Name: Yup.string().required(),
    Address: Yup.string().required(),
    Contact: Yup.string().required(),
    Capacity: Yup.number().required(),
    Employee_Count: Yup.number().required(),
    Email: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const orphanage = {
      Orphanage_Name: values.Orphanage_Name,
      Address: values.Address,
      Contact: values.Contact,
      Capacity: values.Capacity,
      Employee_Count: values.Employee_Count,
      Email: values.Email,
    };
    addOrphanage({ orphanage }).then(() => setSubmitting(false));
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header text-center'>
              Orphanage Registration
            </div>
            <div className='card-body'>
              <Formik
                initialValues={{
                  Orphanage_Name: '',
                  Address: '',
                  Contact: '',
                  Capacity: '',
                  Employee_Count: '',
                  Email: '',
                }}
                validationSchema={orphanageRegSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Orphanage_Name'
                          placeholder='Orphanage Name'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Orphanage_Name'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Address'
                          placeholder='Address'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Address'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Contact'
                          placeholder='Contact'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Contact'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Capacity'
                          placeholder='Capacity'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Capacity'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Employee_Count'
                          placeholder='Employee Count'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Employee_Count'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Email'
                          placeholder='Email'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Email'
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
