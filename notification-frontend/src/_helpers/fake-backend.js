export function configureFakeBackend(user) {
    return new Promise((resolve, reject) => {

   
    console.log(user);
            setTimeout(authenticate, 500);

            // route functions

            function authenticate() {
             
               
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.userId,
                    username: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                });
    }
    
        function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
        }
     });
}