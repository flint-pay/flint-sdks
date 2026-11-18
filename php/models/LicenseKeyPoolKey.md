[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolKey

An uploaded key represented by its display suffix.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the key was uploaded. Format: `date-time`. |
| `key_last4` | Required | string | Last four characters of the uploaded key. |
| `license_key_id` | Required | string or null | The assigned license ID. Null when the key has not been issued. |
| `license_key_pool_id` | Required | string | The license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `license_key_pool_key_id` | Required | string | The pool key ID. pattern: `^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `status` | Required | string | The disposition of the key. Values: `"available"`, `"held"`, `"issued"`, `"removed"`. |

