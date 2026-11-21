<!-- Package 8.0.0-beta.11; API 2026-09-07 -->

# Validate and activate license keys

In an app, send the full license key and the product IDs the app accepts. Set `ambientCredentials: false` to call without a merchant credential. Apply this option to the generated validate, create activation, and release activation examples when adapting them for an app.

Node:

```js
import { Client } from '@flintpay/node';

const client = new Client({ ambientCredentials: false });
const result = await client.licenseKeys.validate({ key, product_ids });
console.log(result.is_valid);
```

PHP:

```php
$client = new \Flint\Client(new \Flint\ClientOptions(ambientCredentials: false));
$result = $client->licenseKeys->validate(['key' => $key, 'product_ids' => $productIds]);
echo $result->getIsValid() ? "valid\n" : "invalid\n";
```

Activation takes a device name in addition to `key` and `product_ids`. Release takes the activation ID as its first argument and `key` and `product_ids` in the body. Server-side callers can supply a merchant secret key through `apiKey`.

Handle full license keys as credentials. Log the license key ID or status when you need a diagnostic. Full keys remain available to application code and explicit serialization.

