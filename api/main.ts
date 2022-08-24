import restApi from "./restApi";

export const getAccount = async () => {
  try {
    const response = await restApi.get("/users/me");
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
