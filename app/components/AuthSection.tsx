import { FormFieldPresetInterface, GenericObject } from "~/constants/interfaces";
import AuthFooter from "./AuthFooter";
import AuthForm from "./AuthForm";

type Props = {
    title: string,
    titleDescription: string,
    formScheme: FormFieldPresetInterface[],
    formSubmitLabel: string,
    isLoading: boolean,
    onSubmit: (data: GenericObject<string>) => void,
    footerMessage: string,
    footerLabel: string,
    footerLink: string
}

const AuthSection:React.FC<Props> = ({
    title,
    titleDescription,
    formScheme,
    formSubmitLabel,
    isLoading,
    onSubmit,
    footerMessage,
    footerLabel,
    footerLink
}) => {
    return (
            <section className="flex flex-col items-center w-full md:w-1/2 pt-[50px] px-6">
                <div className="flex flex-col items-center gap-5 mb-16">
                    <div className="text-5xl md:text-[68px] md:leading-[72px] uppercase text-center">
                        {title}
                    </div>
                    <div className="text-xl text-center">
                        {titleDescription}
                    </div>
                </div>
                <AuthForm
                    fields={formScheme}
                    isLoading={isLoading}
                    formSubmitLabel={formSubmitLabel}
                    onSubmit={onSubmit}
                />
                <AuthFooter
                    message={footerMessage}
                    label={footerLabel}
                    link={footerLink}
                />
            </section>
    )
}

export default AuthSection;