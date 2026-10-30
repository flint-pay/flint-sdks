[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailPreferenceLink

An email preference for one address, such as shipping updates or checkout reminders, with whether it is enabled and the matching customer if any.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string or null | Flint customer ID when the email belongs to an active customer in this merchant environment. Null for a guest email. |
| `email` | Required | string |  |
| `email_preference` | Required | string | Values: `"shipping_updates"`, `"checkout_reminders"`. |
| `enabled` | Required | boolean |  |

