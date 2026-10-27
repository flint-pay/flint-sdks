[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseCheckoutSessionRequestInput

The request body for: Close checkout session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `reason_message` | Optional | string | Your note explaining why you are closing the checkout session. It is not shown to the buyer. minLength: `1`. |

