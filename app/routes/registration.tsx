import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import { toast } from "react-toastify";
import AuthLayout from "~/components/AuthLayout";
import AuthSection from "~/components/AuthSection";
import FormSchemes from "~/constants/formSchemes";
import { GenericObject } from "~/constants/interfaces";
import AuthService from "~/services/AuthService";

const title = 'Welcome Remix';
const titleDescription = 'Welcome to Remix. Web framework';

const formSubmitLabel = 'Create an account';

const footerMessage = "Already have an account?";
const footerLabel = 'Login';
const footerLink = '/login';

const successPath = '/login';

const successMessage = 'Your account has been created';
const failMessage = 'Something went wrong creating account';

const RegistrationRoute:React.FC = () => {
    const [isLoading, updateIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    
    const onSubmit = (data: GenericObject<string>) => {
        updateIsLoading(true);

        AuthService.register(data)
            .then((res) => {
                if (res === undefined) {
                    toast.error(failMessage);
                    return;
                }
                toast.success(successMessage);
                navigate(successPath);
            }).finally(() => {
                updateIsLoading(false);
            })
    }

    return (
        <AuthLayout isLoading={isLoading}>
            <AuthSection
                title={title}
                titleDescription={titleDescription}
                formScheme={FormSchemes.registration}
                formSubmitLabel={formSubmitLabel}
                isLoading={isLoading}
                onSubmit={onSubmit}
                footerMessage={footerMessage}
                footerLabel={footerLabel}
                footerLink={footerLink}
            />
        </AuthLayout>
    );
}

export default RegistrationRoute;