import request from "./network";

export const getReserves = async () => {
  return await request.get("/booking");
};

export const sendReserves = async (data) => {
  return await request.post("/booking", data);
};

export const changeReserves = async (data) => {
  return await request.put("/booking", data);
};

export const deleteReserves = async (data) => {
  return await request.delete("/booking", data);
};
