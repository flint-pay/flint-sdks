[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# refunds

### refunds.create

Creates a refund for an issued credit note on a paid invoice, an order, a payment intent, a captured gift card redemption, or a gift card load. Set refund_type to credit_note with credit_note_id to refund credit; omit amount_money to refund all available credit, resolved when Flint accepts the request. Credit-note refunds return card and bank payments collected through Flint, largest remaining first; gift card value is not refunded through credit notes yet. Set refund_type to full for the full remaining refundable amount, amount for an explicit amount_money, or targets for named line items, charges, and taxes. To refund a gift card redemption made outside a Flint order, set refund_type to amount and send one tender_allocations entry per redemption, with no order_id. A created refund is returned even when processing fails; inspect `status` and `failure_reason`. A same-key replay returns the original refund without another money attempt. This is a financial operation.

`POST /v1/refunds`

Signature: `create(params: RefundsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateRefundRequestInput](../models/CreateRefundRequest.md#createrefundrequest) | The request body for: Create refund. |

Body model: [CreateRefundRequestInput](../models/CreateRefundRequest.md#createrefundrequest).

#### refunds.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Optional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create with `refund_type: "credit_note"`

The `credit_note` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestCreditNoteInput](../models/CreateRefundRequestCreditNote.md#createrefundrequestcreditnote).

#### refunds.create with `refund_type: "full"`

The `full` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestFullInput](../models/CreateRefundRequestFull.md#createrefundrequestfull).

#### refunds.create with `refund_type: "amount"`

The `amount` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestAmountInput](../models/CreateRefundRequestAmount.md#createrefundrequestamount).

#### refunds.create with `refund_type: "targets"`

The `targets` variant of `CreateRefundRequest`.

Body model: [CreateRefundRequestTargetsInput](../models/CreateRefundRequestTargets.md#createrefundrequesttargets).

#### refunds.create with `refund_type: "credit_note"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Optional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create with `refund_type: "full"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Optional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Required | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create with `refund_type: "amount"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Optional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Required | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create with `refund_type: "targets"`



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Optional | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Required | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### refunds.create: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charges` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. |
| `credit_note_id` | Required | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_load_id` | Optional | string | Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: `1`. pattern: `^gcl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `line_items` | Optional | Array of [RefundLineItemInput](../models/RefundLineItem.md#refundlineitem) | Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: `1`. |
| `payment_intent_id` | Optional | string | Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: `1`. |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_platform_fee` | Optional | boolean | Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See Platform fees. Default: `false`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"full"`, `"amount"`, `"targets"`, `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. |
| `split_reversals` | Optional | Array of [SplitReversalRequestInput](../models/SplitReversalRequestInput.md#splitreversalrequestinput) | Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationRequestInput](../models/RefundTenderAllocationRequest.md#refundtenderallocationrequest) | Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: `1`. maxItems: `21`. |

#### Response

Returned payload: [RefundWithGiftCardCodes](../models/RefundWithGiftCardCodes.md#refundwithgiftcardcodes).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

const result = await client.refunds.create({order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", refund_type: "full"}, { idempotencyKey: idempotencyKey });
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
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, order, payment_intent, payment_refunds.payment_intent. Expansion requires commerce.refunds.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Items values: `"customer"`, `"order"`, `"payment_intent"`, `"payment_refunds.payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`, `"payment_refunds.payment_intent"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
const result = await client.refunds.get("ref_01KEZF7C003DTD59WKYHEXYQ1K", {}, {  });
```

[Complete runnable example](../examples/refunds-get.mjs)

### refunds.list

Returns a paginated list of refunds for the authenticated merchant. Default order: created_at descending, then refund_id descending.

`GET /v1/refunds`

Signature: `list(params?: RefundsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Optional | string | Filter by payment intent ID. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Filter by customer ID. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by refund status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `reason` | Optional | Array of string or string | Filter by refund reasons. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [14 declared values](#refundslist-input-reason--values). Values: [14 declared values](#refundslist-input-reason--values). |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `credit_note_id` | Optional | string | Exact match on the credit note whose credit was refunded. Unknown or other-merchant IDs return an empty page. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_id` | Optional | string | Filter by linked Return ID. pattern: `^ret_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_resolution_id` | Optional | string | Filter by linked ReturnResolution ID. pattern: `^retres_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string | Search across refund_id, external_reference_id, and reason_message. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by refund_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, order, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"order"`, `"payment_intent"`. Values: `"customer"`, `"order"`, `"payment_intent"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### refunds.list input reason [] values

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
- `"payment_returned"`

#### Response

Returned payload: [RefundListResponse](../models/RefundListResponse.md#refundlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateRefundRequestInput](../models/UpdateRefundRequestInput.md#updaterefundrequestinput) | The request body for: Update refund. minProperties: `1`. |

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

