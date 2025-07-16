# Test info

- Name: request get api
- Location: C:\Playwright Automation\tests\apiTest\getRequest.spec.js:4:5

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND reqres.in
Call log:
  - → GET https://reqres.in/api/users?page=2
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.25 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

    at C:\Playwright Automation\tests\apiTest\getRequest.spec.js:5:36
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import  fs from 'fs'
   3 |
   4 | test("request get api", async ({ request }) => {
>  5 |   const getAllUser = await request.get("https://reqres.in/api/users?page=2");
     |                                    ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND reqres.in
   6 |
   7 |   expect(getAllUser.ok()).toBeTruthy();
   8 |   expect(getAllUser.status()).toBe(200);
   9 |
  10 |   const response = await getAllUser.json()
  11 |   console.log(await getAllUser.json());
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
  22 | test("request get api 2", async ({ request }) => {
  23 |
  24 |     const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits'
  25 |
  26 |     const headersPath="cookie=orangehrm=fvfftnr6o6mfq82r3c2lg97c0p"
  27 |     
  28 |  const subunits = await request.get(url, {
  29 |    headers: {
  30 |      cookie: "orangehrm=fvfftnr6o6mfq82r3c2lg97c0p"
  31 |    }
  32 |  })
  33 |
  34 | })
  35 |
```