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
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddataobjectamount_money). |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | When the payout was created. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Description sent when the payout was created. Absent when there is none. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](#incomingwebhook358012160ab8payloaddataobject-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout, and null until then. `fee_money`: [declared alternatives](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddataobjectfee_money). |
| `initiated_by` | Required | string | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string | Merchant receiving the payout. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata). |
| `method` | Required | string | Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Values: `"standard"`, `"instant"`, `"other"`. |
| `net_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. Null until your processor records the payout. `net_money`: [declared alternatives](../models/IncomingWebhook358012160ab8Payload.md#incomingwebhook358012160ab8payloaddataobjectnet_money). |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. |
| `original_payout_id` | Optional | string | On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null | The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. |
| `payout_destination_id` | Optional | string | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. |
| `payout_id` | Required | string | Stable identifier of the payout. |
| `reversal_status` | Required | string | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays paid. Values: `"none"`, `"reversed"`. |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null | The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. |
| `reversed_by_payout_id` | Optional | string | The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for the deposit, when one was set. |
| `status` | Required | string | Where the payout is: pending until it is sent, in_transit on its way to your bank, then paid or failed. A paid payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) | The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with whether it is pending, available, or unsupported. |
| `updated_at` | Required | string | When the payout last changed. Format: `date-time`. |

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

Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook358012160ab8Payload.data.object.fee_money

Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout, and null until then.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### IncomingWebhook358012160ab8Payload.data.object.fee_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### IncomingWebhook358012160ab8Payload.data.object.fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout, and null until then. 

### IncomingWebhook358012160ab8Payload.data.object.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### IncomingWebhook358012160ab8Payload.data.object.net_money

Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. Null until your processor records the payout.

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
- Value shape: null. Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. Null until your processor records the payout. 

### IncomingWebhook358012160ab8Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

