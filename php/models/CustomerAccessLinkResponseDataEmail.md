[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLinkResponseDataEmail

The result of creating a customer access link. A link delivery returns the single-use sign-in link. An email delivery confirms Flint queued the message and gives a masked recipient address.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | string | Whether the credential was returned or emailed. Values: `"email"`. |
| `expires_at` | Optional | string | When a returned link expires. Format: `date-time`. |
| `purpose` | Required | string | What the returned or emailed link opens. New purposes may be added. Values: `"customer_account"`, `"payment_method_setup"`. |
| `recipient_email` | Required | string | Masked customer address receiving the account link. No credential is returned with email delivery. |
| `return_url` | Required | (string or null) or null | `return_url`: [declared alternatives](../models/CustomerAccessLinkResponseDataLink.md#customeraccesslinkresponsedatalinkreturn_url). |
| `sent` | Required | boolean | True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Values: `true`. |
| `url` | Optional | string | The single-use bearer URL, present only with link delivery. Returned only to the credential that created it, and omitted when another credential replays the request. Format: `uri`. |

### CustomerAccessLinkResponseDataEmail.return_url

Declared alternatives: [CustomerAccessLinkResponseDataLink.return_url](../models/CustomerAccessLinkResponseDataLink.md#customeraccesslinkresponsedatalinkreturn_url).

