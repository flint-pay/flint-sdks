[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferences

A customer's email preferences: checkout reminders and shipping updates.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_reminders` | Required | boolean | A reminder after leaving checkout without paying. |
| `customer_id` | Required | string | Flint customer ID fixed by the customer session. |
| `shipping_updates` | Required | boolean | Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

