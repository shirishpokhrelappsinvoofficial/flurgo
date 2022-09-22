import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { useDispatch } from "react-redux";
import { FetchRepoForUser } from "./userSlice";

function User() {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Public Repo Name",
      dataIndex: "name",
    },
    {
      title: "Stars",
      dataIndex: "borrow",
    },
  ];

  useEffect(() => {
    dispatch(FetchRepoForUser("shirish"));
  }, [dispatch]);

  return (
    <div>
      <table className="table-responsive">
        <thead>
          <tr>
            <th scope="col">Public Repos</th>
            <th scope="col">Stars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>140</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;
