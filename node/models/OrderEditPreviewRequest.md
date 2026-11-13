[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewRequest

Compute a paid-order removal without reserving quantities or refund capacity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Optional | Array of [CreateOrderLineItemRequest](../models/CreateOrderLineItemRequest.md#createorderlineitemrequest) | Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery requirement. Added lines are priced and taxed as usual, without promotions, and don't join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `charge_refunds` | Optional | Array of [RefundCharge](../models/RefundCharge.md#refundcharge) | Charges to release. Omitting amount_money releases the charge's remaining refundable amount. Charges you don't list are unchanged. |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Where each original payment is refunded to, with the same defaults as a refund. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `order_id` | Required | string | The paid order to edit. minLength: `1`. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for removing the items. Values: [13 declared values](CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `remove_line_items` | Optional | Array of [OrderEditRemovalRequest](../models/OrderEditRemovalRequest.md#ordereditremovalrequest) | Original line units to remove. Each line can appear only once. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

