import { axiosInstance } from "boot/axios";

export const apiGetSales = async () => {
  const { data } = await axiosInstance.get("/mrinnova/v2/ventas/");
  return data;
};

export const apiCreateSale = async (payload) => {
  const { data } = await axiosInstance.post("/mrinnova/v2/ventas/", payload);
  return data;
};

export const apiEditSale = async (payload) => {
  const { data } = await axiosInstance.put(`/mrinnova/v2/ventas/${payload.id}/`, payload);
  return data;
};

export const apiDeleteSale = async (payload) => {
  const { data } = await axiosInstance.delete(
    `/mrinnova/v2/ventas/${payload.id}/`
  );
  return data;
};
