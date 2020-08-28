import axios from "axios";


const url="http://localhost:8000/api/";



export const register = async (newadmins,formData) => {
    return await axios
        .post(url+"register", newadmins,formData, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            console.log(response)
            return response
        })
        .catch(err => {
            console.log(err);
        });
};


export const login = async admins => {
    return await axios
        .post(
            url+"login",
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
        .get(url+"profile", {
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
        .post(url+"items/add", newItems, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};


export const getItems = () => {
    return axios
        .get(url+"items", {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            
            return response;
        })
        .catch(err => {
            console.log(err);
        });
};

export const postPhoto = async (id,formData) => {
    return await axios
        .post(url+"add/photo/"+id, formData, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response);
            return response
        })
        .catch(err => {
            console.log(err);
        });
};

