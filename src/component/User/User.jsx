import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const {userId} = useParams();
  console.log("userId", userId);
  return <div className="text-center bg-gray-500 text-white text-2xl py-4">
    User : {userId}
  </div>
}
export default User;
