import React from "react";
export const dynamic = "force-static";

function Banner() {
  return (
    <div className=" min-h-[20vh] flex flex-col justify-center">
      <h1 className=" text-2xl md:text-3xl font-bold text-gray-600">
        LOVE AND DESTINY
      </h1>
      <p className=" text-gray-500 font-medium mt-3">
        {`The more you love, the more it hurts. But don't believe in luck.`}
      </p>
    </div>
  );
}

export default Banner;
