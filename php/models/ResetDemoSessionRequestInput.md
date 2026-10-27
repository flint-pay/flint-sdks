[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResetDemoSessionRequestInput

The request body for: Reset demo session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demo_session_id` | Required | string | The active or provisioning demo session to reset for this client. minLength: `1`. |
| `template` | Optional | string | Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: `"quickstart"`. Values: `"quickstart"`. |

