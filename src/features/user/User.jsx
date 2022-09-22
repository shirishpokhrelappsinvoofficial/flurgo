import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchRepoForUser } from "./userSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function User() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const data = useSelector((store) => store.user.data);

  const handleSearch = () => {
    if (username) {
      dispatch(FetchRepoForUser(username));
    }
  };

  return (
    <div className="p-4 mb-2">
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

        <Button
          variant="contained"
          onClick={() => {
            handleSearch();
          }}
          className="mx-2"
        >
          Submit
        </Button>
      </div>

      {/* <table className="table-responsive m-auto">
        <thead>
          <tr>
            <th scope="col mx-2">Public Repos</th>
            <th scope="col mx-2">Stars</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item?.name}</td>
                <td>{item?.watchers_count}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}

      {data?.length > 0 ? (
        <TableContainer component={Paper} className="mt-4">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Repo Name</TableCell>
                <TableCell align="right">Star Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.watchers_count}{" "}
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <span>No user found.</span>
      )}
    </div>
  );
}

export default User;
