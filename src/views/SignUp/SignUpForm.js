import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from '../login/hooks/useAnimationInput';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const animationEmail = useAnimationInput();
  const animationPassword = useAnimationInput();
  const animationRepeatPassword = useAnimationInput();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        re_password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('No es un email válido')
          .required('El email es obligatorio'),

        password: Yup.string()
          .min(6, 'Debe tener al menos 6 caracteres')
          .required('La contraseña es obligatoria')
          .oneOf([Yup.ref('re_password')], 'Las contraseñas no son iguales'),

        re_password: Yup.string()
          .min(6, 'Debe tener al menos 6 caracteres')
          .required('La contraseña es obligatoria')
          .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
      })}
      onSubmit={(values) => {
        let url = 'http://localhost:3000/signup';
        axios
          .post(url, {
            email: values.email,
            password: values.password,
            re_password: values.re_password,
          })
          .then(function (response) {
            if (response.data) {
              console.log('Pasó autenticación usuario', response.data);
            }
          })
          .catch(function (error) {
            alert('ocurrió un error en la validación');
            console.log(error);
          });
        //console.log('values SignUpForm', values);
      }}
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
              Sign Up
            </h2>
            <p className='mt-2 text-center text-sm text-black'>
              Or{' '}
              <span className='font-bold'>
                <Link to='/login'>Sign in</Link>
              </span>
            </p>
          </div>
          <div>
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='Correo'
              className='text-input my-4'
              onFocus={() => animationEmail.focusAnimation()}
              onBlur={(e) => animationEmail.blurAnimation(e)}
            />
            <ErrorMessage
              name='email'
              component={() => (
                <div className='text-red-600'>{errors.email}</div>
              )}
            />
          </div>

          <div>
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='Contraseña'
              className='text-input my-4'
              onFocus={() => animationPassword.focusAnimation()}
              onBlur={(e) => animationPassword.blurAnimation(e)}
            />
            <ErrorMessage
              name='password'
              component={() => (
                <div className='text-red-600'>{errors.password}</div>
              )}
            />
          </div>

          <div>
            <Field
              type='password'
              id='rePassword'
              name='re_password'
              placeholder='Confirmar contraseña'
              className='text-input my-4'
              onFocus={() => animationRepeatPassword.focusAnimation()}
              onBlur={(e) => animationRepeatPassword.blurAnimation(e)}
            />
            <ErrorMessage
              name='re_password'
              component={() => (
                <div className='text-red-600'>{errors.re_password}</div>
              )}
            />
          </div>

          <button
            onSubmit={(value) => {}}
            type='submit'
            className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
          >
            Sing Up
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
  );
};

export default SignUpForm;
