# Test info

- Name: request get api
- Location: C:\Playwright Automation\tests\apiTest\getRequest.spec.js:3:1

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "total_page"
Received path: []

Received value: {"data": [{"avatar": "https://reqres.in/img/faces/7-image.jpg", "email": "michael.lawson@reqres.in", "first_name": "Michael", "id": 7, "last_name": "Lawson"}, {"avatar": "https://reqres.in/img/faces/8-image.jpg", "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "id": 8, "last_name": "Ferguson"}, {"avatar": "https://reqres.in/img/faces/9-image.jpg", "email": "tobias.funke@reqres.in", "first_name": "Tobias", "id": 9, "last_name": "Funke"}, {"avatar": "https://reqres.in/img/faces/10-image.jpg", "email": "byron.fields@reqres.in", "first_name": "Byron", "id": 10, "last_name": "Fields"}, {"avatar": "https://reqres.in/img/faces/11-image.jpg", "email": "george.edwards@reqres.in", "first_name": "George", "id": 11, "last_name": "Edwards"}, {"avatar": "https://reqres.in/img/faces/12-image.jpg", "email": "rachel.howell@reqres.in", "first_name": "Rachel", "id": 12, "last_name": "Howell"}], "page": 2, "per_page": 6, "support": {"text": "Tired of writing endless social media content? Let Content Caddy generate it for you.", "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral"}, "total": 12, "total_pages": 2}
    at C:\Playwright Automation\tests\apiTest\getRequest.spec.js:13:20
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
> 13 |   expect(response).toHaveProperty("total_page");
     |                    ^ Error: expect(received).toHaveProperty(path)
  14 |   expect(response.total_pages).toBe(2);
  15 |
  16 |   expect(response.data[0].id).toBe(7);
  17 |   expect(response.data[0].email).toBe("michael.lawson@reqres.in");
  18 |
  19 |   expect(response.data[0].first_name).toBe("michael");
  20 | });
  21 |
```