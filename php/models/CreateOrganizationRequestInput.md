[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrganizationRequestInput

The request body for: Create organization.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `parent_organization_id` | Optional | string | minLength: `1`. |

