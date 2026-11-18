[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLicenseKeyPoolKeysRequestInput

The request body for: Add keys to a license key pool.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `keys` | Required | Array of string | The full keys to upload, in order. Use at least 16 characters per key if public validation is enabled. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `8`. maxLength: `255`. pattern: `^[!-~][ -~]{6,253}[!-~]$`. |
| `seller_authorization_confirmed` | Required | boolean | Confirms that you are authorized by the rights holder to sell the keys. Values: `true`. |

