import {Field, Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{email: '', password: '', isRemember: false}}
            // validate={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
            onSubmit={(values, {setSubmitting,setSubmit }) => {
                props.login(values.email, values.password, values.isRemember)
                setSubmitting(false)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='email'
                        />
                    </div>
                    {errors.email && touched.email && errors.email}
                    <div>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='password'
                        />
                    </div>
                    <div>
                        <Field type="checkbox" name='isRemember' checked={values.isRemember}/>
                    </div>
                    {props.errors && <div>{props.errors}</div>}
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errors: state.auth.errors
})

export default connect(mapStateToProps, {login})(Login)