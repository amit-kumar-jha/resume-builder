import AuthForm from "@/app/components/AuthForm";
import AuthFormSimpleBg from "@/app/components/AuthForm/AuthFormSimpleBg";
import AuthFormVariantsBg from "@/app/components/AuthForm/AuthFormVariantsBg";
import ChainAnimation from "@/app/components/AuthForm/ChainAnimation";
import ThreeAnimationBg from "@/app/components/AuthForm/ThreeAnimationBg";
import React from "react";
// import AuthForm from "../components/AuthForm";

const page = () => {
  return (
    <div>
      {/* <AuthFormSimpleBg isSignup={true} /> */}
      {/* <AuthFormVariantsBg isSignup={true} /> */}
      {/* <ChainAnimation isSignup={true} /> */}
      <ThreeAnimationBg isSignup={true} />
    </div>
  );
};

export default page;
