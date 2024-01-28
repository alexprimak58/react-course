import React, { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import username from "../UserID/UserID";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/alexprimak58")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img width={300} src={data.avatar_url} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
};
