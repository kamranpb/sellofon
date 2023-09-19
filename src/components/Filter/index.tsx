import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { NumericFormatCustom } from "./textInput";
import { RadioInput } from "./RadioInput";
import { BRAND_LIST, CITIES_LIST, Phone_Memory_List } from "../../const";
const options = ["bla", "bla", "bla", "bla", "bla"];
export const FilterContainer = () => {
  interface FormData {
    brand: string;
    model: string;
    city: string;
    minPrice: string;
    maxPrice: string;
    status: string;
    memory: string;
  }
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const { handleSubmit, control, getValues, watch } = useForm<FormData>({
    defaultValues: {
      status: "allOf",
    },
  });
  const Wbrand = watch("brand");
  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
        <div className="w-full flex gap-5 ">
          <Controller
            name="brand"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                  onChange(newValue);
                }}
                inputValue={value}
                onInputChange={(event, newInputValue) => {
                  onChange(newInputValue);
                }}
                id="controllable-states-demo"
                options={BRAND_LIST}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Marka" />
                )}
              />
            )}
          />
          <Controller
            name="model"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Autocomplete
                disabled={Wbrand ? false : true}
                value={Wbrand ? value : ""}
                onChange={(event: any, newValue: string | null) => {
                  onChange(newValue);
                }}
                inputValue={value}
                onInputChange={(event, newInputValue) => {
                  onChange(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{
                  width: 300,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Model" sx={{ bg: "none" }} />
                )}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                  onChange(newValue);
                }}
                inputValue={value}
                onInputChange={(event, newInputValue) => {
                  onChange(newInputValue);
                }}
                id="controllable-states-demo"
                options={CITIES_LIST}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Şəhər" />
                )}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-between items-center my-5">
          <div className="flex  justify-between w-60">
            <Controller
              name="minPrice"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{
                    width: 114,
                  }}
                  label="Qiymət , min"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="standard"
                />
              )}
            />
            <Controller
              name="maxPrice"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{
                    width: 114,
                  }}
                  label="maksimum"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="standard"
                />
              )}
            />
          </div>
          <Controller
            name="status"
            control={control}
            defaultValue="new"
            render={({ field }) => (
              <RadioInput
                name="status"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="memory"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                  onChange(newValue);
                }}
                inputValue={value}
                onInputChange={(event, newInputValue) => {
                  onChange(newInputValue);
                }}
                id="controllable-states-demo"
                options={Phone_Memory_List}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Yaddaş tutumu" />
                )}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-end mt-3">
          <button
            type="submit"
            className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Elanları göstər
          </button>
        </div>
      </form>
      <input
        className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Axtar"
      />
    </div>
  );
};
