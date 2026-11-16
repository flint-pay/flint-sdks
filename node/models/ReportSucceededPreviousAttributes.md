[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportSucceededPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `as_of_date` | Optional | string or null | Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. `as_of_date`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesas_of_date). |
| `created_at` | Optional | string or null | When the report was requested. `created_at`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributescurrency). |
| `download` | Optional | [PublicDownloadPreviousAttributes](../models/PublicDownloadPreviousAttributes.md#publicdownloadpreviousattributes) or null | Link to download the generated report. Present only when status is succeeded. |
| `failure_reason` | Optional | string or null | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. `failure_reason`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesfailure_reason). |
| `interval_end_at` | Optional | string or null | Exclusive interval end instant. Each report type matches its own occurrence time. `interval_end_at`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesinterval_end_at). |
| `interval_start_at` | Optional | string or null | Inclusive interval start instant. Each report type matches its own occurrence time. `interval_start_at`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesinterval_start_at). |
| `report_id` | Optional | string or null | Stable identifier of the report. `report_id`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesreport_id). |
| `report_type` | Optional | string or null | The report's type and column version. See the Reports guide for its columns. Values: [13 declared values](CreateReportRequest.md#createreportrequest-report_type-values). `report_type`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesreport_type). |
| `status` | Optional | (string or null) | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`. `status`: [declared alternatives](../models/ReportSucceededPreviousAttributes.md#reportsucceededpreviousattributesstatus). |
| `timezone` | Optional | string or null | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. `timezone`: [declared alternatives](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributestimezone). |

### ReportSucceededPreviousAttributes.as_of_date

Declared alternatives: [ReportFailedEvent.data.previous_attributes.as_of_date](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesas_of_date).

### ReportSucceededPreviousAttributes.created_at

Declared alternatives: [ReportFailedEvent.data.previous_attributes.created_at](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributescreated_at).

### ReportSucceededPreviousAttributes.currency

Declared alternatives: [ReportFailedEvent.data.previous_attributes.currency](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributescurrency).

### ReportSucceededPreviousAttributes.failure_reason

Declared alternatives: [ReportFailedEvent.data.previous_attributes.failure_reason](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesfailure_reason).

### ReportSucceededPreviousAttributes.interval_end_at

Declared alternatives: [ReportFailedEvent.data.previous_attributes.interval_end_at](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesinterval_end_at).

### ReportSucceededPreviousAttributes.interval_start_at

Declared alternatives: [ReportFailedEvent.data.previous_attributes.interval_start_at](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesinterval_start_at).

### ReportSucceededPreviousAttributes.report_id

Declared alternatives: [ReportFailedEvent.data.previous_attributes.report_id](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesreport_id).

### ReportSucceededPreviousAttributes.report_type

Declared alternatives: [ReportFailedEvent.data.previous_attributes.report_type](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributesreport_type).

### ReportSucceededPreviousAttributes.status

### ReportSucceededPreviousAttributes.status variant 1, 3

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 2 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`.

### ReportSucceededPreviousAttributes.status variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportSucceededPreviousAttributes.timezone

Declared alternatives: [ReportFailedEvent.data.previous_attributes.timezone](../models/ReportFailedEvent.md#reportfailedeventdataprevious_attributestimezone).

