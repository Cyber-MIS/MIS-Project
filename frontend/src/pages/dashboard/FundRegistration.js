import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addFund } from '../../api/dashboard';

export default function FundRegistration() {
  const fundRegSchema = Yup.object().shape({
    Orphan_ID: Yup.number().required(),
    Document_ID: Yup.number().required(),
    Amount: Yup.number().required()
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const fund = {
      Orphan_ID: values.Orphan_ID,
      Document_ID: values.Document_ID,
      Amount: values.Amount
    };
    addFund({ fund }).then(() => setSubmitting(false));
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header text-center'>
              Funding Registration
            </div>
            <div className='card-body'>
              <Formik
                initialValues={{
                  Orphan_ID: '',
                  Document_ID: '',
                  Amount: ''
                }}
                validationSchema={fundRegSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Orphan_ID'
                          placeholder='Orphan ID'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Orphan_ID'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Document_ID'
                          placeholder='Document ID'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Document_ID'
                          component='div'
                          className='text-danger'
                        />
                      </div>
                      <div className='mb-3'>
                        <Field
                          type='text'
                          name='Amount'
                          placeholder='Amount'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='Amount'
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
