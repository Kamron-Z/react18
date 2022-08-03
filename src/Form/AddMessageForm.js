import {Formik} from "formik";
import classes from "./AddMessageForm.module.css";

const AddMessageForm = (props) => {

    return (
        <Formik
            initialValues={{message: ''}}
            onSubmit={(values, {setSubmitting}) => {
                props.addMessageApi(values)
                setSubmitting(false)
                values.message = ''
            }}
            validate={(values) => {
                const errors = {}
                if (!values.message) {
                    errors.message = 'required'
                } else if (values.message.length <= 2) {
                    errors.message = 'min'
                } else if (values.message.length >= 30) {
                    errors.message = 'max 30'
                }
                return errors
            }}
        >
            {({values,handleSubmit, handleBlur, errors, isSubmitting, handleChange}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" onBlur={handleBlur} onChange={handleChange}
                               className={errors.message ? classes.error : classes.input }
                               placeholder='message' value={values.message} name='message'/>
                        {errors.message ? (<span>{errors.message}</span>) : null}
                    </div>
                    <div>
                        <button type='submit' disabled={isSubmitting}>Send</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default AddMessageForm