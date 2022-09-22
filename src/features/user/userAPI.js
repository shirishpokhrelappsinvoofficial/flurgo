import axios from "axios";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const token = "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";
// A mock function to mimic making an async request for data

const octokit = new Octokit({
  auth: token,
  baseUrl: "https://api.github.com",
});
export async function fetchUser(name = "") {
  // const response = await octokit.request(`GET /users/${name}`, {
  //   username: name,
  //   headers: {
  //     "content-type": "application/vnd.github+json",
  //   },
  // });

  return fetch(`https://api.github.com/users/${name}/repos`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
