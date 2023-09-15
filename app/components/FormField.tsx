import { ChangeEvent, useState } from "react";
import { FormFieldInterface, inputType } from "~/constants/interfaces";
import EyeButton from "./EyeButton";
import joinClassNames from "~/helpers/joinClassNames";
import ValidationService, { validationSchemesType } from "~/services/ValidationService";

const fieldLimit = 50;

const FormField:React.FC<FormFieldInterface> = ({
    name,
    placeholder,
    validation,
    type,
    onChange
}) => {
    const [invalid, updateInvalid] = useState<string | undefined>();
    const [localType, updateLocalType] = useState<inputType>(type);

    const handleChange = (event: ChangeEvent) => {
        const currentValue = (event.target as HTMLInputElement).value;
        try {
            ValidationService.validateString(currentValue, validation as validationSchemesType );
            updateInvalid(undefined);
            onChange(true);
        } catch (error) {
            updateInvalid(`${(error as  Error).message}`);
            onChange(false);
        }
    }

    const toggleType = () => {
        if (localType === 'password') {
            updateLocalType('text');
        } else {
            updateLocalType('password');
        }
    }

    return (
        <label className={joinClassNames(
            "relative transition-none w-full max-w-[420px] border-[1px] rounded-md flex items-center",
            invalid ? "border-[#ff3a3a] text-[#ff3a3a]" : "border-[#D2D2D2]"
        )}>
            <input
                className="w-full px-5 h-[50px] rounded-md"
                name={name}
                placeholder={placeholder}
                type={localType}
                onChange={handleChange}
                maxLength={fieldLimit}
            />

            {type === 'password' && <EyeButton onClick={toggleType} />}

            {invalid && (
                <div className="absolute transition-none text-xs md:text-sm -bottom-[20px] md:-bottom-[22px] left-0">
                    {invalid}
                </div>
            )}
        </label>
    )
}

export default FormField;