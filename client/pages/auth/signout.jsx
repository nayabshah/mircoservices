import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

import React from "react";

const signout = () => {
  const { doRequest } = useRequest({
    url: "/api/users/sign-out",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signin you out ...</div>;
};

export default signout;
