import { Formik, Form, Field } from 'formik';
import { validationSchema } from '@/utils/validationSchema';
import { assets } from '@/constants/assets';

const FormComponent: React.FC = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        street: '',
        postalCode: '',
        city: '',
        phoneNumber: '',
        email: '',
    };

    const onSubmit = (values: typeof initialValues) => {
        console.log(values);
    };

    return (
        <div className="flex flex-col rounded-[1.25rem] border-gray-light border-1 border p-6">
            <h3 className="text-header text-[2rem] font-medium text-center pb-6">
                Enter details
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex gap-4 flex-col">
                    <div className="flex gap-4">
                        <Field
                            name="firstName"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                            placeholder="First Name"
                        />

                        <Field
                            name="lastName"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                            placeholder="Last Name"
                        />
                    </div>
                    <Field
                        name="street"
                        type="text"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                        placeholder="Street"
                    />
                    <div className="flex gap-4">
                        <Field
                            name="postalCode"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                            placeholder="Postal Code"
                        />

                        <Field
                            name="city"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                            placeholder="City"
                        />
                    </div>
                    <Field
                        name="phoneNumber"
                        type="text"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                        placeholder="Phone Number"
                    />

                    <Field
                        name="email"
                        type="email"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark"
                        placeholder="Email"
                    />

                    <button
                        type="submit"
                        className="w-full bg-accent text-white h-12 my-6 rounded-[0.625rem] hover:bg-green-800"
                    >
                        PROCEED TO PAYMENT
                    </button>
                </Form>
            </Formik>
            <div className="flex gap-4 justify-center">
                <img
                    src={assets.mcafree_badge}
                    draggable="false"
                    className="w-auto h-auto object-cover"
                />
                <img
                    src={assets.truste_badge}
                    draggable="false"
                    className="w-auto h-auto object-cover"
                />
                <img
                    src={assets.bit256_badge}
                    draggable="false"
                    className="w-auto h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default FormComponent;
