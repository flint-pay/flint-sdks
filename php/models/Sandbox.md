[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Sandbox

An isolated environment for testing an integration.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `initial_onboarding` | Required | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Values: `"complete"`, `"not_started"`. |
| `is_default` | Required | boolean |  |
| `name` | Required | string |  |
| `replaced_by_sandbox_id` | Optional | string | ID of the replacement created when this sandbox was reset and archived. Omitted when this sandbox has not been replaced by a reset. |
| `replaces_sandbox_id` | Optional | string | ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not created by a reset. |
| `sandbox_id` | Required | string | Unique identifier for this sandbox, prefixed `test_`. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

