[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestNextRenewal

The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Optional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Reject the quantity estimate if the subscription version has changed. Requires line_items. Format: `uint64`. minimum: `1`. |
| `line_items` | Optional | Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Proposed quantities at the next renewal. Send line_items as in change-quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |
| `mode` | Required | string | Selects the next renewal preview. Values: `"next_renewal"`. |
| `subscription_id` | Required | string | ID of the subscription to preview the next renewal for. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `swap` | Optional | [SubscriptionSwapPreviewRequest](../models/SubscriptionSwapPreviewRequest.md#subscriptionswappreviewrequest) | A proposed variant swap for one line item. The preview prices the next renewal as if the swap were saved, using the same checks and current price as a buyer line item update. Nothing is saved. Can't be combined with `delivery`. A proposed item swap for a buyer renewal preview: the subscription line item and the variant to price in its place. |

