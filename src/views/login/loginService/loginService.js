const axios = require('axios').default;

export const loginService = (credentials, authFail, setLoading) => {

        setTimeout(() => {
            return axios
            .post("http://localhost:3000/login/", credentials, {'Content-Type': 'application/json'})
            .then((response) => {
                window.localStorage.setItem("user", JSON.stringify(response.data));
                setLoading(false)
                window.location.reload();
            })
            .catch((error) => {
                setLoading(false)
                authFail(error.message);
            })
        }, 1500);
        
}