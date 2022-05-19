import React, { useContext } from "react";
import { RootContext } from "../../services/RootContext";
import "./style.css";

function ProfileCard() {
  const { profile } = useContext(RootContext);

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
              <p>{`Email: ${email}`}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProfileCard;