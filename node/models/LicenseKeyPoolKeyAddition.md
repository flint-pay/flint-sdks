[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolKeyAddition

The result of submitting one key for upload.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_key` | Required | [LicenseKeyPoolKey](../models/LicenseKeyPoolKey.md#licensekeypoolkey) | The key that was created or matched. Its pool may differ from the requested pool. An uploaded key represented by its display suffix. |
| `outcome` | Required | string | Whether the key was added or already existed. Values: `"created"`, `"existing"`. |

