import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const schema = yup.object().shape({
  name: yup.string().required("Input your Name"),
  username: yup.string().required("Input your username"),
  password: yup
    .string()
    .required("Input your password")
    .min(6, "Password is too short")
    .max(12, "Password is too long"),
  confirm: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },setError
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
      className="max-w-[500px] bg-white shadow-2xl shadow-gray-700 rounded-sm px-5 py-2 flex flex-col gap-3"
    >
      <div className="flex flex-col mt-2">
        <label htmlFor="name" className="uppercase text-2xl font-serif">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm relative focus:border-blue-500 focus:outline-none"
          {...register("name")}
          placeholder="Name"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="username" className="uppercase text-2xl font-serif">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm relative focus:border-blue-500 focus:outline-none "
          {...register("username")}
          placeholder="Username"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>

      <div className="flex flex-col mt-2 relative">
        <label htmlFor="password" className="uppercase text-2xl font-serif">
          Password
        </label>
        <input
          type={show ? "text" : "password"}
          name="password"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm focus:border-blue-500 focus:outline-none"
          {...register("password")}
          placeholder="Password"
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

      <div className="flex flex-col mt-2">
        <label htmlFor="confirm" className="uppercase text-2xl font-serif">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm"
          className="w-[300px] h-[50px] border-2 border-gray-700 mt-2 pl-2 rounded-sm relative focus:border-blue-500 focus:outline-none "
          {...register("confirm")}
          placeholder="Confirm Password"
        />
        {errors.confirm && (
          <span className="text-red-500">{errors.confirm.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-[50px] bg-blue-500 mt-5 text-2xl shadow-lg shadow-blue-100 text-white rounded-sm font-bold uppercase hover:bg-blue-200"
      >
        SIGNUP
      </button>
    </form>
  );
}
