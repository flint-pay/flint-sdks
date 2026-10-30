[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutResponse

A response containing `Payout` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Payout](../models/Payout.md#payout) | Funds sent from a merchant balance to a payout destination. `data`: [field definitions](../models/PayoutResponse.md#payoutresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutResponse.data

Funds sent from a merchant balance to a payout destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | When the payout was created. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Description sent when the payout was created. Absent when there is none. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](PayoutInput.md#payoutinput-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout, and null until then. |
| `initiated_by` | Required | string | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string | Merchant receiving the payout. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PayoutResponse.md#payoutresponsedatametadata). |
| `method` | Required | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. Null until your processor records the payout. |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. `original_payout`: [declared alternatives](../models/PayoutResponse.md#payoutresponsedataoriginal_payout). |
| `original_payout_id` | Optional | string | On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null | The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. `payout_destination`: [declared alternatives](../models/PayoutResponse.md#payoutresponsedatapayout_destination). |
| `payout_destination_id` | Optional | string | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. |
| `payout_id` | Required | string | Stable identifier of the payout. |
| `reversal_status` | Required | string | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays paid. Values: `"none"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. `reversed_by_payout`: [declared alternatives](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout). |
| `reversed_by_payout_id` | Optional | string | The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for the deposit, when one was set. |
| `status` | Required | string | Where the payout is: pending until it is sent, in_transit on its way to your bank, then paid or failed. A paid payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) | The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | When the payout last changed. Format: `date-time`. |

### PayoutResponse.data.metadata

Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PayoutResponse.data.original_payout

The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Conditional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Conditional | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `method` | Conditional | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `payout_destination_id` | Conditional | string |  |
| `payout_id` | Conditional | string |  |
| `reversal_status` | Conditional | string | Values: `"none"`, `"reversed"`. |
| `status` | Conditional | string | Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |

### PayoutResponse.data.original_payout variant 1

anyOf ExpandedPayoutSummary: A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded..

- Required: `amount_money`, `balance_source_type`, `currency`, `method`, `payout_id`, `reversal_status`, `status`.
- Optional: `arrival_date`, `created_at`, `payout_destination_id`, `updated_at`.

### PayoutResponse.data.original_payout variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `arrival_date`, `balance_source_type`, `created_at`, `currency`, `method`, `payout_destination_id`, `payout_id`, `reversal_status`, `status`, `updated_at`.
- Value shape: null. The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. 

### PayoutResponse.data.payout_destination

The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Conditional | Array of string | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. |
| `bank_name` | Conditional | string |  |
| `country` | Conditional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `default_for_currency` | Conditional | boolean |  |
| `last4` | Conditional | string |  |
| `payout_destination_id` | Conditional | string |  |
| `status` | Conditional | string | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `type` | Conditional | string | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Conditional | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PayoutResponse.data.payout_destination variant 1

anyOf ExpandedPayoutDestinationSummary: A payout destination's summary fields, such as type, bank name, last four digits, and status, returned when the destination is expanded..

- Required: `available_payout_methods`, `currency`, `default_for_currency`, `payout_destination_id`, `status`, `type`, `version`.
- Optional: `bank_name`, `country`, `created_at`, `last4`, `updated_at`.

### PayoutResponse.data.payout_destination variant 2

anyOf variant 2.

- Undeclared: `available_payout_methods`, `bank_name`, `country`, `created_at`, `currency`, `default_for_currency`, `last4`, `payout_destination_id`, `status`, `type`, `updated_at`, `version`.
- Value shape: null. The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. 

### PayoutResponse.data.reversed_by_payout

The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout.

Field definitions: [shared fields](#payoutresponsedataoriginal_payout).

### PayoutResponse.data.reversed_by_payout variant 1

anyOf ExpandedPayoutSummary: A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded..

- Required: `amount_money`, `balance_source_type`, `currency`, `method`, `payout_id`, `reversal_status`, `status`.
- Optional: `arrival_date`, `created_at`, `payout_destination_id`, `updated_at`.

### PayoutResponse.data.reversed_by_payout variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `arrival_date`, `balance_source_type`, `created_at`, `currency`, `method`, `payout_destination_id`, `payout_id`, `reversal_status`, `status`, `updated_at`.
- Value shape: null. The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. 

