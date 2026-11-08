[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSession

A demo session with its sandbox, API key, and expiry.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key` | Required | [DemoSessionAPIKey](../models/DemoSessionAPIKey.md#demosessionapikey) | The API key issued for a demo session, with its `secret_key` and the scopes it grants. |
| `demo_session_id` | Required | string | Unique identifier for this demo session, prefixed `demo_`. Example: `"demo_01KEZF7C001S0675NAS5BPBS0V"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sandbox_id` | Required | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |

