import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://backend-pokemon.vercel.app/",
});
export default pokeApi;
