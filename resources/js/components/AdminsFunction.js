import axios from "axios";


const url="http://localhost:8000/api/";



export const register = async (newadmins) => {
    return await axios
        .post(url+"register", newadmins, {
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

export const getProfile =async () => {
    return await axios
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

export const addItems = async (formData) => {
    return await axios
        .post(url+"items/add",formData,  {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` },
            
        },
        
        )
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


export const getAdmin = (id) => {
    return axios
        .get(url+"Admin/"+id, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const updateProfile = async (id,newAdmins) => {
    return await axios
        .post(url+"Admin/update/"+id, newAdmins, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response);
            return response.date
        })
        .catch(err => {
            console.log(err);
        });
};

export const handlePage = (pageNumber) => {
    return axios
        .get(url+"items?page="+pageNumber, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            
            return response;
        })
        .catch(err => {
            console.log(err);
        });
};