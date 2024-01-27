import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is a required field')
        .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
    email: yup.string().email('Invalid email format').required('Gmail is a required field'),
    topic: yup.string().required('Topic is a required field'),
    message: yup.string().required('Message is a required field')
});