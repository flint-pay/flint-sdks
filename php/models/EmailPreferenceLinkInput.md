[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailPreferenceLinkInput

An email preference for one address, such as shipping updates or checkout reminders, with whether it is enabled and the matching customer if any.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string or null | Flint customer ID when the email belongs to an active customer in this merchant environment. `null` when the email belongs to a guest. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email` | Required | string | The email address the preference applies to. |
| `email_preference` | Required | string | The kind of email the preference controls. Values: `"shipping_updates"`, `"checkout_reminders"`. |
| `enabled` | Required | boolean | Whether Flint sends this kind of email to the address. |

