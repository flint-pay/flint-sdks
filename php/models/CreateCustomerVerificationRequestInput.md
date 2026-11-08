[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerVerificationRequestInput

The request body for: Create a customer email verification.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Defaults to email when omitted. Explicit null and an empty value are not accepted. Default: `"email"`. Values: `"email"`. |
| `customer_id` | Required | string | ID of the customer whose email to verify. The code goes to this customer's current email. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `purpose` | Required | string | What the verification is for. It can only be used for that purpose. Values: `"link_guest_purchases"`. |

