[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolKeyRemoval

The result of recalling one key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_key` | Optional | [LicenseKeyPoolKey](../models/LicenseKeyPoolKey.md#licensekeypoolkey) | The matched pool key. Omitted when the selector did not match a key. An uploaded key represented by its display suffix. `license_key_pool_key`: [field definitions](../models/LicenseKeyPoolKeyRemoval.md#licensekeypoolkeyremovallicense_key_pool_key). |
| `outcome` | Required | string | The outcome for this selector. Values: `"removed"`, `"issued"`, `"held"`, `"not_found"`. |

### LicenseKeyPoolKeyRemoval.license_key_pool_key

The matched pool key. Omitted when the selector did not match a key. An uploaded key represented by its display suffix.

Field definitions: [shared fields](LicenseKeyPoolKeyInput.md#licensekeypoolkeyinput).

