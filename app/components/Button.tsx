import { ButtonInterface } from "~/constants/interfaces";

const Button:React.FC<ButtonInterface> = ({
    label = '',
    type = 'button',
    disabled = false,
    onClick = () => {}
}) => {
    return (
        <button
            className="w-full max-w-[420px] bg-black rounded-[30px] h-[50px] p-0 text-white disabled:opacity-60"
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {label}
        </button>
    )
}

export default Button;