import { test, expect } from "@playwright/test";

test("Request post api", async ({ request }) => {
  const addUser = await request.post("https://reqres.in/api/users", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
    data: {
      name: "purushotham",
      job: "tester",
    },
  });
  console.log( await addUser.json())
});
