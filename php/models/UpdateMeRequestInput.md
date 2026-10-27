[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateMeRequestInput

The request body for: Update the current buyer profile.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. minLength: `1`. |
| `expected_version` | Optional | integer string | The customer version you read. A different version refuses the update. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `phone` | Optional | string or null | E.164 phone number. Send null to remove it. minLength: `1`. |

