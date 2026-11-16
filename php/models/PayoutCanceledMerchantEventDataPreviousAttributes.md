[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amount sent to your bank. Always positive. |
| `arrival_date` | Optional | string or null | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. `arrival_date`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesarrival_date). |
| `balance_source_type` | Optional | string or null | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. `balance_source_type`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesbalance_source_type). |
| `created_at` | Optional | string or null | When the payout was created. `created_at`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `description` | Optional | string or null | Description sent when the payout was created. Absent when there is none. `description`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: [16 declared values](PayoutInput.md#payoutinput-failure_code-values). `failure_code`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. `failure_message`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfailure_message). |
| `fee_amount_status` | Optional | string or null | Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`. `fee_amount_status`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfee_amount_status). |
| `fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. |
| `initiated_by` | Optional | string or null | What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`. `initiated_by`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesinitiated_by). |
| `merchant_id` | Optional | string or null | Merchant receiving the payout. `merchant_id`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata). |
| `method` | Optional | string or null | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. `method`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesmethod). |
| `net_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null or null | Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when your processor hasn't recorded the payout yet. |
| `original_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null or null | The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. |
| `original_payout_id` | Optional | string or null | On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. `original_payout_id`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesoriginal_payout_id). |
| `payout_destination` | Optional | [ExpandedPayoutDestinationSummary](../models/ExpandedPayoutDestinationSummary.md#expandedpayoutdestinationsummary) or null or null | The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. |
| `payout_destination_id` | Optional | string or null | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. `payout_destination_id`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination_id). |
| `payout_id` | Optional | string or null | Stable identifier of the payout. `payout_id`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_id). |
| `reversal_status` | Optional | string or null | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. `reversal_status`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesreversal_status). |
| `reversed_by_payout` | Optional | [ExpandedPayoutSummary](../models/ExpandedPayoutSummary.md#expandedpayoutsummary) or null or null | The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. |
| `reversed_by_payout_id` | Optional | string or null | The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. `reversed_by_payout_id`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesreversed_by_payout_id). |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for the deposit, when one was set. `statement_descriptor`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesstatement_descriptor). |
| `status` | Optional | string or null | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributessupported_actions). |
| `trace_id` | Optional | [PayoutTraceID](../models/PayoutTraceID.md#payouttraceid) or null | The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. |
| `updated_at` | Optional | string or null | When the payout last changed. `updated_at`: [declared alternatives](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesupdated_at). |

### PayoutCanceledMerchantEventDataPreviousAttributes.arrival_date

### PayoutCanceledMerchantEventDataPreviousAttributes.arrival_date variant 1

anyOf variant 1: Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival..

- Value shape: string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. 

### PayoutCanceledMerchantEventDataPreviousAttributes.arrival_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. 

### PayoutCanceledMerchantEventDataPreviousAttributes.balance_source_type

### PayoutCanceledMerchantEventDataPreviousAttributes.balance_source_type variant 1

anyOf variant 1: Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases..

- Value shape: string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.balance_source_type variant 2

anyOf variant 2.

- Value shape: null. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. 

### PayoutCanceledMerchantEventDataPreviousAttributes.created_at

### PayoutCanceledMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the payout was created..

- Value shape: string. When the payout was created. When the payout was created. Format: `date-time`. 

### PayoutCanceledMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payout was created. 

### PayoutCanceledMerchantEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### PayoutCanceledMerchantEventDataPreviousAttributes.description

### PayoutCanceledMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Description sent when the payout was created. Absent when there is none..

- Value shape: string. Description sent when the payout was created. Absent when there is none. 

### PayoutCanceledMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description sent when the payout was created. Absent when there is none. 

### PayoutCanceledMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_code

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_code variant 1

anyOf variant 1: Flint-normalized payout failure code. Unknown provider values are returned as payout_failed..

- Value shape: string. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Values: `"account_closed"`, `"account_frozen"`, `"bank_account_restricted"`, `"bank_ownership_changed"`, `"could_not_process"`, `"debit_not_authorized"`, `"declined"`, `"insufficient_funds"`, `"invalid_account_number"`, `"incorrect_account_holder_name"`, `"incorrect_account_holder_address"`, `"incorrect_account_holder_tax_id"`, `"invalid_currency"`, `"no_account"`, `"unsupported_card"`, `"payout_failed"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. 

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_message

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_message variant 1

anyOf variant 1: Flint-authored payout failure message. This is stable explanatory text, not a raw provider message..

- Value shape: string. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. 

### PayoutCanceledMerchantEventDataPreviousAttributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. 

### PayoutCanceledMerchantEventDataPreviousAttributes.fee_amount_status

### PayoutCanceledMerchantEventDataPreviousAttributes.fee_amount_status variant 1

anyOf variant 1: Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states..

- Value shape: string. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Values: `"estimated"`, `"final"`, `"not_applicable"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.fee_amount_status variant 2

anyOf variant 2.

- Value shape: null. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. 

### PayoutCanceledMerchantEventDataPreviousAttributes.initiated_by

### PayoutCanceledMerchantEventDataPreviousAttributes.initiated_by variant 1

anyOf variant 1: What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other..

- Value shape: string. What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Values: `"manual"`, `"scheduled"`, `"platform"`, `"other"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. 

### PayoutCanceledMerchantEventDataPreviousAttributes.merchant_id

### PayoutCanceledMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant receiving the payout..

- Value shape: string. Merchant receiving the payout. 

### PayoutCanceledMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant receiving the payout. 

### PayoutCanceledMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata).

### PayoutCanceledMerchantEventDataPreviousAttributes.method

### PayoutCanceledMerchantEventDataPreviousAttributes.method variant 1

anyOf variant 1: Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map..

- Value shape: string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.method variant 2

anyOf variant 2.

- Value shape: null. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. 

### PayoutCanceledMerchantEventDataPreviousAttributes.original_payout_id

### PayoutCanceledMerchantEventDataPreviousAttributes.original_payout_id variant 1

anyOf variant 1: On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id..

- Value shape: string. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledMerchantEventDataPreviousAttributes.original_payout_id variant 2

anyOf variant 2.

- Value shape: null. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination_id

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination_id variant 1

anyOf variant 1: Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination..

- Value shape: string. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. 

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. 

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_id

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_id variant 1

anyOf variant 1: Stable identifier of the payout..

- Value shape: string. Stable identifier of the payout. 

### PayoutCanceledMerchantEventDataPreviousAttributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the payout. 

### PayoutCanceledMerchantEventDataPreviousAttributes.reversal_status

### PayoutCanceledMerchantEventDataPreviousAttributes.reversal_status variant 1

anyOf variant 1: Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded..

- Value shape: string. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.reversal_status variant 2

anyOf variant 2.

- Value shape: null. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. 

### PayoutCanceledMerchantEventDataPreviousAttributes.reversed_by_payout_id

### PayoutCanceledMerchantEventDataPreviousAttributes.reversed_by_payout_id variant 1

anyOf variant 1: The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id..

- Value shape: string. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledMerchantEventDataPreviousAttributes.reversed_by_payout_id variant 2

anyOf variant 2.

- Value shape: null. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. 

### PayoutCanceledMerchantEventDataPreviousAttributes.statement_descriptor

### PayoutCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 1

anyOf variant 1: Text shown on your bank statement for the deposit, when one was set..

- Value shape: string. Text shown on your bank statement for the deposit, when one was set. 

### PayoutCanceledMerchantEventDataPreviousAttributes.statement_descriptor variant 2

anyOf variant 2.

- Value shape: null. Text shown on your bank statement for the deposit, when one was set. 

### PayoutCanceledMerchantEventDataPreviousAttributes.status

### PayoutCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending..

- Value shape: string. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. 

### PayoutCanceledMerchantEventDataPreviousAttributes.supported_actions

### PayoutCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically..

- Value shape: Array of string. Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. Items values: `"cancel"`.

### PayoutCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it was scheduled automatically. 

### PayoutCanceledMerchantEventDataPreviousAttributes.updated_at

### PayoutCanceledMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the payout last changed..

- Value shape: string. When the payout last changed. When the payout last changed. Format: `date-time`. 

### PayoutCanceledMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the payout last changed. 

