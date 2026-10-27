[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook358012160ab8PayloadInput

The `payout.reversed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook358012160ab8PayloadInput.md#incomingwebhook358012160ab8payloadinputdata). |
| `event_type` | Required | string | Values: `"payout.reversed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook358012160ab8PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PayoutInput](../models/PayoutInput.md#payoutinput) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/IncomingWebhook358012160ab8PayloadInput.md#incomingwebhook358012160ab8payloadinputdataobject). |

### IncomingWebhook358012160ab8PayloadInput.data.object

Funds sent from a merchant balance to a payout destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](#incomingwebhook358012160ab8payloadinputdataobject-failure_code-values). |
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

#### IncomingWebhook358012160ab8PayloadInput.data.object failure_code values

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

### IncomingWebhook358012160ab8PayloadInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

