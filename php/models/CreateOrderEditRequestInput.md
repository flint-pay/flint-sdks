[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditRequestInput

Remove unassigned units from a paid order, add items the removed value and released charges pay for, or do both, and queue any remaining refund atomically.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Conditional | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](#createordereditrequestinput-reason-values). |
| `remove_line_items` | Conditional | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

#### CreateOrderEditRequestInput reason values

- `"duplicate"`
- `"fraudulent"`
- `"requested_by_customer"`
- `"defective_product"`
- `"wrong_item_shipped"`
- `"never_received"`
- `"not_as_described"`
- `"arrived_too_late"`
- `"customer_changed_mind"`
- `"better_price_found"`
- `"accidental_order"`
- `"other"`
- `"out_of_stock"`

### CreateOrderEditRequestInput variant 1

anyOf variant 1.

- Required: `remove_line_items`.
- Optional: `add_line_items`.

### CreateOrderEditRequestInput variant 2

anyOf variant 2.

- Required: `add_line_items`.
- Optional: `remove_line_items`.

