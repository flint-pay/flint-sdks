[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutsCancelResponse200

A response containing `Payout` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Payout](../models/Payout.md#payout) | Funds sent from a merchant balance to a payout destination. `data`: [field definitions](../models/PayoutsCancelResponse200.md#payoutscancelresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutsCancelResponse200.data

Funds sent from a merchant balance to a payout destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](IncomingWebhook358012160ab8PayloadInput.md#incomingwebhook358012160ab8payloadinputdataobject-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `initiated_by` | Required | string | What started the payout. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `method` | Required | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) or null |  |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | `original_payout`: [declared alternatives](../models/PayoutsCancelResponse200.md#payoutscancelresponse200dataoriginal_payout). |
| `original_payout_id` | Optional | string |  |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null | `payout_destination`: [declared alternatives](../models/PayoutsCancelResponse200.md#payoutscancelresponse200datapayout_destination). |
| `payout_destination_id` | Optional | string |  |
| `payout_id` | Required | string |  |
| `reversal_status` | Required | string | Values: `"none"`, `"reversing"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | `reversed_by_payout`: [declared alternatives](../models/PayoutsCancelResponse200.md#payoutscancelresponse200dataoriginal_payout). |
| `reversed_by_payout_id` | Optional | string |  |
| `statement_descriptor` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) | A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PayoutsCancelResponse200.data.original_payout

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
| `reversal_status` | Conditional | string | Values: `"none"`, `"reversing"`, `"reversed"`. |
| `status` | Conditional | string | Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |

### PayoutsCancelResponse200.data.original_payout variant 1

anyOf variant 1: A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded..

- Required: `amount_money`, `balance_source_type`, `currency`, `method`, `payout_id`, `reversal_status`, `status`.
- Optional: `arrival_date`, `created_at`, `payout_destination_id`, `updated_at`.

### PayoutsCancelResponse200.data.original_payout variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `arrival_date`, `balance_source_type`, `created_at`, `currency`, `method`, `payout_destination_id`, `payout_id`, `reversal_status`, `status`, `updated_at`.
- Value shape: null.  

### PayoutsCancelResponse200.data.payout_destination

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

### PayoutsCancelResponse200.data.payout_destination variant 1

anyOf variant 1: A payout destination's summary fields, such as type, bank name, last four digits, and status, returned when the destination is expanded..

- Required: `available_payout_methods`, `currency`, `default_for_currency`, `payout_destination_id`, `status`, `type`.
- Optional: `bank_name`, `country`, `created_at`, `last4`, `updated_at`.

### PayoutsCancelResponse200.data.payout_destination variant 2

anyOf variant 2.

- Undeclared: `available_payout_methods`, `bank_name`, `country`, `created_at`, `currency`, `default_for_currency`, `last4`, `payout_destination_id`, `status`, `type`, `updated_at`.
- Value shape: null.  

### PayoutsCancelResponse200.data.reversed_by_payout

Declared alternatives: [PayoutsCancelResponse200.data.original_payout](../models/PayoutsCancelResponse200.md#payoutscancelresponse200dataoriginal_payout).

