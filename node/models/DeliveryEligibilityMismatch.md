[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityMismatch

An eligibility condition that rejected a delivery method, with its condition type, its path in the expression, and the field tested.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Required | string | The configured eligibility condition family that did not match. Values: [11 declared values](#deliveryeligibilitymismatch-condition-values). |
| `expression_path` | Required | string | The condition's path in the configured eligibility expression, starting at $. |
| `field` | Optional | string | The eligibility fact evaluated by the condition. Buyer fact values are not included. |
| `negated` | Optional | boolean | Whether the condition matched inside a not expression and therefore rejected the method. |

#### DeliveryEligibilityMismatch condition values

- `"zone"`
- `"country"`
- `"state"`
- `"postal_code"`
- `"radius"`
- `"window_time"`
- `"subscription_purchase"`
- `"customer_segment"`
- `"customer_merchant_verified"`
- `"customer_has_email"`
- `"customer_has_phone"`

