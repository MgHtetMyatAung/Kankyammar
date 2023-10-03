"use client";

import { useState } from "react";
import Input from "./Input";
import Banner from "./Banner";
import { BsBalloonHeart, BsFillHeartFill } from "react-icons/bs";
import axios from "axios";
import Image from "next/image";

function Main() {
  const [yourName, setYourName] = useState("");
  const [pName, setPName] = useState("");
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: {
        sname: yourName,
        fname: pName,
      },
      headers: {
        "X-RapidAPI-Key": "13db636eecmshf450d654e8e5c2dp16fdedjsn8d903d16666e",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };
    setLoading(true);
    const response = await axios.request(options);
    setText(response.data);
    setLoading(false);
    setYourName("");
    setPName("");
  };
  return (
    <section>
      <div className="container mx-auto min-h-[calc(100vh-120px)]">
        <Banner />
        <form onSubmit={handleSubmit} className=" mt-5 lg:mt-3">
          <div className=" grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className=" md:col-span-2 relative">
              <Input
                value={yourName}
                setValue={setYourName}
                placeholder={"Your Name"}
                className={" p-3 focus:outline-none border rounded-md w-full"}
              />
              <BsBalloonHeart
                size={23}
                className=" absolute right-3 top-3 text-[#777]"
              />
            </div>
            <div className=" md:col-span-2 relative">
              <Input
                value={pName}
                setValue={setPName}
                placeholder={"Lover's Name"}
                className={" p-3 focus:outline-none border rounded-md w-full"}
              />
              <BsBalloonHeart
                size={23}
                className=" absolute right-3 top-3 text-[#777]"
              />
            </div>
            <div className="">
              <button
                className={`p-3 ${
                  loading ? " bg-red-300" : "bg-red-500"
                }  rounded-md text-white font-medium w-full text-center`}
                disabled={loading}
              >
                Love Calculate
              </button>
            </div>
          </div>
        </form>
        {text ? (
          <div className=" mt-5">
            <div
              className="p-3 bg-red-200 rounded-md"
              onClick={() => setText(null)}
            >
              <div className=" flex items-center gap-3 bg-transparent mb-3">
                <p className=" bg-transparent font-semibold">{text?.sname}</p>
                <span className=" bg-transparent">&</span>
                <p className=" bg-transparent font-semibold">{text?.fname}</p>
              </div>
              <p className=" bg-transparent flex justify-between gap-3">
                {text?.result}
                {text?.percentage > 50 ? (
                  <Image
                    src={"/okay.png"}
                    alt="okay tal"
                    width={32}
                    height={32}
                    className=" bg-transparent"
                  />
                ) : (
                  <Image
                    src={"/sorry.png"}
                    alt="okay tal"
                    width={32}
                    height={32}
                    className=" bg-transparent"
                  />
                )}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Main;
