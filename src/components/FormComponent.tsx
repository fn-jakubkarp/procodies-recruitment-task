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
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                            placeholder="First Name"
                        />

                        <Field
                            name="lastName"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                            placeholder="Last Name"
                        />
                    </div>
                    <Field
                        name="street"
                        type="text"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                        placeholder="Street"
                    />
                    <div className="flex gap-4">
                        <Field
                            name="postalCode"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                            placeholder="Postal Code"
                        />

                        <Field
                            name="city"
                            type="text"
                            className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                            placeholder="City"
                        />
                    </div>
                    <Field
                        name="phoneNumber"
                        type="text"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                        placeholder="Phone Number"
                    />

                    <Field
                        name="email"
                        type="email"
                        className="w-full h-12 pl-4 border border-gray-medium rounded-[0.625rem] text-gray-dark focus:border-header focus:text-header focus:placeholder-header"
                        placeholder="Email"
                    />

                    <button
                        type="submit"
                        className="w-full bg-accent text-white h-12 my-6 rounded-[0.625rem] transition duration-2s00 ease-in-out transform hover:scale-95"
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
                    alt="McAfree certification badge"
                />
                <img
                    src={assets.truste_badge}
                    draggable="false"
                    className="w-auto h-auto object-cover"
                    alt="Truste certification badge"
                />
                <img
                    src={assets.bit256_badge}
                    draggable="false"
                    className="w-auto h-auto object-cover"
                    alt="256Bit encryption certification badge"
                />
            </div>
        </div>
    );
};

export default FormComponent;
