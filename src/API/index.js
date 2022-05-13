import request from "./network";

export const getReserves = async () => {
  return await request.get();
};

export const sendReserves = async (data) => {
  return await request.post("", data);
};

export const changeReserves = async (data) => {
  return await request.put("", data);
};

export const deleteReserves = async (data) => {
  return await request.delete("", data);
};
