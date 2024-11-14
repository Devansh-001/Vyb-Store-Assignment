"use client"

import React from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import googleImage from '../assets/google.png';
import Image from 'next/image';
import Link from 'next/link';

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const Form = () => {
    const {
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    return (
        <form
            className="w-full max-w-md p-8 rounded-lg shadow-md"
        >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">Login</h2>

            <Link href="/login">
                <button
                    type="button"
                    className="flex items-center justify-center w-full mb-4 py-2 rounded-md transition-all border-2"
                >
                    <Image src={googleImage} alt="Google" className="h-5 w-5 mr-2" />
                    Login with Google
                </button>
            </Link>

            <div className="relative flex py-2 items-center mb-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="flex-shrink mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className=" text-sm font-medium mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full p-2 rounded-md bg-black outline-none border-b-2"


                />
                {errors.email && (
                    <p className="text-red-600 text-lg">{errors.email.message}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="password" className=" text-sm font-medium mb-1">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="w-full p-2 peer rounded-md bg-black outline-none border-b-2"
                />
                {errors.password && (
                    <p className="text-white text-lg mt-1">{errors.password.message}</p>
                )}
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    style={{
                        border: "4px solid transparent",
                        borderImage: "linear-gradient(to right, #4794FF, #FF5D5D) 1",
                        padding: "8px 15px",
                    }}
                >

                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4794FF] to-[#FF5D5D]">
                        Login
                    </span>

                </button>
            </div>

            <p className="text-center text-sm mt-4">
                Don’t have an account?{" "}
                <a href="/" className="text-green underline">
                    Get Started
                </a>
            </p>
        </form>

    )
}

export default Form
