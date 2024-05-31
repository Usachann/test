import { baseApi } from "~/services/baseApi.js";

export async function getDevelopersData() {
  try {
    const responce = await baseApi.get("/objects");
    const allDatas = responce.data;
    return allDatas;
  } catch (e) {
    console.log("Error fetchting developers data", e);
  }
}

export async function getDeveloperById(id) {
  try {
    const response = await baseApi.get(`/objects/${id}`);
    const developerData = response.data;
    return developerData;
  } catch (e) {
    console.log("Error fetching developer data by id", e);
  }
}
