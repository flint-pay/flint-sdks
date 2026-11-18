[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolKeyRemovalInput

The result of recalling one key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_pool_key` | Optional | [LicenseKeyPoolKeyInput](../models/LicenseKeyPoolKeyInput.md#licensekeypoolkeyinput) | The matched pool key. Omitted when the selector did not match a key. An uploaded key represented by its display suffix. |
| `outcome` | Required | string | The outcome for this selector. Values: `"removed"`, `"issued"`, `"held"`, `"not_found"`. |

