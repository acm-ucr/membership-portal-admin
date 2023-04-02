import { useState } from "react";
import { useZxing } from "react-zxing";
import axios from "axios";

const Checkin = () => {
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState(10);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      setMessage("");
    },
  });

  const addPoints = async () => {
    if (result === "") {
      setMessage("No Code Detected");
    } else {
      axios
        .post("/api/addPoints", { result, points })
        .then((response) => {
          setResult("");
          setMessage("Points Added");
        })
        .catch((error) => {
          setMessage("Error Scanning");
        });
      setMessage("Points Added");
    }

    snackBar();
  };

  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
      setResult("");
    }, 1000);
  };

  return (
    <div className="w-11/12 flex justify-center items-center flex-col">
      {showSnackBar && (
        <div
          className={`z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
        >
          {message}
        </div>
      )}

      <div className="flex justify-center items-center">
        <video ref={ref} className="w-10/12 border-8 border-acm-black mt-2" />
      </div>
      <div className="mt-2 text-3xl">
        <button
          onClick={() => setPoints(5)}
          className={`${
            points === 5 ? "bg-white text-black" : "bg-black text-white"
          } px-3 py-2 rounded`}
        >
          05
        </button>
        <button
          onClick={() => setPoints(10)}
          className={`${
            points === 10 ? "bg-white text-black" : "bg-black text-white"
          } px-3 py-2 rounded`}
        >
          10
        </button>
        <button
          onClick={() => setPoints(15)}
          className={`${
            points === 15 ? "bg-white text-black" : "bg-black text-white"
          } px-3 py-2 rounded`}
        >
          15
        </button>
        <button
          onClick={() => setPoints(20)}
          className={`${
            points === 20 ? "bg-white text-black" : "bg-black text-white"
          } px-3 py-2 rounded`}
        >
          20
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <button
          onClick={addPoints}
          className="px-3 py-2 my-2 rounded-xl text-white bg-black border-2 text-2xl border-white hover:!bg-white hover:!text-black"
        >
          Add Points
        </button>
        <p className="font-lexend text-3xl my-2">{result && "Code Detected"}</p>
      </div>
    </div>
  );
};

export default Checkin;
