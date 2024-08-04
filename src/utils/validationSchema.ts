import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    street: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});
