[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCanceledInstalledMerchantsEvent

The `payout.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PayoutCanceledInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributes). |

### PayoutCanceledInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/ExpandedPayoutSummary.md#expandedpayoutsummaryamount_money). |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. Example: `"2026-08-02"`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Required | string | When the payout was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Description sent when the payout was created. Absent when there is none. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_code` | Optional | string | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](Payout.md#payout-failure_code-values). |
| `failure_message` | Optional | string | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. |
| `fee_amount_status` | Required | string | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. `fee_money`: [declared alternatives](../models/Payout.md#payoutfee_money). |
| `initiated_by` | Required | string | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. |
| `merchant_id` | Required | string | Merchant receiving the payout. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemmetadata). |
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

### PayoutCanceledInstalledMerchantsEvent.data.object.amount_money

Field definitions: [ExpandedPayoutSummary.amount_money](../models/ExpandedPayoutSummary.md#expandedpayoutsummaryamount_money).

### PayoutCanceledInstalledMerchantsEvent.data.object.fee_money

Declared alternatives: [Payout.fee_money](../models/Payout.md#payoutfee_money).

### PayoutCanceledInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

### PayoutCanceledInstalledMerchantsEvent.data.object.net_money

Declared alternatives: [Payout.net_money](../models/Payout.md#payoutnet_money).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount sent to your bank. Always positive. `amount_money`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesamount_money). |
| `arrival_date` | Optional | string or null | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. `arrival_date`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesarrival_date). |
| `balance_source_type` | Optional | string or null | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. `balance_source_type`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesbalance_source_type). |
| `created_at` | Optional | string or null | When the payout was created. `created_at`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `description` | Optional | string or null | Description sent when the payout was created. Absent when there is none. `description`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](Payout.md#payout-failure_code-values). `failure_code`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesfailure_code). |
| `failure_message` | Optional | string or null | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. `failure_message`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesfailure_message). |
| `fee_amount_status` | Optional | string or null | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. `fee_amount_status`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesfee_amount_status). |
| `fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. `fee_money`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesfee_money). |
| `initiated_by` | Optional | string or null | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. `initiated_by`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesinitiated_by). |
| `merchant_id` | Optional | string or null | Merchant receiving the payout. `merchant_id`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `method` | Optional | string or null | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. `method`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesmethod). |
| `net_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet. `net_money`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesnet_money). |
| `original_payout` | Optional | [ExpandedPayoutSummaryPreviousAttributes](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributes) or null | The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. |
| `original_payout_id` | Optional | string or null | On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. `original_payout_id`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesoriginal_payout_id). |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummaryPreviousAttributes](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributes) or null | The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. |
| `payout_destination_id` | Optional | string or null | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. `payout_destination_id`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributespayout_destination_id). |
| `payout_id` | Optional | string or null | Stable identifier of the payout. `payout_id`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributespayout_id). |
| `reversal_status` | Optional | string or null | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. `reversal_status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesreversal_status). |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummaryPreviousAttributes](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributes) or null | The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. |
| `reversed_by_payout_id` | Optional | string or null | The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. `reversed_by_payout_id`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesreversed_by_payout_id). |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for the deposit, when one was set. `statement_descriptor`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesstatement_descriptor). |
| `status` | Optional | string or null | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributessupported_actions). |
| `trace_id` | Optional | [PayoutTraceIDPreviousAttributes](../models/PayoutTraceIDPreviousAttributes.md#payouttraceidpreviousattributes) or null | The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. |
| `updated_at` | Optional | string or null | When the payout last changed. `updated_at`: [declared alternatives](../models/PayoutCanceledInstalledMerchantsEvent.md#payoutcanceledinstalledmerchantseventdataprevious_attributesupdated_at). |

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.amount_money

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.amount_money](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesamount_money).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.arrival_date

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.arrival_date](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesarrival_date).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.balance_source_type

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.balance_source_type](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesbalance_source_type).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.created_at

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the payout was created..

- Value shape: string. When the payout was created. When the payout was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payout was created. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.description

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Description sent when the payout was created. Absent when there is none..

- Value shape: string. Description sent when the payout was created. Absent when there is none. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Description sent when the payout was created. Absent when there is none. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_code

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_code variant 1

anyOf variant 1: Flint-normalized payout failure code. Unknown provider values are returned as payout_failed..

- Value shape: string. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: `"account_closed"`, `"account_frozen"`, `"bank_account_restricted"`, `"bank_ownership_changed"`, `"could_not_process"`, `"debit_not_authorized"`, `"declined"`, `"insufficient_funds"`, `"invalid_account_number"`, `"incorrect_account_holder_name"`, `"incorrect_account_holder_address"`, `"incorrect_account_holder_tax_id"`, `"invalid_currency"`, `"no_account"`, `"unsupported_card"`, `"payout_failed"`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_message

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_message variant 1

anyOf variant 1: Flint-authored payout failure message. This is stable explanatory text, not a raw provider message..

- Value shape: string. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_amount_status

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_amount_status variant 1

anyOf variant 1: Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states..

- Value shape: string. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_amount_status variant 2

anyOf variant 2.

- Value shape: null. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_money

Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 1

anyOf variant 1: What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other..

- Value shape: string. What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.merchant_id

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant receiving the payout..

- Value shape: string. Merchant receiving the payout. Merchant receiving the payout. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant receiving the payout. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.method

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.method](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesmethod).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.net_money

Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.

Field definitions: [shared fields](BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.net_money variant 1

anyOf SignedMoneyPreviousAttributes.

- Optional: `amount`, `currency`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.net_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.net_money variant 1.amount

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1amount).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.net_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.original_payout_id

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.original_payout_id variant 1

anyOf variant 1: On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id..

- Value shape: string. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.original_payout_id variant 2

anyOf variant 2.

- Value shape: null. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.payout_destination_id

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.payout_destination_id](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributespayout_destination_id).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.payout_id

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.payout_id variant 1

anyOf variant 1: Stable identifier of the payout..

- Value shape: string. Stable identifier of the payout. Stable identifier of the payout. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the payout. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.reversal_status

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.reversal_status](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesreversal_status).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.reversed_by_payout_id

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.reversed_by_payout_id variant 1

anyOf variant 1: The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id..

- Value shape: string. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.reversed_by_payout_id variant 2

anyOf variant 2.

- Value shape: null. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.statement_descriptor

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.statement_descriptor variant 1

anyOf variant 1: Text shown on your bank statement for the deposit, when one was set..

- Value shape: string. Text shown on your bank statement for the deposit, when one was set. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. Text shown on your bank statement for the deposit, when one was set. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.status](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesstatus).

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically..

- Value shape: Array of string. Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. Items values: `"cancel"`.

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the payout last changed..

- Value shape: string. When the payout last changed. When the payout last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the payout last changed. 

### PayoutCanceledInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

