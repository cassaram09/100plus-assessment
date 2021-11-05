import axios from "axios";

export default class API {
  constructor(url = "") {
    this.base = url;
  }

  get = async (path, options) => {
    try {
      const { data } = await axios.get(`${this.base}${path}`, options);
      return data;
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  };

  post = async (path, payload, options) => {
    try {
      const { data } = await axios.post(
        `${this.base}${path}`,
        payload,
        options
      );
      return data;
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  };
}
