import fetch, { Response } from "node-fetch";
import fs from "fs";

const url = "https://jsonplaceholder.typicode.com/uses";

fetch(url)
  .then((response) => response.json())
  .then((data) =>
    data?.map?.(({ name, address: { geo } }) => ({ name, ...geo }))
  )
  .then((data) => {
    if (!data) return;

    fs.writeFileSync("./users.json", JSON.stringify(data), (err) => {
      if (err) {
        reject(new Error("File write failed:"));
        return;
      }
      console.log(data);
    });
  })
  .catch((err) => console.log(err));

async function fetchUsers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.map?.(({ name, address: { geo } }) => ({
      name,
      ...geo,
    }));
    if (!users) return;

    fs.writeFileSync("./users.json", JSON.stringify(users));
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

fetchUsers();
