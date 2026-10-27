[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReportRequestInput

The request body for: Create a report.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on currency. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `interval_end_at` | Required | string | Exclusive report interval end instant. Each report type matches its own occurrence time. At most the same local time 366 calendar days after interval_start_at in timezone. Must not be in the future. Format: `date-time`. minLength: `1`. |
| `interval_start_at` | Required | string | Inclusive report interval start instant. Each report type matches its own occurrence time. Format: `date-time`. minLength: `1`. |
| `report_type` | Required | string | Which report to generate. The value names the row and the column version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and columns. Values: [10 declared values](#createreportrequestinput-report_type-values). |
| `timezone` | Optional | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: `1`. |

#### CreateReportRequestInput report_type values

- `"gift_card_liability_v1"`
- `"orders_itemized_v1"`
- `"orders_itemized_v2"`
- `"payments_itemized_v1"`
- `"balance_transactions_itemized_v1"`
- `"payouts_itemized_v1"`
- `"tax_itemized_v1"`
- `"tax_summarized_v1"`
- `"merchant_billing_itemized_v1"`
- `"tax_transactions_itemized_v1"`

