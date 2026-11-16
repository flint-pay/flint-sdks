[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPayoutSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount sent to your bank. Always positive. `amount_money`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesamount_money). |
| `arrival_date` | Optional | string or null | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. `arrival_date`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesarrival_date). |
| `balance_source_type` | Optional | string or null | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. `balance_source_type`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesbalance_source_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `method` | Optional | string or null | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. `method`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesmethod). |
| `payout_destination_id` | Optional | string or null | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. `payout_destination_id`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributespayout_destination_id). |
| `payout_id` | Optional | string or null | Unique identifier for this payout, prefixed `po_`. `payout_id`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributespayout_id). |
| `reversal_status` | Optional | string or null | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. `reversal_status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesreversal_status). |
| `status` | Optional | string or null | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### ExpandedPayoutSummaryPreviousAttributes.amount_money

Amount sent to your bank. Always positive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ExpandedPayoutSummaryPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ExpandedPayoutSummaryPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount sent to your bank. Always positive. 

### ExpandedPayoutSummaryPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ExpandedPayoutSummaryPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ExpandedPayoutSummaryPreviousAttributes.arrival_date

### ExpandedPayoutSummaryPreviousAttributes.arrival_date variant 1

anyOf variant 1: Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival..

- Value shape: string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. Example: `"2026-08-02"`. 

### ExpandedPayoutSummaryPreviousAttributes.arrival_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. 

### ExpandedPayoutSummaryPreviousAttributes.balance_source_type

### ExpandedPayoutSummaryPreviousAttributes.balance_source_type variant 1

anyOf variant 1: Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases..

- Value shape: string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`.

### ExpandedPayoutSummaryPreviousAttributes.balance_source_type variant 2

anyOf variant 2.

- Value shape: null. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. 

### ExpandedPayoutSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedPayoutSummaryPreviousAttributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### ExpandedPayoutSummaryPreviousAttributes.method

### ExpandedPayoutSummaryPreviousAttributes.method variant 1

anyOf variant 1: Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map..

- Value shape: string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`.

### ExpandedPayoutSummaryPreviousAttributes.method variant 2

anyOf variant 2.

- Value shape: null. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. 

### ExpandedPayoutSummaryPreviousAttributes.payout_destination_id

### ExpandedPayoutSummaryPreviousAttributes.payout_destination_id variant 1

anyOf variant 1: Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination..

- Value shape: string. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. 

### ExpandedPayoutSummaryPreviousAttributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. 

### ExpandedPayoutSummaryPreviousAttributes.payout_id

### ExpandedPayoutSummaryPreviousAttributes.payout_id variant 1

anyOf variant 1: Unique identifier for this payout, prefixed `po_`..

- Value shape: string. Unique identifier for this payout, prefixed `po_`. Unique identifier for this payout, prefixed `po_`. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### ExpandedPayoutSummaryPreviousAttributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payout, prefixed `po_`. 

### ExpandedPayoutSummaryPreviousAttributes.reversal_status

### ExpandedPayoutSummaryPreviousAttributes.reversal_status variant 1

anyOf variant 1: Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded..

- Value shape: string. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`.

### ExpandedPayoutSummaryPreviousAttributes.reversal_status variant 2

anyOf variant 2.

- Value shape: null. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. 

### ExpandedPayoutSummaryPreviousAttributes.status

### ExpandedPayoutSummaryPreviousAttributes.status variant 1

anyOf variant 1: Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending..

- Value shape: string. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ExpandedPayoutSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. 

### ExpandedPayoutSummaryPreviousAttributes.supported_actions

### ExpandedPayoutSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Items values: `"cancel"`.

### ExpandedPayoutSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. 

### ExpandedPayoutSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

