import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FetchRepoForUser } from "./userSlice";

function User() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const data = useSelector((store) => store.user.data);

  useEffect(() => {
    if (username) {
      dispatch(FetchRepoForUser(username));
    }
  }, [dispatch, username]);

  return (
    <div className="m-auto ">
      <div className="d-flex">
        <label className="fw-bold m-2">Username</label>
        <input
          type="text"
          className=""
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>

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
