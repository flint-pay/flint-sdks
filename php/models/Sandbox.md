[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Sandbox

An isolated environment for testing an integration.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `initial_onboarding` | Required | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Values: `"complete"`, `"not_started"`. |
| `is_default` | Required | boolean | Whether this is the merchant's one default sandbox. It can be reset but cannot be archived. |
| `name` | Required | string | Sandbox name. Archiving appends (Archived XXXXXXXX) to free the original name for reuse. |
| `reset_failed_at` | Required | string or null | When the last reset stopped after repeated failures. Before data deletion starts, the sandbox keeps its previous data and remains usable. Once deletion starts, requests are blocked until you retry the reset or archive a non-default sandbox. Null when no reset has failed or a later reset succeeded. Format: `date-time`. |
| `sandbox_id` | Required | string | Unique identifier for this sandbox, prefixed `test_`. |
| `status` | Required | string | Sandbox availability. Active sandboxes accept test requests. Archived sandboxes are retired, with their API keys revoked; reset preserves an active sandbox and its credentials. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

