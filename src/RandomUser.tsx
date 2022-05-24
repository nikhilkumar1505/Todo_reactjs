import React, { useContext, useEffect } from "react";
import { RadioButtons, Dropdown, ProfileCard } from "./components";
import { RootContext } from "./services/RootContext";
import { useAppDispatch } from "../src/hooks";
import { getRandomUser } from "./redux/actions";

function RandomUser() {
  const { gender, nat } = useContext(RootContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomUser(gender, nat));
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
