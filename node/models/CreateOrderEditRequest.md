[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditRequest

Remove unassigned units from a paid order, add items, or do both. Removed value and released charges pay for the additions; with `balance_due_behavior: collect`, the buyer pays the rest. Flint queues any remaining refund atomically.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Conditional | Array of [CreateOrderLineItemRequest](../models/CreateOrderLineItemRequest.md#createorderlineitemrequest) | Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `balance_due_behavior` | Optional | string | What happens when the added items cost more than the removed value and released charges. refuse returns 409 LIMIT_EXCEEDED and changes nothing. collect creates the edit as pending and a payment intent for the balance; the edit is applied when that payment succeeds. Default: `"refuse"`. Values: `"refuse"`, `"collect"`. |
| `charge_refunds` | Optional | Array of [RefundCharge](../models/RefundCharge.md#refundcharge) | Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_amount_due_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The balance you showed the buyer, usually the preview's amount_due_money. If the edit would freeze a different balance, the request returns 409 VERSION_CONFLICT and changes nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_amount_due_money`: [field definitions](../models/CreateOrderEditRequest.md#createordereditrequestexpected_amount_due_money). |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](#createordereditrequest-reason-values). |
| `remove_line_items` | Conditional | Array of [OrderEditRemovalRequest](../models/OrderEditRemovalRequest.md#ordereditremovalrequest) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

#### CreateOrderEditRequest reason values

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

### CreateOrderEditRequest variant 1

anyOf variant 1.

- Required: `remove_line_items`.
- Optional: `add_line_items`.

### CreateOrderEditRequest variant 2

anyOf variant 2.

- Required: `add_line_items`.
- Optional: `remove_line_items`.

### CreateOrderEditRequest.expected_amount_due_money

The balance you showed the buyer, usually the preview's amount_due_money. If the edit would freeze a different balance, the request returns 409 VERSION_CONFLICT and changes nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

