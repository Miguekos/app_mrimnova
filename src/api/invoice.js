import { axiosInstance } from "boot/axios";

export const apiGetInvoice = async () => {
  const { data } = await axiosInstance.get("/mrinnova/v2/facturas/");
  return data;
};

export const apiCreateInvoice = async (payload) => {
  const { data } = await axiosInstance.post("/mrinnova/v2/facturas/", payload);
  return data;
};

export const apiEditInvoice = async (payload) => {
  const { data } = await axiosInstance.put(
    `/mrinnova/v2/facturas/${payload.id}/`,
    payload
  );
  return data;
};

export const apiDeleteInvoice = async (payload) => {
  const { data } = await axiosInstance.delete(
    `/mrinnova/v2/facturas/${payload.id}/`
  );
  return data;
};
