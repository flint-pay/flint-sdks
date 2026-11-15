[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundRequestTargetsInput

The `targets` variant of `CreateRefundRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charges` | Conditional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `line_items` | Conditional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Conditional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Conditional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |

### CreateRefundRequestTargetsInput variant 1: `refund_type` = `"targets"`

anyOf group 1 variant 1.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `order_id`.
- Optional: `charges`, `line_items`, `payment_intent_id`, `tax_breakdown_refunds`.

### CreateRefundRequestTargetsInput variant 2: `refund_type` = `"targets"`

anyOf group 1 variant 2.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `payment_intent_id`.
- Optional: `charges`, `line_items`, `order_id`, `tax_breakdown_refunds`.

### CreateRefundRequestTargetsInput variant 3: `refund_type` = `"targets"`

anyOf group 1 variant 3.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Optional: `charges`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.

### CreateRefundRequestTargetsInput variant 4: `refund_type` = `"targets"`

anyOf group 1 variant 4.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Optional: `charges`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.

### CreateRefundRequestTargetsInput variant 5: `refund_type` = `"targets"`

anyOf group 1 variant 5.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Optional: `charges`, `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.

### CreateRefundRequestTargetsInput variant 6: `refund_type` = `"targets"`

anyOf group 2 variant 1.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `line_items`.
- Optional: `charges`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `line_items`: minItems: `1`.

### CreateRefundRequestTargetsInput variant 7: `refund_type` = `"targets"`

anyOf group 2 variant 2.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `charges`.
- Optional: `line_items`, `order_id`, `payment_intent_id`, `tax_breakdown_refunds`.
- Constraints for `charges`: minItems: `1`.

### CreateRefundRequestTargetsInput variant 8: `refund_type` = `"targets"`

anyOf group 2 variant 3.

- Condition: not (at least one(present(`amount_money`); present(`tender_allocations`); present(`gift_card_load_id`))).
- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).
- Required: `tax_breakdown_refunds`.
- Optional: `charges`, `line_items`, `order_id`, `payment_intent_id`.
- Constraints for `tax_breakdown_refunds`: minItems: `1`.

