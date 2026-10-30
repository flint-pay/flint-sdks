[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerEmailPreferencesRequest

The request body for: Update the current buyer's email preferences. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_reminders` | Optional | boolean | A reminder after leaving checkout without paying. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `shipping_updates` | Optional | boolean | Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. |

