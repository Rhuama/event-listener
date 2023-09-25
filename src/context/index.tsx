"use client"; // This is a client component

import { ReactNode } from "react";

import { AuthProvider } from "./appContext";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
