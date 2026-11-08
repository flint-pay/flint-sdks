[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportFailedInput

A report generated from the merchant's activity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `as_of_date` | Optional | string | Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `download` | Optional | [PublicDownloadInput](../models/PublicDownloadInput.md#publicdownloadinput) | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. |
| `failure_reason` | Required | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rep_01KEZF7C00M947R0GYFMT8VXKJ"`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [13 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"failed"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

