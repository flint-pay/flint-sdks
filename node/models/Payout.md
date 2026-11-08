[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Payout

Funds sent from a merchant balance to a payout destination.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/ExpandedPayoutSummary.md#expandedpayoutsummaryamount_money). |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. Example: `"2026-08-02"`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | When the payout was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Description sent when the payout was created. Absent when there is none. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](#payout-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. `fee_money`: [declared alternatives](../models/Payout.md#payoutfee_money). |
| `initiated_by` | Required | string | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string | Merchant receiving the payout. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata). |
| `method` | Required | string | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet. `net_money`: [declared alternatives](../models/Payout.md#payoutnet_money). |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. |
| `original_payout_id` | Optional | string | On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null | The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. |
| `payout_destination_id` | Optional | string | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. |
| `payout_id` | Required | string | Stable identifier of the payout. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. |
| `reversal_status` | Required | string | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. |
| `reversed_by_payout_id` | Optional | string | The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for the deposit, when one was set. |
| `status` | Required | string | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. Items values: `"cancel"`. |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) | The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | When the payout last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### Payout failure_code values

- `"account_closed"`
- `"account_frozen"`
- `"bank_account_restricted"`
- `"bank_ownership_changed"`
- `"could_not_process"`
- `"debit_not_authorized"`
- `"declined"`
- `"insufficient_funds"`
- `"invalid_account_number"`
- `"incorrect_account_holder_name"`
- `"incorrect_account_holder_address"`
- `"incorrect_account_holder_tax_id"`
- `"invalid_currency"`
- `"no_account"`
- `"unsupported_card"`
- `"payout_failed"`

### Payout.amount_money

Field definitions: [ExpandedPayoutSummary.amount_money](../models/ExpandedPayoutSummary.md#expandedpayoutsummaryamount_money).

### Payout.fee_money

Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### Payout.fee_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### Payout.fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. 

### Payout.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### Payout.net_money

Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### Payout.net_money variant 1

anyOf SignedMoney: Signed monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### Payout.net_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet. 

