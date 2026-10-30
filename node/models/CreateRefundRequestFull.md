[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundRequestFull

The `full` variant of `CreateRefundRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Conditional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `order_id` | Conditional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Conditional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |

### CreateRefundRequestFull variant 1: `refund_type` = `"full"`

anyOf variant 1.

- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `order_id`.
- Optional: `gift_card_load_id`, `payment_intent_id`.

### CreateRefundRequestFull variant 2: `refund_type` = `"full"`

anyOf variant 2.

- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_load_id`, `order_id`.

### CreateRefundRequestFull variant 3: `refund_type` = `"full"`

anyOf variant 3.

- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Optional: `gift_card_load_id`, `order_id`, `payment_intent_id`.

### CreateRefundRequestFull variant 4: `refund_type` = `"full"`

anyOf variant 4.

- Condition: not (at least one(present(`amount_money`); present(`line_items`); present(`charges`); present(`tax_breakdown_refunds`); present(`tender_allocations`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `gift_card_load_id`.
- Optional: `order_id`, `payment_intent_id`.

### CreateRefundRequestFull.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

