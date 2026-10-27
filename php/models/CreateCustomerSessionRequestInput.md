[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerSessionRequestInput

The request body for: Create a customer session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | minLength: `1`. |
| `expires_in_seconds` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `300`. maximum: `86400`. |
| `refresh_expires_in_seconds` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `3600`. maximum: `2592000`. |

