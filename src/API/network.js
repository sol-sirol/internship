const API_URL = "http://188.225.56.153:3000/booking";

export const api = {
  get: (apiMethod, params) => request(apiMethod, params, "GET"),
  post: (apiMethod, params) => request(apiMethod, params, "POST"),
  put: (apiMethod, params) => request(apiMethod, params, "PUT"),
  delete: (apiMethod, params) => request(apiMethod, params, "DELETE"),
};

const request = (apiMethod = "", params = {}, method) => {
  return new Promise((resolve, reject) => {
    const headers = new Headers({ "Content-Type": "application/json" });
    // headers.append('Content-Type', 'application/json')

    let options = {
      method,
      headers,
    };

    if (method != "GET") {
      if (!(Object.keys(params).length === 0)) {
        options.body = JSON.stringify(params);
      }
    }

    fetch(`${API_URL}${apiMethod}`, options)
      .then(checkResponse)
      .then((json) => {
        if (json.success == false || json.code === 0) {
          reject(json);
        } else resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const checkResponse = async (response) => {
  const { status } = response;
  switch (status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 422:
    case 400:
      return response.json();
    case 204:
      return { success: true };
    case 401:
    case 403:
      throw { status, message: "Неавторизован" };
    case 404:
      throw { status, message: "Не удалось найти запрос" };
    default:
      throw {
        status,
        message: "Произошла ошибка, пожалуйста попробуйте повторить позднее",
      };
  }
};

export default api;
