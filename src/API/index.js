const apiUrl = "http://188.225.56.153:3000/booking";

const getReserves = async () => {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }

  return await response.json();
};

const sendReserves = async (data) => {
  const response = await fetch(apiUrl, {
    method: "POST",

    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }
  return await response.json();
};

const changeReserves = async (data) => {
  const response = await fetch(apiUrl, {
    method: "PUT",

    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }
  return await response.json();
};

const deleteReserves = async (id) => {
  const response = await fetch(apiUrl, {
    method: "DELETE",

    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(id),
  });

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }
  return await response.json();
};

export { getReserves, sendReserves, changeReserves, deleteReserves };
