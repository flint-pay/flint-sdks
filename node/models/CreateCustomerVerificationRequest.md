[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerVerificationRequest

The request body for: Create a customer email verification.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Defaults to email when omitted. Explicit null and an empty value are not accepted. Default: `"email"`. Values: `"email"`. |
| `customer_id` | Required | string | minLength: `1`. |
| `purpose` | Required | string | Values: `"link_guest_purchases"`. |

