# Test info

- Name: request get api 2
- Location: C:\Playwright Automation\tests\apiTest\getRequest.spec.js:23:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at C:\Playwright Automation\tests\apiTest\getRequest.spec.js:32:25
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import fs from 'fs';
   3 |
   4 | test("request get api", async ({ request }) => {
   5 |   const getAllUser = await request.get("https://reqres.in/api/users?page=2");
   6 |
   7 |   expect(getAllUser.ok()).toBeTruthy();
   8 |   expect(getAllUser.status()).toBe(200);
   9 |
  10 |   const response = await getAllUser.json();
  11 |   console.log(response);
  12 |
  13 |   expect(response.page).toBe(2);
  14 |   expect(response).toHaveProperty("total_pages");
  15 |   expect(response.total_pages).toBe(2);
  16 |
  17 |   expect(response.data[0].id).toBe(7);
  18 |   expect(response.data[0].email).toBe("michael.lawson@reqres.in");
  19 |
  20 |   expect(response.data[0].first_name).toBe("Michael");
  21 | });
  22 |
  23 | test("request get api 2", async ({ request }) => {
  24 |   const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits';
  25 |
  26 |   const subunits = await request.get(url, {
  27 |     headers: {
  28 |       cookie: "orangehrm=fvfftnr6o6mfq82r3c2lg97c0p"
  29 |     }
  30 |   });
  31 |
> 32 |   expect(subunits.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  33 |   expect(subunits.status()).toBe(200);
  34 |
  35 |   const response = await subunits.json();
  36 |   console.log(response);
  37 | })
  38 |
  39 |   // Add assertions here based on the expected response structure if
  40 |
```