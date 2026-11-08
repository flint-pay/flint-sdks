[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundRequest

Retry the remaining refund money after refund processing has failed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen on the edit. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |

