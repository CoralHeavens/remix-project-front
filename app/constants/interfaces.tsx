export interface GenericObject<T> {
    [key: string]: T
}

export type inputType = 'password' | 'text';

export interface FormFieldPresetInterface {
    placeholder: string;
    validation: string;
    name: string;
    type: inputType
}

export interface FormFieldInterface extends FormFieldPresetInterface {
    onChange: (value: boolean) => void;
}

export interface AuthFormInterface {
    fields: FormFieldPresetInterface[],
    formSubmitLabel?: string,
    isLoading?: boolean,
    onSubmit: (data: GenericObject<string>) => void
}

export type buttonType = 'button' | 'submit' | 'reset' | undefined; 

export interface ButtonInterface {
    label?: string,
    type?: buttonType,
    disabled?: boolean,
    onClick?: () => void
}

export interface ValidationElementInterface {
    regexp: RegExp,
    message: string
}