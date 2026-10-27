[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutInput

Funds sent from a merchant balance to a payout destination.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](IncomingWebhook358012160ab8PayloadInput.md#incomingwebhook358012160ab8payloadinputdataobject-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `initiated_by` | Required | string | What started the payout. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `method` | Required | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) or null |  |
| `original_payout` | Optional | [ExpandedPayoutSummaryInput](../models/ExpandedPayoutSummaryInput.md#expandedpayoutsummaryinput) or null |  |
| `original_payout_id` | Optional | string |  |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummaryInput](../models/ExpandedPayoutDestinationSummaryInput.md#expandedpayoutdestinationsummaryinput) or null |  |
| `payout_destination_id` | Optional | string |  |
| `payout_id` | Required | string |  |
| `reversal_status` | Required | string | Values: `"none"`, `"reversing"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummaryInput](../models/ExpandedPayoutSummaryInput.md#expandedpayoutsummaryinput) or null |  |
| `reversed_by_payout_id` | Optional | string |  |
| `statement_descriptor` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `trace_id` | Optional | [PayoutTraceIDInput](../models/PayoutTraceIDInput.md#payouttraceidinput) | A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

