import AuthImage from "./AuthImage";
import LoadingSpinner from "./LoadingSpinner";
import Logo from "./Logo";

type Props = {
    children: JSX.Element,
    isLoading: boolean
}

const AuthLayout: React.FC<Props> = ({
    children,
    isLoading
}) => {
    return (
        <main className="relative w-full min-h-[100vh] flex justify-center items-center">
            {children}
            <Logo />
            <AuthImage />
            {isLoading && (
                <LoadingSpinner />
            )}
        </main>
    )
}

export default AuthLayout;