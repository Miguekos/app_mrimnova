import { axiosInstance } from "boot/axios";

export const apiGetProduct = async () => {
  const { data } = await axiosInstance.get("/mrinnova/v2/productos/");
  return data;
};

export const apiCreateProduct = async (payload) => {
  const { data } = await axiosInstance.post("/mrinnova/v2/productos/", payload);
  return data;
};

export const apiEditProduct = async (payload) => {
  const { data } = await axiosInstance.put(`/mrinnova/v2/productos/${payload.id}/`, payload);
  return data;
};

export const apiDeleteProduct = async (payload) => {
  const { data } = await axiosInstance.delete(
    `/mrinnova/v2/productos/${payload.id}/`
  );
  return data;
};
