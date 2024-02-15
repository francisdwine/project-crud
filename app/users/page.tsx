import Table from "@/components/table";
import React, { Fragment } from "react";
import { Button } from "primereact/button";


import { InputText } from "primereact/inputtext";

const UsersPage = () => {
  const DUMMY_USERS = [
    { name: "francis", email: "francisbendulo@gmail.com" },
    { name: "dwine", email: "someguy@gmail.com" },
  ];
  return (
    <Fragment>
        <InputText></InputText>
    </Fragment>
  );
};

export default UsersPage;
