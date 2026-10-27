[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# refunds

### refunds.create

Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card load. Set refund_type to full for the full remaining refundable amount, amount for an explicit amount_money, or targets for named line items, charges, and taxes. To refund a gift card redemption made outside a Flint order, set refund_type to amount and send one tender_allocations entry per redemption, with no order_id. A created refund returns 201 even when processing fails; inspect status and failure_reason. A same-key replay returns the original refund without another money attempt. This is a financial operation.

`POST /v1/refunds`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateRefundRequestInput](../models/CreateRefundRequestInput.md#createrefundrequestinput) | The request body for: Create refund. |

Body model: [CreateRefundRequestInput](../models/CreateRefundRequestInput.md#createrefundrequestinput).

#### refunds.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1

The `full` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestFullInput](../models/CreateRefundRequestFullInput.md#createrefundrequestfullinput).

#### refunds.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](#refundscreate-body-oneof-variant-1-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1 reason values

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

Fields: [refunds.create body oneOf variant 1 fields](#refundscreate-body-oneof-variant-1-fields).

#### refunds.create body oneOf variant 1 anyOf variant 1



#### refunds.create body oneOf variant 1 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1 anyOf variant 2



#### refunds.create body oneOf variant 1 anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1 anyOf variant 3



#### refunds.create body oneOf variant 1 anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1 anyOf variant 4



#### refunds.create body oneOf variant 1 anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](#refundscreate-body-oneof-variant-1-anyof-variant-4-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 1 anyOf variant 4 reason values

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

Fields: [refunds.create body oneOf variant 1 fields](#refundscreate-body-oneof-variant-1-fields).

#### refunds.create body oneOf variant 2

The `amount` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestAmountInput](../models/CreateRefundRequestAmountInput.md#createrefundrequestamountinput).

#### refunds.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](#refundscreate-body-oneof-variant-2-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 2 reason values

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

Fields: [refunds.create body oneOf variant 2 fields](#refundscreate-body-oneof-variant-2-fields).

#### refunds.create body oneOf variant 2 anyOf variant 1



#### refunds.create body oneOf variant 2 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 2 anyOf variant 2



#### refunds.create body oneOf variant 2 anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 2 anyOf variant 3



#### refunds.create body oneOf variant 2 anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 2 anyOf variant 4



#### refunds.create body oneOf variant 2 anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](#refundscreate-body-oneof-variant-2-anyof-variant-4-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"amount"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 2 anyOf variant 4 reason values

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

Fields: [refunds.create body oneOf variant 2 fields](#refundscreate-body-oneof-variant-2-fields).

#### refunds.create body oneOf variant 3

The `targets` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestTargetsInput](../models/CreateRefundRequestTargetsInput.md#createrefundrequesttargetsinput).

#### refunds.create body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 1



#### refunds.create body oneOf variant 3 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Required | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. minItems: `1`. Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. minItems: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 2



#### refunds.create body oneOf variant 3 anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Required | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. minItems: `1`. Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. minItems: `1`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 3



#### refunds.create body oneOf variant 3 anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Required | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. minItems: `1`. Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. minItems: `1`. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 3 reason values

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

Fields: [refunds.create body oneOf variant 3 fields](#refundscreate-body-oneof-variant-3-fields).

#### refunds.create body oneOf variant 3 anyOf variant 1



#### refunds.create body oneOf variant 3 anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 2



#### refunds.create body oneOf variant 3 anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 3



#### refunds.create body oneOf variant 3 anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 4



#### refunds.create body oneOf variant 3 anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](#refundscreate-body-oneof-variant-3-anyof-variant-4-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body oneOf variant 3 anyOf variant 4 reason values

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

Fields: [refunds.create body oneOf variant 3 fields](#refundscreate-body-oneof-variant-3-fields).

#### refunds.create body anyOf variant 1



#### refunds.create body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body anyOf variant 2



#### refunds.create body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body anyOf variant 3



#### refunds.create body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create body anyOf variant 4



#### refunds.create body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Required for refund_type amount and forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItemInput.md#refundlineiteminput) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `reason_message` | Optional | string | minLength: `1`. |
| `refund_type` | Required | string | Required amount mode: full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequestInput.md#refundtenderallocationrequestinput) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### Response

Returned payload: [CreateRefundResult](../models/CreateRefundResult.md#createrefundresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->refunds->create([
  'refund_type' => 'full',
  'order_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/refunds-create.php)

### refunds.get

Returns a single refund by ID.

`GET /v1/refunds/{refund_id}`

Signature: `get(string|Model $refund_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`, `"payment_refunds.payment_intent"`. |

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->refunds->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/refunds-get.php)

### refunds.list

Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/refunds`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `payment_intent_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `reason` | Optional | Array of string | minItems: `1`. Items values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`, `"payment_intent"`. |

#### Response

Returned payload: [RefundsListResponse200](../models/CreditNotesListRefundsResponse200.md#creditnoteslistrefundsresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->refunds->list([], new RequestOptions());
```

[Complete runnable example](../examples/refunds-list.php)

### refunds.update

Updates refund metadata and external_reference_id.

`PATCH /v1/refunds/{refund_id}`

Signature: `update(string|Model $refund_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateRefundRequestInput](../models/UpdateRefundRequestInput.md#updaterefundrequestinput) | The request body for: Update refund. |

Body model: [UpdateRefundRequestInput](../models/UpdateRefundRequestInput.md#updaterefundrequestinput).

#### refunds.update body fields

Field definitions: [shared fields](../models/UpdateRefundRequestInput.md#updaterefundrequestinput).

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->refunds->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/refunds-update.php)

