import React, { useState } from "react";
import { CardContainer, images } from "../components/Card";

export const Details = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="flex justify-evenly border-x"
        style={{
          width: 1000,
          height: 1000,
        }}
      >
        <div className="w-128 h-128 border flex justify-between">
          <div className="flex flex-col justify-evenly">
            {images.map((e) => (
              <>
                <img src={e.imgPath} alt="" className="w-20 rounded-md	" />
                <img src={e.imgPath} alt="" className="w-20 rounded-md	" />
              </>
            ))}
          </div>

          <div className="w-96 h-full border overflow-hidden rounded-md	">
            <img
              src={images[1].imgPath}
              className="h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-72 h-128 border">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          corrupti ea incidunt placeat earum minus, enim aliquam minima! Error
          itaque minima placeat nisi sit architecto ut recusandae laudantium in
          dicta.
        </div>
      </div>
    </div>
  );
};
