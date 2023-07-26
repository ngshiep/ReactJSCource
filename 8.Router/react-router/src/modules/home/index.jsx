import React from "react";
import { getDataFromLS } from "../../utils/localStorage";

export default function Home() {
  if (getDataFromLS("user") !== "") {
    const user = JSON.parse(getDataFromLS("user"));
    return (
      <>
        <h1>Home</h1>
        {user && (
          <>
            <h4>Name: {user.email}</h4>
            <h4>Password: {user.password}</h4>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  }
}
