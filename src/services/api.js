import { server } from "@/services/constants";
// import router from "@/router";
import httpClient from "@/services/httpClient";

// import * as DataList from "@/services/api_datalist.js"

const getDataList = () => {
    return httpClient.get(server.DATALIST_URL);
}
export default {
    getDataList,
  };