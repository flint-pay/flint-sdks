[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RemoveLicenseKeyPoolKeysRequestInput

The request body for: Remove keys from a license key pool.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `keys` | Conditional | Array of string | Full key values from the recall list, in request order. minItems: `1`. maxItems: `1000`. Items: A full key. After trimming surrounding whitespace, it must have 8 to 255 printable ASCII characters. minLength: `1`. pattern: `^[	      -     　]*[!-~][ -~]{6,253}[!-~][	      -     　]*$`. |
| `license_key_pool_key_ids` | Conditional | Array of string | Pool key IDs from the masked key list, in request order. minItems: `1`. maxItems: `1000`. Items: minLength: `1`. pattern: `^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lkpk_01KEZF7C004XWT0EAW2ZQGG93S"`. |

### RemoveLicenseKeyPoolKeysRequestInput variant 1

oneOf Key values.

- Required: `keys`.
- Undeclared: `license_key_pool_key_ids`.

### RemoveLicenseKeyPoolKeysRequestInput variant 2

oneOf Pool key IDs.

- Required: `license_key_pool_key_ids`.
- Undeclared: `keys`.

