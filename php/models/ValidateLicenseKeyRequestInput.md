[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ValidateLicenseKeyRequestInput

The full license key and the products the caller accepts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |
| `license_key_activation_id` | Optional | string | An activation to check on this key, when the app has one. minLength: `1`. pattern: `^lka_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lka_01KEZF7C00NZEZVCZW3SRDMHTZ"`. |
| `product_ids` | Required | Array of string | The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |

