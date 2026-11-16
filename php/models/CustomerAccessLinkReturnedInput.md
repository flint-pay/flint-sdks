[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLinkReturnedInput

The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | string | Whether the credential was returned or emailed. Values: `"link"`. |
| `expires_at` | Required | string | When a returned link expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `purpose` | Required | string | The returned link opens the customer's account. Values: `"customer_account"`. |
| `recipient_email` | Optional | string | Masked customer address receiving the account link. No credential is returned with email delivery. |
| `return_url` | Required | string or null | The return_url from the request. Null when the request omitted it. |
| `sent` | Optional | boolean | True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Values: `true`. |
| `url` | Optional | string | The single-use bearer URL, present only with link delivery. Returned only to the credential that created it, and omitted when another credential replays the request. Format: `uri`. Example: `"https://example.com/receipt"`. |

