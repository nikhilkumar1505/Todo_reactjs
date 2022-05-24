import React from "react";
import { useAppSelector } from "../../hooks";
import "./style.css";

function ProfileCard() {
  const profile = useAppSelector((state) => state.randomUserReducer.user);

  return (
    <>
      {profile?.map((details: any, index: number) => {
        const { email, name, picture } = details;
        return (
          <div className="profile-card">
            <img
              src={picture?.thumbnail}
              alt="profile"
              className="profile-pic"
            />
            <div className="details-section">
              <p>{`${name?.title} ${name?.first} ${name?.last}`}</p>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProfileCard;
