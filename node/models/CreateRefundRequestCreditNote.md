[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundRequestCreditNote

The `credit_note` variant of `CreateRefundRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateRefundRequest.md#createrefundrequestamount_money). |
| `credit_note_id` | Required | string | Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: `1`. pattern: `^cn_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `expected_credit_note_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `processed_by` | Optional | string | Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: `"flint"`. Values: `"flint"`, `"merchant"`. |
| `reason` | Optional | string | Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Values: [13 declared values](CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |
| `refund_reference` | Optional | string | Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: `1`. maxLength: `255`. |
| `refund_type` | Required | string | What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Values: `"credit_note"`. |
| `refunded_at` | Optional | string | When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

### CreateRefundRequestCreditNote variant 1: `refund_type` = `"credit_note"`

anyOf variant 1.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).

### CreateRefundRequestCreditNote variant 2: `refund_type` = `"credit_note"`

anyOf variant 2.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).

### CreateRefundRequestCreditNote variant 3: `refund_type` = `"credit_note"`

anyOf variant 3.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).

### CreateRefundRequestCreditNote variant 4: `refund_type` = `"credit_note"`

anyOf variant 4.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).

### CreateRefundRequestCreditNote variant 5: `refund_type` = `"credit_note"`

anyOf variant 5.

- Condition: not (present(`destinations`, `tender_allocations`)).
- Condition: not (present(`destinations`, `gift_card_load_id`)).

### CreateRefundRequestCreditNote.amount_money

Field definitions: [CreateRefundRequest.amount_money](../models/CreateRefundRequest.md#createrefundrequestamount_money).

### CreateRefundRequestCreditNote.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

