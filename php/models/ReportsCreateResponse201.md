[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportsCreateResponse201

A response containing `Report` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | A report generated from the merchant's activity. `data`: [declared alternatives](../models/ReportsCreateResponse201.md#reportscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReportsCreateResponse201.data

A report generated from the merchant's activity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `download` | Conditional | object | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. `download`: [field definitions](../models/ReportsCreateResponse201.md#reportscreateresponse201datadownload). |
| `failure_reason` | Conditional | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [10 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

### ReportsCreateResponse201.data variant 1: `status` = `"pending"`

oneOf variant 1: A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportsCreateResponse201.data variant 2: `status` = `"succeeded"`

oneOf variant 2: A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportsCreateResponse201.data variant 3: `status` = `"failed"`

oneOf variant 3: A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportsCreateResponse201.data.download

Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report.

Field definitions: [shared fields](ReportsCreateResponse201DataPendingDownload.md#reportscreateresponse201datapendingdownload).

