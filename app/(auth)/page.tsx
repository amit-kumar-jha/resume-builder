import React from "react";
import AuthForm from "../components/AuthForm";
import ThreeAnimationBg from "../components/AuthForm/ThreeAnimationBg";

const page = () => {
  return (
    <div>
      {/* <AuthForm isSignup={false} />
       */}
      <ThreeAnimationBg isSignup={false} />
    </div>
  );
};

export default page;
