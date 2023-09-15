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

const formSubmitLabel = 'Login';

const footerMessage = "Don't have an account yet?";
const footerLabel = 'Create an account';
const footerLink = '/registration';

const successPath = '/profile';

const greetingMessage = (name: string) => `Welcome to Remix, ${name}`;
const failMessage = 'Failed to login, please try again';

const LoginRoute:React.FC = () => {
    const [isLoading, updateIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const onSubmit = (data: GenericObject<string>) => {
        updateIsLoading(true);

        AuthService.login(data)
            .then((res) => {
                if (res === undefined) {
                    toast.error(failMessage);
                    return;
                }
                toast.success(greetingMessage((res as GenericObject<string>).name ?? 'user'));
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
                formScheme={FormSchemes.login}
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

export default LoginRoute;