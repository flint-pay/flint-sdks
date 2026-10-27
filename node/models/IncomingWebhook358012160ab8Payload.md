[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook358012160ab8Payload

The `payout.reversed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddata). |
| `event_type` | Required | string | Values: `"payout.reversed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook358012160ab8Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Payout](../models/Payout.md#payout) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddataobject). |

### IncomingWebhook358012160ab8Payload.data.object

Funds sent from a merchant balance to a payout destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](#incomingwebhook358012160ab8payloaddataobject-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `fee_money`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `initiated_by` | Required | string | What started the payout. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `method` | Required | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `net_money`: [declared alternatives](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddataobjectnet_money). |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null |  |
| `original_payout_id` | Optional | string |  |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null |  |
| `payout_destination_id` | Optional | string |  |
| `payout_id` | Required | string |  |
| `reversal_status` | Required | string | Values: `"none"`, `"reversing"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null |  |
| `reversed_by_payout_id` | Optional | string |  |
| `statement_descriptor` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) | A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

#### IncomingWebhook358012160ab8Payload.data.object failure_code values

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

### IncomingWebhook358012160ab8Payload.data.object.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook358012160ab8Payload.data.object.fee_money

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

### IncomingWebhook358012160ab8Payload.data.object.net_money

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### IncomingWebhook358012160ab8Payload.data.object.net_money variant 1

anyOf variant 1: Signed monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### IncomingWebhook358012160ab8Payload.data.object.net_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null.  

### IncomingWebhook358012160ab8Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

