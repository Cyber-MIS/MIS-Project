import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addWorker } from '../../api/dashboard';

export default function WorkerRegistration() {
  const workerRegSchema = Yup.object().shape({
    Worker_Name: Yup.string().required(),
    Age: Yup.number().required(),
    Address: Yup.string().required(),
    Email: Yup.string().required(),
    Orphanage_ID: Yup.number().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const worker = {
      Worker_Name: values.Worker_Name,
      Age: values.Age,
      Address: values.Address,
      Email: values.Email,
      Orphanage_ID: values.Orphanage_ID,
    };
    addWorker({ worker }).then(() => setSubmitting(false));
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header text-center'>Worker Registration</div>
            <div className='card-body'>
              <Formik
                initialValues={{
                  Worker_Name: '',
                  Age: '',
                  Address: '',
                  Email: '',
                  Orphanage_ID: '',
                }}
                validationSchema={workerRegSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Worker_Name'
                          placeholder='Worker Name'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Worker_Name'
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
