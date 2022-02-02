import { axiosInstance } from "boot/axios";

export const apiGetInvoice = async () => {
    const { data } = await axiosInstance.get("/mrinnova/v2/facturas/");
    return data;
  };