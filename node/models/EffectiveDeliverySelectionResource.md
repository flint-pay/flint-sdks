[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EffectiveDeliverySelectionResource

The delivery selection currently in effect for a checkout, with its `source` (none, provisional, or committed) and whether it can still be changed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_selection` | Required | [DeliverySelection](../models/DeliverySelection.md#deliveryselection) or null |  |
| `mutable` | Required | boolean |  |
| `originating_checkout_session_id` | Optional | string |  |
| `source` | Required | string | Values: `"none"`, `"provisional"`, `"committed"`. |

