[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestNextRenewalInput

The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput) | Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `swap` | Optional | [SubscriptionSwapPreviewRequestInput](../models/SubscriptionSwapPreviewRequestInput.md#subscriptionswappreviewrequestinput) |  |

