import axios from "axios";
const token = "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";
// A mock function to mimic making an async request for data
export async function fetchUser(name = "") {
  const response = await axios.get(
    `https://api.github.com/users/${name}/repos`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        token: token,
      },
    }
  );
  return response;
}
