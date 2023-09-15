import { Link } from "@remix-run/react"

type Props = {
    message: string,
    label: string,
    link: string
}

const AuthFooter:React.FC<Props> = ({
    message,
    label,
    link
}) => {
    return (
        <footer className="w-full flex justify-center gap-2">
            <span className="">
                {message}
            </span>
            <Link
                className="text-[#FEC00F]"
                to={link}
            >
                {label}
            </Link>
        </footer>
    )
}

export default AuthFooter;