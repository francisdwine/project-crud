import Table from "@/components/table";
import React, { Fragment } from "react";
import { Button } from "primereact/button";

import DashboardLayout from "./components/Dashboard";
import NavBar from "./components/NavBar";

const UsersPage = () => {
  const DUMMY_USERS = [
    { name: "francis", email: "francisbendulo@gmail.com" },
    { name: "dwine", email: "someguy@gmail.com" },
  ];
  return (
    <Fragment>
      <div className="flex flex-col justify-center">
        <div>
          <DashboardLayout>
            <div className="flex flex-col flex gap-4">
              <NavBar></NavBar>
              <div className="flex justify-center gap-4">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Button
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Button
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Button
                </button>
              </div>
            </div>

            <table className="table-fixed">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </DashboardLayout>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersPage;
