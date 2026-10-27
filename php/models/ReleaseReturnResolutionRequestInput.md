[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReleaseReturnResolutionRequestInput

The request body for: Release return resolution.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"merchant_approved"`, `"exception_resolved"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

