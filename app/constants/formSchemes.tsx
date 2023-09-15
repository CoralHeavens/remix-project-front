import { FormFieldPresetInterface, GenericObject } from "./interfaces";

const FormSchemes: GenericObject<FormFieldPresetInterface[]> = {
    registration: [
        {
            placeholder: 'Name',
            validation: 'name',
            name: 'name',
            type: 'text'
        },
        {
            placeholder: 'Email',
            validation: 'email',
            name: 'email',
            type: 'text'
        },
        {
            placeholder: 'Password',
            validation: 'password',
            name: 'password',
            type: 'password'
        }
    ],

    login: [
        {
            placeholder: 'Email',
            validation: 'email',
            name: 'email',
            type: 'text'
        },
        {
            placeholder: 'Password',
            validation: 'none',
            name: 'password',
            type: 'password'
        }
    ]
}

export default FormSchemes;