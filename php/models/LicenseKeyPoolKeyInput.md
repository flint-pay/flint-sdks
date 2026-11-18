[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolKeyInput

An uploaded key represented by its display suffix.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the key was uploaded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key_last4` | Required | string | Last four characters of the uploaded key. |
| `license_key_id` | Required | string or null | The assigned license ID. Null when the key has not been issued. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `license_key_pool_id` | Required | string | The license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. |
| `license_key_pool_key_id` | Required | string | The pool key ID. pattern: `^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lkpk_01KEZF7C004XWT0EAW2ZQGG93S"`. |
| `status` | Required | string | The disposition of the key. Values: `"available"`, `"held"`, `"issued"`, `"removed"`. |

