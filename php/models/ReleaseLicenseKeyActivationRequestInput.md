[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReleaseLicenseKeyActivationRequestInput

The request body for: Release a license key activation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Optional | string | The activation's full license key. Without a merchant credential, send it with product_ids. minLength: `1`. |
| `product_ids` | Optional | Array of string | The products this app accepts. Without a merchant credential, send this array with key to prove you hold the license. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |

