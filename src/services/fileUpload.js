import apiCall from "./apiConfig";



const formData = new FormData();
formData.append("avatar", file);
const res = await apiCall("users/upload", "POST", formData);
console.log(res.data);


/// demo the data parameter should be an object consisting of key and it's value
const resT = await apiCall("users/profile", "POST", data);
console.log(resT.data);

