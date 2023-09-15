import auth from '../images/auth-image.png';

const AuthImage: React.FC = () => {
    return (
        <img src={auth} className="hidden lg:block max-h-screen w-1/2 min-h-screen object-cover" alt="" />
    )
}

export default AuthImage;