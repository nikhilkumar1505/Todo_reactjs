import React, { useContext, useEffect } from "react";
import { RadioButtons, Dropdown, ProfileCard } from "./components";
import { RootContext } from "./context/RootContext";

function RandomUser() {
  const {
    state: { gender, nat },
    action: { getUser },
  } = useContext(RootContext);

  useEffect(() => {
    getUser(gender, nat);
  }, [gender, nat]);

  return (
    <>
      <RadioButtons />
      <Dropdown />
      <ProfileCard />
    </>
  );
}

export default RandomUser;
