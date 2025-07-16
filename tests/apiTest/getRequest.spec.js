import { test, expect } from "@playwright/test";
import fs from 'fs';

test("request get api", async ({ request }) => {
  const getAllUser = await request.get("https://reqres.in/api/users?page=2");

  expect(getAllUser.ok()).toBeTruthy();
  expect(getAllUser.status()).toBe(200);

  const response = await getAllUser.json();
  console.log(response);

  expect(response.page).toBe(2);
  expect(response).toHaveProperty("total_pages");
  expect(response.total_pages).toBe(2);

  expect(response.data[0].id).toBe(7);
  expect(response.data[0].email).toBe("michael.lawson@reqres.in");

  expect(response.data[0].first_name).toBe("Michael");
});

test("request get api 2", async ({ request }) => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits';

  const subunits = await request.get(url, {
    headers: {
      cookie: "orangehrm=fvfftnr6o6mfq82r3c2lg97c0p"
    }
  });

  expect(subunits.ok()).toBeTruthy();
  expect(subunits.status()).toBe(200);

  const response = await subunits.json();
  console.log(response);
})

  // Add assertions here based on the expected response structure if
