import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { WS_BINANCE_BASE_URL } from "../const/constant";
import { getIcon } from "../apis/currency";

// Define the specific stream or combined stream URL
const streamUrl = `${WS_BINANCE_BASE_URL}/stream?streams=btcusdt@markPrice@1s`;
const icon = async () => {
  const i = await getIcon();
};
const HomePage = () => {
  const [price, setPrice] = useState(null);
  const [ic, setIc] = useState(icon);
  // Connect to the WebSocket stream using the combined URL
  const { lastMessage } = useWebSocket(streamUrl, {
    onOpen: () => {
      console.log("socket binance onpened");
      console.log(ic);
    },
    onClose: () => {
      console.log("socket binance closed");
    },
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const messageData = JSON.parse(lastMessage.data);
      setPrice(messageData.data.p);
    }
  }, [lastMessage]); // Run effect whenever lastMessage changes

  return (
    <div>
      <h1>
        BTC/USDT Price:{" "}
        {price ? `$${parseFloat(price).toFixed(2)}` : "Loading..."}
      </h1>

      <h1 className="text-3xl">Hello world!</h1>
    </div>
  );
};

export default HomePage;
