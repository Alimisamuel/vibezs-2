import axios from "axios";

const url = process.env.REACT_APP_API_URL

const apiClient = axios.create({
    baseURL: url,
    timeout: 120000,
  });


apiClient.interceptors.request.use(
    function (config) {

      // config.headers["Access-Control-Allow-Origin"] = "*";
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  });

  const waitlist = (email) =>{
    return apiClient.post("/join-waitlist", {email})
  }


  export {
    waitlist
  }