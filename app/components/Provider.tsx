"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children?: ReactNode;
  session?: any; // You can replace `any` with the actual session type if known
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
