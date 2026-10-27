[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperSandboxInput

An isolated environment for testing an integration.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `is_default` | Required | boolean |  |
| `name` | Required | string |  |
| `replaced_by_sandbox_id` | Optional | string | ID of the replacement created when this sandbox was reset and archived. Omitted when this sandbox has not been replaced by a reset. |
| `replaces_sandbox_id` | Optional | string | ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not created by a reset. |
| `sandbox_id` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

