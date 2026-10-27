[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundRequestAmount

The `amount` variant of `CreateRefundRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateRefundRequest.md#createrefundrequestamount_money). |
| `charges` | Optional | Array of [RefundCharge](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinations](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Conditional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItem](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Conditional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Conditional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundIn](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Conditional | Array of [RefundTenderAllocationRequest](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

### CreateRefundRequestAmount variant 1: `refund_type` = `"amount"`

anyOf variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `order_id`.
- Optional: `gift_card_load_id`, `payment_intent_id`, `tender_allocations`.

### CreateRefundRequestAmount variant 2: `refund_type` = `"amount"`

anyOf variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_load_id`, `order_id`, `tender_allocations`.

### CreateRefundRequestAmount variant 3: `refund_type` = `"amount"`

anyOf variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `tender_allocations`.
- Optional: `gift_card_load_id`, `order_id`, `payment_intent_id`.

### CreateRefundRequestAmount variant 4: `refund_type` = `"amount"`

anyOf variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `gift_card_load_id`.
- Optional: `order_id`, `payment_intent_id`, `tender_allocations`.

### CreateRefundRequestAmount.amount_money

Field definitions: [CreateRefundRequest.amount_money](../models/CreateRefundRequest.md#createrefundrequestamount_money).

