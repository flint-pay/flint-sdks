[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedOrganizationSummaryInput

An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `name` | Required | string |  |
| `organization_id` | Required | string |  |
| `parent_organization_id` | Optional | string |  |
| `status` | Required | string | Current status. Archived: deleted. API keys can no longer read or list the organization. Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

