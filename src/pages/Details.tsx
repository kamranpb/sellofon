import React, { useState } from "react";
import { CardContainer, images } from "../components/Card";
import { ImArrowUp } from "react-icons/im";
import { RiVipDiamondFill, RiVipCrown2Fill } from "react-icons/ri";
import profileDefault from "./profile-default.png";
import { CardMockData } from "../const";
export const Details = () => {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <div
        className="flex flex-col justify-between"
        style={{
          width: 924,
        }}
      >
        <div className="flex justify-between ">
          <div className="w-128 flex flex-col mb-20">
            <div className=" h-128 flex justify-between mt-10">
              <div className="flex flex-col gap-5">
                {images.map((e) => (
                  <>
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
            <div className="mt-20 pb-10 ">
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">Marka:</p>
                <p className="text-lg">Samsung</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">Model:</p>
                <p className="text-lg">A 52</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">Şəhər:</p>
                <p className="text-lg">Yevlax</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">Vəziyyəti:</p>
                <p className="text-lg">Yeni</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">
                  Operativ yaddaş tutumu, RAM (GB):
                </p>
                <p className="text-lg">64 GB</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">Əlavə olaraq:</p>
                <p className="text-lg">Zəmanət talonu, qutusu</p>
              </div>
              <div className="flex w-128 justify-between">
                <p className="text-lg text-slate-500	">
                  Ən yaxın əlverilişli ünvan:
                </p>
                <p className="text-lg w-60 text-right">
                  Xəqani küç, Bazarstorun yanı
                </p>
              </div>
            </div>
            <div className="border w-full px-2 py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, praesentium sapiente tempore quas molestias ratione,
              dolorem quis cumque sit aperiam nostrum dolore adipisci culpa iste
              animi quidem repellat magni aliquid.
            </div>
          </div>
          <div className="w-72 h-96 mt-10 sticky top-12">
            <div className="rounded-lg bg-slate-50 border py-6	">
              <p className="text-2xl font-bold border-b pb-6 px-2 mx-4 ">
                247 AZN
              </p>
              <div className="flex items-center justify-between  mx-4 my-6 mb-10">
                <div>
                  <p className="text-lg font-medium">Huseyn</p>
                  <p className="text-sm font-light	">Bakı</p>
                </div>
                <img src={profileDefault} alt="" className="w-11" />
              </div>
              {showNumber ? (
                <div className="px-6 mx-4 py-6 border-b">
                  <p className="font-bold text-xl">(070) 684-34-89</p>
                </div>
              ) : (
                <div
                  className="border bg-lime-600 hover:bg-lime-800 ease-in-out duration-300 py-3 cursor-pointer px-9 mx-4 rounded-lg flex flex-col border-b"
                  onClick={() => setShowNumber(true)}
                >
                  <p className="text-md font-semibold text-white">
                    Nömrəni göstər
                  </p>
                  <p className=" text-xl text-white mt-2">(070) 684-34-...</p>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-3">
              <div className="px-3 py-2 bg-slate-100 rounded-md hover:outline outline-blue-500 ease-in-out duration-100">
                <div className="flex flex-col cursor-pointer">
                  <p className="font-semibold"> İrəli çək</p>
                  <div className="flex">
                    <p className="text-sm text-blue-600	mr-2">2 AZN</p>
                    <ImArrowUp className="text-lime-600" />
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-md hover:outline outline-blue-500 ease-in-out duration-100">
                <div className="flex flex-col cursor-pointer">
                  <p className="font-semibold">VIP et</p>
                  <div className="flex">
                    <p className="text-sm text-blue-600 mr-1">4 AZN</p>
                    <RiVipDiamondFill className="text-red-500" />
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-md hover:outline outline-blue-500 ease-in-out duration-100">
                <div className="flex flex-col cursor-pointer ">
                  <p className="font-semibold">Premium</p>
                  <div className="flex">
                    <p className="text-sm text-blue-600 mr-2">3 AZN</p>
                    <RiVipCrown2Fill className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-12">
          <p className="text-2xl font-bold my-12">
            Uyğun məhsulları nəzərdən keçirin
          </p>
          <div className="flex justify-start gap-9 flex-wrap flex-start">
            {CardMockData.map((card) => (
              <>
                <CardContainer
                  name={`${card?.brand} ${card?.model}`}
                  key={card.id}
                  imgPath={card?.imgPath}
                  location={`${card?.city}, ${card?.country}`}
                  price={card?.price}
                  number={card?.number}
                  date={card?.date}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
