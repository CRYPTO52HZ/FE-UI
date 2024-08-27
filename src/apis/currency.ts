import axios from "axios";

export const getIcon = async () => {
  try {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
