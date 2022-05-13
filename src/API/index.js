const apiUrl = "http://188.225.56.153:3000/booking";

const getReserves = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }

  return await response.json();
};

const sendReserves = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Ошибка, статус: ${response.status}`);
  }
  return await response.json();
};

export { getReserves, sendReserves };
