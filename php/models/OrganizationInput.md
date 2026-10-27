[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrganizationInput

An organization that manages merchant accounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `metadata` | Optional | Map of string |  |
| `name` | Required | string |  |
| `organization_id` | Required | string |  |
| `parent_organization` | Optional | [ExpandedOrganizationSummaryInput](../models/ExpandedOrganizationSummaryInput.md#expandedorganizationsummaryinput) or null |  |
| `parent_organization_id` | Optional | string |  |
| `status` | Required | string | Current status. Archived: deleted, and still readable by ID. Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted organization configuration and membership version. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

