import { useState } from "react";
import Rate from "./Rate";
import Result from "./Result";

function App() {
  const rates = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(null);
  const [done, setDone] = useState(false)
  return (
    <div >
      <div className="bg-[#d6e2f0] dark:bg-[#121417] h-[100vh] flex items-center justify-center">
        <div className=" bg-white shadow-lg dark:shadow-none dark:bg-[#252d37]  text-white  w-[350px]  rounded-[30px]  ">

          {!done && <Rate done={done} setDone={setDone} rates={rates} rate={rate} setRate={setRate} />}
          {done && <Result rate={rate} />}
        </div>
      </div>
    </div>
  );
}

export default App;
