[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundRequest

The request body for: Create refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateRefundRequest.md#createrefundrequestamount_money). |
| `charges` | Conditional | Array of [RefundCharge](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Conditional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_load_id` | Conditional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `line_items` | Conditional | Array of [RefundLineItem](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `order_id` | Conditional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `tax_breakdown_refunds` | Conditional | Array of [RefundTaxBreakdownRefundIn](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Conditional | Array of [RefundTenderAllocationRequest](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

### CreateRefundRequest variant 1: `refund_type` = `"credit_note"`

oneOf group 1 with refund_type: "credit_note": The `credit_note` variant of `CreateRefundRequest`.; anyOf variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`, `order_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"credit_note"`.

### CreateRefundRequest variant 2: `refund_type` = `"credit_note"`

oneOf group 1 with refund_type: "credit_note": The `credit_note` variant of `CreateRefundRequest`.; anyOf variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`, `payment_intent_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"credit_note"`.

### CreateRefundRequest variant 3: `refund_type` = `"credit_note"`

oneOf group 1 with refund_type: "credit_note": The `credit_note` variant of `CreateRefundRequest`.; anyOf variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`, `tender_allocations`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `refund_type`: Values: `"credit_note"`.

### CreateRefundRequest variant 4: `refund_type` = `"credit_note"`

oneOf group 1 with refund_type: "credit_note": The `credit_note` variant of `CreateRefundRequest`.; anyOf variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`, `gift_card_load_id`.
- Optional: `amount_money`, `charges`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"credit_note"`.

### CreateRefundRequest variant 5: `refund_type` = `"credit_note"`

oneOf group 1 with refund_type: "credit_note": The `credit_note` variant of `CreateRefundRequest`.; anyOf variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"credit_note"`.

### CreateRefundRequest variant 6: `refund_type` = `"full"`

oneOf group 1 with refund_type: "full": The `full` variant of `CreateRefundRequest`.; anyOf variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Required: `order_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"full"`.

### CreateRefundRequest variant 7: `refund_type` = `"full"`

oneOf group 1 with refund_type: "full": The `full` variant of `CreateRefundRequest`.; anyOf variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Required: `payment_intent_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"full"`.

### CreateRefundRequest variant 8: `refund_type` = `"full"`

oneOf group 1 with refund_type: "full": The `full` variant of `CreateRefundRequest`.; anyOf variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Required: `tender_allocations`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `refund_type`: Values: `"full"`.

### CreateRefundRequest variant 9: `refund_type` = `"full"`

oneOf group 1 with refund_type: "full": The `full` variant of `CreateRefundRequest`.; anyOf variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Required: `gift_card_load_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"full"`.

### CreateRefundRequest variant 10: `refund_type` = `"full"`

oneOf group 1 with refund_type: "full": The `full` variant of `CreateRefundRequest`.; anyOf variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Required: `credit_note_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"full"`.

### CreateRefundRequest variant 11: `refund_type` = `"amount"`

oneOf group 1 with refund_type: "amount": The `amount` variant of `CreateRefundRequest`.; anyOf variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `amount_money`, `order_id`.
- Optional: `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"amount"`.

### CreateRefundRequest variant 12: `refund_type` = `"amount"`

oneOf group 1 with refund_type: "amount": The `amount` variant of `CreateRefundRequest`.; anyOf variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `amount_money`, `payment_intent_id`.
- Optional: `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"amount"`.

### CreateRefundRequest variant 13: `refund_type` = `"amount"`

oneOf group 1 with refund_type: "amount": The `amount` variant of `CreateRefundRequest`.; anyOf variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `amount_money`, `tender_allocations`.
- Optional: `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `refund_type`: Values: `"amount"`.

### CreateRefundRequest variant 14: `refund_type` = `"amount"`

oneOf group 1 with refund_type: "amount": The `amount` variant of `CreateRefundRequest`.; anyOf variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `amount_money`, `gift_card_load_id`.
- Optional: `charges`, `credit_note_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"amount"`.

### CreateRefundRequest variant 15: `refund_type` = `"amount"`

oneOf group 1 with refund_type: "amount": The `amount` variant of `CreateRefundRequest`.; anyOf variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `amount_money`, `credit_note_id`.
- Optional: `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"amount"`.

### CreateRefundRequest variant 16: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 1 variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `order_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 17: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 1 variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `payment_intent_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 18: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 1 variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `tender_allocations`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 19: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 1 variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `gift_card_load_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 20: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 1 variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `credit_note_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 21: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 2 variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `line_items`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 22: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 2 variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `charges`.
- Optional: `amount_money`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.
- Constraints for `charges`: minItems: `1`.
- Constraints for `refund_type`: Values: `"targets"`.

### CreateRefundRequest variant 23: `refund_type` = `"targets"`

oneOf group 1 with refund_type: "targets": The `targets` variant of `CreateRefundRequest`.; anyOf group 2 variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Required: `tax_breakdown_refunds`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tender_allocations`.
- Constraints for `refund_type`: Values: `"targets"`.
- Constraints for `tax_breakdown_refunds`: minItems: `1`.

### CreateRefundRequest variant 24

anyOf group 2 with refund_type: "credit_note".

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `order_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.

### CreateRefundRequest variant 25

anyOf group 2 with refund_type: "full".

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `payment_intent_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `tax_breakdown_refunds`, `tender_allocations`.

### CreateRefundRequest variant 26

anyOf group 2 with refund_type: "amount".

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `tender_allocations`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.

### CreateRefundRequest variant 27

anyOf group 2 with refund_type: "targets".

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `gift_card_load_id`.
- Optional: `amount_money`, `charges`, `credit_note_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.

### CreateRefundRequest variant 28

anyOf group 2 variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `credit_note_id`.
- Optional: `amount_money`, `charges`, `gift_card_load_id`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`, `tender_allocations`.

### CreateRefundRequest.amount_money

Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreateRefundRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

