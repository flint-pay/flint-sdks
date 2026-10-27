[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrganizationMembershipInput

A user's membership in an organization, with the role and whether it is active or removed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `organization_id` | Required | string |  |
| `role` | Required | string | Values: `"owner"`, `"admin"`, `"operator"`, `"viewer"`. |
| `status` | Required | string | Values: `"active"`, `"removed"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `user_id` | Required | string |  |

