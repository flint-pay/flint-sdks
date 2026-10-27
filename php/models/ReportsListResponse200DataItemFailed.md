[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportsListResponse200DataItemFailed

A report generated from the merchant's activity.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Optional | [ReportsListResponse200DataItemFailedDownload](../models/ReportsListResponse200DataItemFailedDownload.md#reportslistresponse200dataitemfaileddownload) | A temporary link for downloading a generated report. |
| `failure_reason` | Required | string | Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | Values: `"failed"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

