import { axiosInstance } from "boot/axios";

export const apiGetService = async () => {
  const { data } = await axiosInstance.get("/mrinnova/v2/servicios/");
  return data;
};

export const apiCreateService = async (payload) => {
  const { data } = await axiosInstance.post("/mrinnova/v2/servicios/", payload);
  return data;
};

export const apiEditService = async (payload) => {
  const { data } = await axiosInstance.put(`/mrinnova/v2/servicios/${payload.id}/`, payload);
  return data;
};

export const apiDeleteService = async (payload) => {
  const { data } = await axiosInstance.delete(
    `/mrinnova/v2/servicios/${payload.id}/`
  );
  return data;
};
