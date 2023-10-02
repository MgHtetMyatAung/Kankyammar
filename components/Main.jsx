"use client";

import { useState } from "react";
import Input from "./Input";

function Main() {
  const [text, setText] = useState("");
  const [datas, setDatas] = useState({
    y_name: "",
    p_name: "",
  });
  return (
    <section>
      <div className="container mx-auto">
        <form action="">
          <div className=" grid grid-cols-5">
            <div className=" col-span-2">
              <Input
                value={datas.y_name}
                setValue={setDatas}
                placeholder={"Your Name"}
                className={" p-3 focus:outline-none"}
              />
            </div>
            <div className=" col-span-2">
              <Input
                value={datas.p_name}
                setValue={setDatas}
                placeholder={"Other Name"}
                className={" p-3 focus:outline-none"}
              />
            </div>
            <div className="">
              <button className=" p-3 bg-red-500 rounded-md text-white font-medium">Calculate</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Main;
