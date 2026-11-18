[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLicenseKeyActivationRequest

The request body for: Activate a license key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fingerprint` | Optional | string | An identifier for this installation. An active installation with the same fingerprint is reused. minLength: `1`. maxLength: `255`. |
| `key` | Required | string | The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |
| `name` | Required | string | Device name shown to the buyer and merchant. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `product_ids` | Required | Array of string | The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |

