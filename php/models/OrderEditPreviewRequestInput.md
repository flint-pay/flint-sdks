[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewRequestInput

Compute a paid-order removal without reserving quantities or refund capacity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Explicit charge refunds. Omitting amount_money refunds the charge's remaining refundable amount. Charges you don't list are unchanged. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Where each original payment is refunded to, with the same defaults as a refund. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `order_id` | Required | string | The paid order to edit. minLength: `1`. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for removing the items. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `remove_line_items` | Required | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Original line units to remove. Each line can appear only once. minItems: `1`. maxItems: `100`. |

