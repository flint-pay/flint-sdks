[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# refunds

### refunds.create

Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card load. Set refund_type to full for the full remaining refundable amount, amount for an explicit amount_money, or targets for named line items, charges, and taxes. To refund a gift card redemption made outside a Flint order, set refund_type to amount and send one tender_allocations entry per redemption, with no order_id. A created refund returns 201 even when processing fails; inspect status and failure_reason. A same-key replay returns the original refund without another money attempt. This is a financial operation.

`POST /v1/refunds`

Signature: `create(params: RefundsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateRefundRequestInput](../models/CreateRefundRequest.md#createrefundrequest) | The request body for: Create refund. |

Body model: [CreateRefundRequestInput](../models/CreateRefundRequest.md#createrefundrequest).

#### refunds.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Items: An order charge to refund when creating a refund, with an optional amount to refund. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. Items: An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. Items: The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. Items: Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount. |

#### refunds.create with `refund_type: "full"`

The `full` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestFullInput](../models/CreateRefundRequestFull.md#createrefundrequestfull).

#### refunds.create with `refund_type: "amount"`

The `amount` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestAmountInput](../models/CreateRefundRequestAmount.md#createrefundrequestamount).

#### refunds.create with `refund_type: "targets"`

The `targets` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestTargetsInput](../models/CreateRefundRequestTargets.md#createrefundrequesttargets).

#### refunds.create with `refund_type: "full"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Items: An order charge to refund when creating a refund, with an optional amount to refund. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. Items: An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. Items: The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. Items: Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount. |

#### refunds.create with `refund_type: "amount"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Items: An order charge to refund when creating a refund, with an optional amount to refund. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. Items: An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. Items: The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. Items: Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount. |

#### refunds.create with `refund_type: "targets"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Items: An order charge to refund when creating a refund, with an optional amount to refund. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. Items: An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. Items: The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. Items: Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount. |

#### refunds.create: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Items: An order charge to refund when creating a refund, with an optional amount to refund. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. Items: An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. Items: The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. Items: Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount. |

#### Response

Returned payload: [CreateRefundResult](../models/CreateRefundResult.md#createrefundresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.refunds.create({refund_type: "full", order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/refunds-create.mjs)

### refunds.get

Returns a single refund by ID.

`GET /v1/refunds/{refund_id}`

Signature: `get(refund_id: InputValue<string>, params?: RefundsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string | Flint refund ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent, payment_refunds.payment_intent. Expansion requires commerce.refunds.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`, `"payment_refunds.payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`, `"payment_refunds.payment_intent"`. |

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.refunds.get("ref_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/refunds-get.mjs)

### refunds.list

Returns a paginated list of refunds for the authenticated merchant. Default order: created_at descending, then refund_id descending.

`GET /v1/refunds`

Signature: `list(params?: RefundsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `payment_intent_id` | Optional | string | Filter by payment intent ID. |
| `customer_id` | Optional | string | Filter by customer ID. |
| `status` | Optional | Array of string or string | Filter by refund status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `reason` | Optional | Array of string or string | Filter by refund reasons. Accepts comma-separated values or repeated parameters; empty entries are rejected. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `return_id` | Optional | string | Filter by linked Return ID. |
| `return_resolution_id` | Optional | string | Filter by linked ReturnResolution ID. |
| `query` | Optional | string | Search across refund_id, external_reference_id, and reason_message. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by refund_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [RefundListResponse](../models/RefundListResponse.md#refundlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.refunds.list({}, {  });
```

[Complete runnable example](../examples/refunds-list.mjs)

### refunds.update

Updates refund metadata and external_reference_id.

`PATCH /v1/refunds/{refund_id}`

Signature: `update(refund_id: InputValue<string>, params: RefundsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string | Flint refund ID. |
| `body` | Required | [UpdateRefundRequestInput](../models/UpdateRefundRequestInput.md#updaterefundrequestinput) | The request body for: Update refund. |

Body model: [UpdateRefundRequestInput](../models/UpdateRefundRequestInput.md#updaterefundrequestinput).

#### refunds.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.refunds.update("ref_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {reviewed_by: "support"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/refunds-update.mjs)

