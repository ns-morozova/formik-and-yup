import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './App.css';
import styles from './App.module.css';


// Использование Formik

// const validateEmail = (value: string) => {
//   if(!value) {
//     return 'Required field';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     return 'Invalid email address';
//   }
// }

// const validatePassword = (value: string) => {
//   if(!value) {
//     return 'Required field'
//   }
// }


// Использование Formik + yup

const validationSchema = yup.object().shape({
  // должны совпадать со значением атрибутов name в Field
  email: yup.string().required('Required field').email('Invalid email address'),
  password: yup.string().required('Required field'),
})

function App() {
  return (
    <>
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log('submit', values)
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.fildCont}>
              <label
                className={`${styles.label} ${errors.email && touched.email ? styles.errorLabel : ''}`}>
                Email
              </label>
              <div className={styles.fieldErr}>
                <Field
                  className={`${styles.field} ${errors.email && touched.email ? styles.errorInput : ''}`}
                  name='email'
                  // validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>
          </div>

          <div className={styles.fildCont}>
            <label
              className={`${styles.label} ${errors.password && touched.password ? styles.errorLabel : ''}`}>
              Password
            </label>
            <div className={styles.fieldErr}>
              <Field
                className={`${styles.field} ${errors.password && touched.password ? styles.errorInput : ''}`}
                name='password'
                type='password'
                // validate={validatePassword}
              />
              {errors.password && touched.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </div>
          </div>
            
          <button
            className={styles.button}
            type='submit'
          >
            Submit
          </button>

        </Form>
      )}
    </Formik>
    </>
  )
}

export default App
