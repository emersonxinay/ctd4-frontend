import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAnimationInput } from './hooks/useAnimationInput';


export const FormLogin = ({request}) => {
    const animationEmail = useAnimationInput();
    const animationPassword = useAnimationInput();

    return(
      <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('No es un email válido')
          .required('El email es obligatorio'),

        password: Yup.string()
          .min(6, 'Debe tener al menos 6 caracteres')
          .required('La contraseña es obligatoria')
      })}
      onSubmit={(values) => request(values)}
    >
      {({ errors }) => (
        <Form className='shadow-2xl p-5 rounded-xl border-1 border-zinc-300/60 bg-white'>
          <div className='my-5'>
            <Link to='/'>
              <img
                className='mx-auto h-12 w-auto my-5'
                src='https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-COLOR-HORIZONTAL.png'
                alt='DevSafio'
              />
            </Link>
            <h2 className='text-black text-center font-bold text-2xl mb-1'>
              Sign In
            </h2>
            <p className='mt-2 text-center text-sm text-black'>
              Or{' '}
              <span className='font-bold'>
                <Link to='/register'>Sign up</Link>
              </span>
            </p>
          </div>
          <div style={{position: "relative"}} className="my-4">
            <Field
              type='text'
              id='email'
              name='email'
              className='text-input'
              onFocus={() => animationEmail.focusAnimation()}
              onBlur={(e) => animationEmail.blurAnimation(e)}
            />
            <label
                  htmlFor='email'
                  className={`${
                    animationEmail.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Email
            </label>
            <ErrorMessage
              name='email'
              component={() => (
                <div className='text-red-600'>{errors.email}</div>
              )}
            />
          </div>

          <div style={{position: "relative"}} className="my-4">
            <Field
              type='password'
              id='password'
              name='password'
              className='text-input'
              onFocus={() => animationPassword.focusAnimation()}
              onBlur={(e) => animationPassword.blurAnimation(e)}
            />
            <label
                  htmlFor='password'
                  className={`${
                    animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Contraseña
            </label>
            <ErrorMessage
              name='password'
              component={() => (
                <div className='text-red-600'>{errors.password}</div>
              )}
            />
          </div>

          <button
            onSubmit={(value) => {}}
            type='submit'
            className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
          >
            Sing in
          </button>
          <p className='mt-4 text-center  text-black'>Or</p>

          <div className='flex justify-between mt-2'>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              Linkedin
            </button>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              Google
            </button>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              GitHub
            </button>
          </div>
        </Form>
      )}
    </Formik>
    )
}