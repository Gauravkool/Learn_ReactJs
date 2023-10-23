import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center pt-5 bg-gray-500 text-white text-2xl">
      Github Followers : {data.followers}
      <img width={300} className="p-5" src={data.avatar_url} alt="Git Picture" />
    </div>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  return res.json();
};
