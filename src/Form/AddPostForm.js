import {Field, Formik} from "formik";
import * as Yup from "yup";
import classes from './AddPostForm.module.css'

const addPostForm = (props) => {
    const SignupSchema = Yup.object().shape({
        message: Yup.string()
            .min(2, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
    });

    return (
        <Formik
            initialValues={{message: ''}}
            onSubmit={(values, {setSubmitting}) => {
                props.addPostApi(values)
                values.message = ''
                setSubmitting(false)
            }}
            validationSchema={SignupSchema}
        >
            {({values, errors, handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' value={values.message}
                               className={errors.message ? [classes.error] : classes.input}
                               onBlur={handleBlur}
                               onChange={handleChange} name='message'/>
                        {errors.message && <span>{errors.message}</span>}
                    </div>
                    <div>
                        <button type='submit' disabled={isSubmitting}>Add post</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default addPostForm