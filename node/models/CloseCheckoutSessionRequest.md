[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseCheckoutSessionRequest

The request body for: Close checkout session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `reason_message` | Optional | string | Your note explaining why you are closing the checkout session. It is not shown to the buyer. minLength: `1`. |

