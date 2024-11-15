import axios from "axios";

const url = import.meta.env.VITE_API_URL;
console.log(url)
/* const userToken = localStorage.getItem(""); */

const requestWithoutPermission = axios.create({
  baseURL: url,
});

/* const requestWithPermission = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
}); */

export { requestWithoutPermission };
