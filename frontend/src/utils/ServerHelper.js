import { backendUrl } from "./config";
import Cookies from "js-cookie";


export const makePost = async (route, body) => {
  const response = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

export const makeAuthPost = async (route, body) => {
    const token=getToken();
  const response = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

export const makeAuthGet = async (route) => {
  const token=getToken();
const response = await fetch(backendUrl + route, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // body: JSON.stringify(body),
});
const formattedResponse = await response.json();
return formattedResponse;
};
const getToken =()=>{
//   const accessToken = document.cookie.replace(
//     /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
//     "$1"
// );
const accessToken= Cookies.get("token");
    return accessToken;
};
