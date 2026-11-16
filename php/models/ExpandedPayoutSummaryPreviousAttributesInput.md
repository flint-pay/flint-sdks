[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPayoutSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount sent to your bank. Always positive. |
| `arrival_date` | Optional | string or null | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. `arrival_date`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputarrival_date). |
| `balance_source_type` | Optional | string or null | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. `balance_source_type`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputbalance_source_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `method` | Optional | string or null | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. `method`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputmethod). |
| `payout_destination_id` | Optional | string or null | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. `payout_destination_id`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputpayout_destination_id). |
| `payout_id` | Optional | string or null | Unique identifier for this payout, prefixed `po_`. `payout_id`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputpayout_id). |
| `reversal_status` | Optional | string or null | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. `reversal_status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputreversal_status). |
| `status` | Optional | string or null | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPayoutSummaryPreviousAttributesInput.md#expandedpayoutsummarypreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### ExpandedPayoutSummaryPreviousAttributesInput.arrival_date

### ExpandedPayoutSummaryPreviousAttributesInput.arrival_date variant 1

anyOf variant 1: Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival..

- Value shape: string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. Example: `"2026-08-02"`. 

### ExpandedPayoutSummaryPreviousAttributesInput.arrival_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. 

### ExpandedPayoutSummaryPreviousAttributesInput.balance_source_type

### ExpandedPayoutSummaryPreviousAttributesInput.balance_source_type variant 1

anyOf variant 1: Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases..

- Value shape: string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`.

### ExpandedPayoutSummaryPreviousAttributesInput.balance_source_type variant 2

anyOf variant 2.

- Value shape: null. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. 

### ExpandedPayoutSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPayoutSummaryPreviousAttributesInput.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

### ExpandedPayoutSummaryPreviousAttributesInput.method

### ExpandedPayoutSummaryPreviousAttributesInput.method variant 1

anyOf variant 1: Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map..

- Value shape: string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`.

### ExpandedPayoutSummaryPreviousAttributesInput.method variant 2

anyOf variant 2.

- Value shape: null. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. 

### ExpandedPayoutSummaryPreviousAttributesInput.payout_destination_id

### ExpandedPayoutSummaryPreviousAttributesInput.payout_destination_id variant 1

anyOf variant 1: Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination..

- Value shape: string. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. 

### ExpandedPayoutSummaryPreviousAttributesInput.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. 

### ExpandedPayoutSummaryPreviousAttributesInput.payout_id

### ExpandedPayoutSummaryPreviousAttributesInput.payout_id variant 1

anyOf variant 1: Unique identifier for this payout, prefixed `po_`..

- Value shape: string. Unique identifier for this payout, prefixed `po_`. Unique identifier for this payout, prefixed `po_`. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### ExpandedPayoutSummaryPreviousAttributesInput.payout_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payout, prefixed `po_`. 

### ExpandedPayoutSummaryPreviousAttributesInput.reversal_status

### ExpandedPayoutSummaryPreviousAttributesInput.reversal_status variant 1

anyOf variant 1: Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded..

- Value shape: string. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`.

### ExpandedPayoutSummaryPreviousAttributesInput.reversal_status variant 2

anyOf variant 2.

- Value shape: null. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. 

### ExpandedPayoutSummaryPreviousAttributesInput.status

### ExpandedPayoutSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending..

- Value shape: string. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ExpandedPayoutSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. 

### ExpandedPayoutSummaryPreviousAttributesInput.supported_actions

### ExpandedPayoutSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Items values: `"cancel"`.

### ExpandedPayoutSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. 

### ExpandedPayoutSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

