# Test info

- Name: request get api
- Location: C:\Playwright Automation\tests\apiTest\getRequest.spec.js:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "michael"
Received: "Michael"
    at C:\Playwright Automation\tests\apiTest\getRequest.spec.js:19:39
```

# Test source

```ts
   1 | const { test, expect } = require("@playwright/test");
   2 |
   3 | test("request get api", async ({ request }) => {
   4 |   const getAllUser = await request.get("https://reqres.in/api/users?page=2");
   5 |
   6 |   expect(getAllUser.ok()).toBeTruthy();
   7 |   expect(getAllUser.status()).toBe(200);
   8 |
   9 |   const response = await getAllUser.json()
  10 |   console.log(await getAllUser.json());
  11 |
  12 |   expect(response.page).toBe(2);
  13 |   expect(response).toHaveProperty("total_pages");
  14 |   expect(response.total_pages).toBe(2);
  15 |
  16 |   expect(response.data[0].id).toBe(7);
  17 |   expect(response.data[0].email).toBe("michael.lawson@reqres.in");
  18 |
> 19 |   expect(response.data[0].first_name).toBe("michael");
     |                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  20 | });
  21 |
```