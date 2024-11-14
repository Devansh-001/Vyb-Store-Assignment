"use client";
import Image from "next/image";
import React from "react";
import loginImage from "../../assets/loginImage.png";
import Form from "@/components/Form";

const Login = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-10">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src={loginImage}
          alt="login image"
          className="w-full h-auto object-cover"
          width={500}
          height={500}
          priority
          quality={100}
        />
      </div>
      <div className="flex bg-black justify-center items-center w-full md:w-1/2 p-4 md:p-10 text-white ">
        <Form />
      </div>


    </div>
  );
};

export default Login;





