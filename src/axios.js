import axios from "axios";
// import {axiosClient} from "./axiosClient";
const url="http://localhost:8080"
const getAllPost = (data) => {
    console.log('data :>> ', data);
  return axios.post(`${url}/test/create`,data);
}

export {getAllPost};
