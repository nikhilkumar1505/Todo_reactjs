import React, { useContext, useEffect } from "react";
import { RadioButtons, Dropdown, ProfileCard } from "./components";
import { ApiService } from "./services/Api.services";
import { RootContext } from "./services/RootContext";

function RandomUser() {
  const { gender, nat, setProfile } = useContext(RootContext);

  useEffect(() => {
    ApiService.getDetails(gender, nat).then((res: any) =>
      setProfile(res.results)
    );
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
