[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrganizationInput

An organization that manages merchant accounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string |  |
| `organization_id` | Required | string |  |
| `parent_organization` | Optional | [ExpandedOrganizationSummaryInput](../models/ExpandedOrganizationSummaryInput.md#expandedorganizationsummaryinput) or null | Present only when `expand` includes `parent_organization`; `null` when expanded and there is no related organization. |
| `parent_organization_id` | Optional | string |  |
| `status` | Required | string | Current status. Archived: deleted. API keys can no longer read or list the organization. Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted organization configuration and membership version. Format: `uint64`. minimum: `1`. |

