import { useState } from "react";
import { ButtonInterface } from "~/constants/interfaces"
import eyeOpen from '../images/eye-open.svg';
import eyeCross from '../images/eye-cross.svg';

const EyeButton:React.FC<ButtonInterface> = ({
    onClick = (value: boolean) => {}
}) => {
    const [isToggled, updateIsToggled] = useState<boolean>(false);

    const handleClick = () => {
        updateIsToggled(state => !state);

        onClick(isToggled)
    }

    return (
        <button className="hover:opacity-60 absolute right-4"
            onClick={handleClick}
            type="button"
        >
            <img src={isToggled ? eyeOpen : eyeCross} alt="" className="w-6 h-6" />
        </button>
    )
}

export default EyeButton;