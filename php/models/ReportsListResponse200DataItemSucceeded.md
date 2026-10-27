[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportsListResponse200DataItemSucceeded

A report generated from the merchant's activity.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Required | [ReportsListResponse200DataItemSucceededDownload](../models/ReportsListResponse200DataItemSucceededDownload.md#reportslistresponse200dataitemsucceededdownload) | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. |
| `failure_reason` | Optional | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

