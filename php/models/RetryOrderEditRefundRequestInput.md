[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundRequestInput

Retry the remaining refund money after refund processing has failed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen on the edit. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |

