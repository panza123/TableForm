import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
const schema = yup.object().shape({
  username: yup.string().required("Please input your username"),
  password: yup
    .string()
    .required("Please input your password")
    .min(6, "Password is too short")
    .max(12, "Password is too long"),
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

  };
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[500px] bg-white shadow-2xl  shadow-gray-700 rounded-sm  px-5 py-2 flex flex-col gap-3 "
    >
      <div className="flex flex-col mt-2">
        <label htmlFor="username" className="uppercase text-2xl  font-serif">
          username
        </label>
        <input
          type="text"
          name="username"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm relative focus:border-blue-500 focus:outline-none"
          {...register("username")}
          placeholder="username"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="password" className="uppercase text-2xl  font-serif">
          password
        </label>
        <input
          type={show ? "text" : "password"}
          name="password"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm focus:border-blue-500 focus:outline-none "
          {...register("password")}
          placeholder="password"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <div
          className="absolute top-[55px] right-2 cursor-pointer"
          onClick={handleClick}
        >
          {!show ? <IoEyeOffSharp /> : <IoEye />}
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[50px] bg-blue-500 mt-5 text-2xl
      shadow-lg shadow-blue-100
      text-white rounded-sm font-bold uppercase hover:bg-blue-200"
      >
        LOGIN
      </button>
    </form>
  );
}
