// "use client";
// import dynamic from "next/dynamic";
// import React from "react";

// // Dynamically import the Image component
// const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

// import loginImage from "../../assets/loginImage.png";
// import Form from "@/components/Form";

// const Login = () => {
//   return (
//     <div className="bg-black flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-10">
//       <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
//         <DynamicImage
//           src={loginImage}
//           alt="login image"
//           className="w-full h-auto object-cover"
//           width={500}
//           height={500}
//           priority
//           quality={100}
//         />
//       </div>
//       <div className="flex bg-black justify-center items-center w-full md:w-1/2 p-4 md:p-10 text-white ">
//         <Form />
//       </div>
//     </div>
//   );
// };

// export default Login;



"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

// Dynamically import the Form and Image component with SSR disabled
const Form = dynamic(() => import("@/components/Form"), { ssr: false });
const ImageComponent = dynamic(() => import("next/image"), { ssr: false });

import loginImage from "../../assets/loginImage.png";

const Login = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure that this component is rendered only after the client-side mount
  }, []);

  // If not mounted yet, return nothing to avoid mismatches during SSR
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-black flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-10">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <ImageComponent
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
