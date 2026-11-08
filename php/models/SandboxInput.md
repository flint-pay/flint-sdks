[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SandboxInput

An isolated environment for testing an integration.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `initial_onboarding` | Required | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Values: `"complete"`, `"not_started"`. |
| `is_default` | Required | boolean |  |
| `name` | Required | string |  |
| `replaced_by_sandbox_id` | Optional | string | ID of the replacement created when this sandbox was reset and archived. Omitted when this sandbox has not been replaced by a reset. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `replaces_sandbox_id` | Optional | string | ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not created by a reset. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `sandbox_id` | Required | string | Unique identifier for this sandbox, prefixed `test_`. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

