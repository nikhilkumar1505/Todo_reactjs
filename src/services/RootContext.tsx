import React, { createContext, useState } from "react";

export const RootContext = createContext<null | any>(null);

type ContextProps = {
  children: JSX.Element;
};

export const Rootprovider = ({ children }: ContextProps) => {
  const [gender, setGender] = useState("All");
  const [nat, setNat] = useState("AU");
  const [profile, setProfile] = useState([]);
  return (
    <RootContext.Provider
      value={{ profile, setProfile, gender, setGender, nat, setNat }}
    >
      {children}
    </RootContext.Provider>
  );
};
