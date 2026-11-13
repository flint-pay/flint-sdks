[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReaderRequestInput

A sparse reader update. A reader's type and location never change.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Optional | string or null | The device the reader takes payments for. `null` clears it. Naming a device needs `accounts.devices.read` as well. minLength: `1`. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Keys to set, merged into the reader's metadata. A key with an empty value is removed; `null` clears all metadata. |
| `name` | Optional | string | Your label for the reader. Can't be null. minLength: `1`. maxLength: `255`. |

