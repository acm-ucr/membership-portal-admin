import { useState } from "react";
import { useZxing } from "react-zxing";
import axios from "axios";

const Checkin = () => {
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      setMessage("");
    },
  });

  const addPoints = async () => {
    axios
      .post("/api/addPoints", { result })
      .then((response) => {
        setResult("");
        setMessage("Points Added");
      })
      .catch((error) => {
        setMessage("Error Scanning");
      });
  };

  return (
    <div className="w-11/12 flex justify-center items-center">
      <div className="w-1/2 flex justify-center items-center">
        <video ref={ref} className="w-10/12 border-8 border-acm-blue" />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <p>Member Checkin</p>
        <p>{message}</p>
        <p>email: {result}</p>
        <button onClick={addPoints} className="border-2 border-black">
          Add Points
        </button>
      </div>
    </div>
  );
};

export default Checkin;
