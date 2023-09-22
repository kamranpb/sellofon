import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CardContainer } from "../components/Card";
import { FilterContainer } from "../components/Filter";
import { ImLocation } from "react-icons/im";
import { CardMockData } from "../const";
export function Main() {
  const [location, setLocation] = useState({ country: "", city: "" });

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          country: data?.countryName,
          city: data?.city,
        });
      });
  };

  const error = (err: any) => console.log(err);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <section className="flex justify-center items-center flex-col">
      <div
        className="mt-8 px-3"
        style={{
          width: 946,
        }}
      >
        {location.country && (
          <div className="my-5 flex items-center text-blue-900">
            <ImLocation />
            <p className="ml-1 text-lg text-blue-800">
              {location.country}, {location.city}
            </p>
          </div>
        )}
        <div className="flex gap-9 mb-20 flex-wrap ">
          <FilterContainer />
          {CardMockData.map((card) => (
            <CardContainer
              name={`${card?.brand} ${card?.model}`}
              key={card.id}
              imgPath={card?.imgPath}
              location={`${card?.city}, ${card?.country}`}
              price={card?.price}
              number={card?.number}
              date={card?.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
