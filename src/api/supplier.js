import { axiosInstance } from "boot/axios";

export const apiGetSupplier = async () => {
  const { data } = await axiosInstance.get("/mrinnova/v2/proveedores/");
  return data;
};

export const apiCreateSupplier = async (payload) => {
  const { data } = await axiosInstance.post(
    "/mrinnova/v2/proveedores/",
    payload
  );
  return data;
};

export const apiEditSupplier = async (payload) => {
  const { data } = await axiosInstance.put(
    `/mrinnova/v2/proveedores/${payload.id}/`,
    payload
  );
  return data;
};

export const apiDeleteSupplier = async (payload) => {
  const { data } = await axiosInstance.delete(
    `/mrinnova/v2/proveedores/${payload.id}/`
  );
  return data;
};
