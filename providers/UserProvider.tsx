"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

type Props = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
