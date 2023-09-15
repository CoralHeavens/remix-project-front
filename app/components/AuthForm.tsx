import { AuthFormInterface, GenericObject } from "~/constants/interfaces";
import Button from "./Button";
import { FormEvent, useState } from "react";
import FormField from "./FormField";

const AuthForm:React.FC<AuthFormInterface> = ({
    fields,
    isLoading,
    formSubmitLabel = '',
    onSubmit
}) => {
    const [isFieldsValid, updateIsFieldsValid] = useState<GenericObject<boolean>>(
        fields.reduce((acc, field) => ({
            ...acc,
            [field.name]: false
        }), {})
    )
    const isFieldValidArray = Object.values(isFieldsValid);

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        onSubmit((Object.values(event.currentTarget.children).slice(0, -1)
            .reduce((acc, label) => ({
            ...acc,
            [(label.children[0] as HTMLInputElement).name]: (label.children[0] as HTMLInputElement).value
        }), {})))
    }

    return (
        <form onSubmit={onFormSubmit} className="w-full flex flex-col items-center gap-7 mb-7">
            {fields.map(({ name, placeholder, type, validation }) => (
                <FormField
                    key={name}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    validation={validation}
                    onChange={(value: boolean) => {
                        updateIsFieldsValid(state => ({
                            ...state,
                            [name]: value
                        }))
                    }}
                />
            ))}
            <Button
                disabled={isLoading || isFieldValidArray.filter(value => value).length !== isFieldValidArray.length}
                label={formSubmitLabel}
                type="submit"
            />
        </form>
    )
}

export default AuthForm;