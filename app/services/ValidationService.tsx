import { object, string, number, date, InferType } from 'yup';

const settings = {
    name: {
        min: 2,
        max: 50
    },
    password: {
        min: 8,
        max: 50,
        regexp: /^(?=.*\d).{8,}$/g
    }
}

const messages = {
    name: {
        min: "Too short name",
        max: "Too long name"
    },
    email: {
        invalid: "Please enter a valid email address"
    },
    password: {
        min: "Password is too short",
        max: "Password is too long",
        invalid: "Needs at least 8 chars long and 1 number"
    }
}

const validationSchemes = {
    name: object().shape({
        name: string()
        .min(settings.name.min, messages.name.min)
        .max(settings.name.max, messages.name.max)
    }),
    email: object().shape({
        email: string()
        .email(messages.email.invalid)
    }),
    password: object().shape({
        password: string()
        .min(settings.password.min, messages.password.min)
        .max(settings.password.max, messages.password.max)
        .matches(settings.password.regexp, messages.password.invalid)
    }),
    none: object().shape({})
}

export type validationSchemesType = keyof typeof validationSchemes;

const ValidationService = {
    validateString: (content: string, scheme: validationSchemesType) => (
        validationSchemes[scheme].validateSync({[scheme]: content})
    )
}

export default ValidationService;