import { GenericObject } from "~/constants/interfaces";

const baseURL = 'https://dxdju2z91f.execute-api.us-east-1.amazonaws.com/dev';

const paths = {
    login: 'login-user',
    register: 'create-user'
}

const postRequest = (path: string, data: GenericObject<string>) => {
    return fetch(`${baseURL}/${path}`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.status === 200) {
                return (response as Response).json();
            };

            return undefined;
        })
        .catch(err => console.error(err));
}

const AuthService = {
    login: (data: GenericObject<string>) => (
        postRequest(paths.login, data)
    ),

    register: (data: GenericObject<string>) => (
        postRequest(paths.register, data)
    )
}

export default AuthService;