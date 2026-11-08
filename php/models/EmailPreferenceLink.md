[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailPreferenceLink

An email preference for one address, such as shipping updates or checkout reminders, with whether it is enabled and the matching customer if any.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string or null | Flint customer ID when the email belongs to an active customer in this merchant environment. `null` when the email belongs to a guest. |
| `email` | Required | string | The email address the preference applies to. |
| `email_preference` | Required | string | The kind of email the preference controls. Values: `"shipping_updates"`, `"checkout_reminders"`. |
| `enabled` | Required | boolean | Whether Flint sends this kind of email to the address. |

