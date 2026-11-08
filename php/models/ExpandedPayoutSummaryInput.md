[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPayoutSummaryInput

A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `arrival_date` | Optional | string | Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: `date`. Example: `"2026-08-02"`. |
| `balance_source_type` | Required | string | Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Values: `"card"`, `"bank_account"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `method` | Required | string | Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Values: `"standard"`, `"instant"`, `"other"`. |
| `payout_destination_id` | Optional | string | Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. |
| `payout_id` | Required | string | Unique identifier for this payout, prefixed `po_`. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. |
| `reversal_status` | Required | string | Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Values: `"none"`, `"reversed"`. |
| `status` | Required | string | Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Values: `"pending"`, `"in_transit"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Items values: `"cancel"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

