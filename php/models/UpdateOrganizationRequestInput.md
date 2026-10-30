[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateOrganizationRequestInput

The request body for: Update organization.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `parent_organization_id` | Optional | string | Moves the organization, and every organization below it, under another active organization you can manage. Can't be null. minLength: `1`. |

