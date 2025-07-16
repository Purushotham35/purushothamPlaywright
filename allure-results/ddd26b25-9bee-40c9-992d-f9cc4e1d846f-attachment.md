# Test info

- Name: request get api
- Location: C:\Playwright Automation\tests\apiTest\getRequest.spec.js:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: undefined
    at C:\Playwright Automation\tests\apiTest\getRequest.spec.js:11:25
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
   9 |   console.log(await getAllUser.json());
  10 |
> 11 |   expect(Response.page).toBe(2);
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |   expect(response).toHaveProprty("total_page");
  13 |   expect(response.total_page).toBe(2);
  14 |
  15 |   expect(response.data[0].id).toBe(7);
  16 |   expect(response.data[0].email).toBe("michael.lawson@reqres.in");
  17 |
  18 |   expect(response.data[0].first_name).toBe("michael");
  19 | });
  20 |
```