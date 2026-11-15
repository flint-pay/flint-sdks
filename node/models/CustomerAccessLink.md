[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLink

The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | string | Whether the credential was returned or emailed. Values: `"link"`, `"email"`. |
| `expires_at` | Conditional | string | When a returned link expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `purpose` | Conditional | string | The returned link opens the customer's account. Values: `"customer_account"`. |
| `recipient_email` | Conditional | string | Masked customer address receiving the account link. No credential is returned with email delivery. |
| `return_url` | Required | string or null | The return_url from the request. Null when the request omitted it. |
| `sent` | Conditional | boolean | True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Values: `true`. |
| `url` | Conditional | string | The single-use bearer URL, present only with link delivery. Format: `uri`. Example: `"https://example.com/receipt"`. |

### CustomerAccessLink variant 1: `delivery` = `"link"`, `purpose` = `"customer_account"`, `sent` = `true`

oneOf with delivery: "link": The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address..

- Condition: not (present(`sent`)).
- Required: `expires_at`, `purpose`, `url`.
- Optional: `recipient_email`, `sent`.
- Constraints for `delivery`: Values: `"link"`.

### CustomerAccessLink variant 2: `delivery` = `"email"`, `purpose` = `"customer_account"`, `sent` = `true`

oneOf with delivery: "email": The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address..

- Condition: not (present(`url`)).
- Required: `recipient_email`, `sent`.
- Optional: `expires_at`, `purpose`, `url`.
- Constraints for `delivery`: Values: `"email"`.

