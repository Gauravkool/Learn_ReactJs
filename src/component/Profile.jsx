import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  console.log(user," user");
  if (!user) {
    return <div>Please Login</div>;
  }
  return <div>Welcome {user}</div>;
}
export default Profile;
