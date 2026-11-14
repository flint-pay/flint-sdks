[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLinkResponseDataEmail

The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | string | Whether the credential was returned or emailed. Values: `"email"`. |
| `expires_at` | Optional | string | When a returned link expires. Format: `date-time`. |
| `purpose` | Optional | string | The returned link opens the customer's account. Values: `"customer_account"`. |
| `recipient_email` | Required | string | Masked customer address receiving the account link. No credential is returned with email delivery. |
| `return_url` | Required | (string or null) or null | `return_url`: [declared alternatives](../models/CustomerAccessLinkResponseDataLink.md#customeraccesslinkresponsedatalinkreturn_url). |
| `sent` | Required | boolean | True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Values: `true`. |
| `url` | Optional | string | The single-use bearer URL, present only with link delivery. Format: `uri`. |

### CustomerAccessLinkResponseDataEmail.return_url

Declared alternatives: [CustomerAccessLinkResponseDataLink.return_url](../models/CustomerAccessLinkResponseDataLink.md#customeraccesslinkresponsedatalinkreturn_url).

