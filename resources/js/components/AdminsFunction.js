import axios from "axios";


const url="http://localhost:8000/api/";



export const register = async newadmins => {
    return await axios
        .post("http://localhost:8000/api/register", newadmins, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};

export const login = async admins => {
    return await axios
        .post(
            "http://localhost:8000/api/login",
            {
                email: admins.email,
                password: admins.password
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response => {
            localStorage.setItem("usertoken", response.data.token);
            return response.data.token;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getProfile = () => {
    return axios
        .get("http://localhost:8000/api/profile", {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

//             crud app

export const addItems = async newItems => {
    return await axios
        .post("http://localhost:8000/api/items/add", newItems, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};


