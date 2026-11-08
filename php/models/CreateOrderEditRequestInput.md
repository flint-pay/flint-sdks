[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditRequestInput

Remove unassigned units from a paid order and queue their refund atomically.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Charges to refund. Omitting amount_money refunds the charge's remaining refundable amount. Other charges are unchanged. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](#createordereditrequestinput-reason-values). |
| `remove_line_items` | Required | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. minItems: `1`. maxItems: `100`. |

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

