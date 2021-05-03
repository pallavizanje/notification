import { configureFakeBackend } from '../_helpers/fake-backend';

export const userService = {
    login,
    logout,
    getNotification,
    getById
};

function login(username) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

   return fetch(`http://localhost:8080/user/?userName=${username}`, requestOptions)
       .then(handleResponse)
        .then(user => {
            configureFakeBackend(user);
            return user;
        });
}

function logout() {
    
}

function getNotification() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:8080/notification`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log(response, "response");
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}