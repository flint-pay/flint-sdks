[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportFailedEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and object and Alternative shapes (see declared variants) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataobject). |
| `previous_attributes` | Optional | object and Alternative shapes (see declared variants) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributes). |

### ReportFailedEventData.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `as_of_date` | Optional | string | Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Format: `date`. |
| `created_at` | Required | string | When the report was requested. Format: `date-time`. |
| `currency` | Required | string | Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `download` | Conditional | object | Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. `download`: [field definitions](../models/ReportResponse.md#reportresponsedatadownload). |
| `failure_reason` | Conditional | string | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. |
| `interval_end_at` | Required | string | Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `interval_start_at` | Required | string | Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. |
| `report_id` | Required | string | Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `report_type` | Required | string | The report's type and column version. See the Reports guide for its columns. Values: [13 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). |
| `status` | Required | string | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `timezone` | Required | string | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. |

### ReportFailedEventData.object variant 1: `status` = `"pending"`

oneOf with status: "pending": A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportFailedEventData.object variant 2: `status` = `"succeeded"`

oneOf with status: "succeeded": A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedEventData.object variant 3: `status` = `"failed"`

oneOf with status: "failed": A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportFailedEventData.object.download

Field definitions: [ReportResponse.data.download](../models/ReportResponse.md#reportresponsedatadownload).

### ReportFailedEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `as_of_date` | Optional | string or null | Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. `as_of_date`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesas_of_date). |
| `created_at` | Optional | string or null | When the report was requested. `created_at`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributescurrency). |
| `download` | Optional | Alternative shapes (see declared variants) | Link to download the generated report. Present only when status is succeeded. `download`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesdownload). |
| `failure_reason` | Optional | string or null | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. `failure_reason`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesfailure_reason). |
| `interval_end_at` | Optional | string or null | Exclusive interval end instant. Each report type matches its own occurrence time. `interval_end_at`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesinterval_end_at). |
| `interval_start_at` | Optional | string or null | Inclusive interval start instant. Each report type matches its own occurrence time. `interval_start_at`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesinterval_start_at). |
| `report_id` | Optional | string or null | Stable identifier of the report. `report_id`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesreport_id). |
| `report_type` | Optional | string or null | The report's type and column version. See the Reports guide for its columns. Values: [13 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). `report_type`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributesreport_type). |
| `status` | Optional | (string or null) | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributes-variant-1status), [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributes-variant-2status), [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributes-variant-3status). |
| `timezone` | Optional | string or null | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. `timezone`: [declared alternatives](../models/ReportFailedEventData.md#reportfailedeventdataprevious_attributestimezone). |

### ReportFailedEventData.previous_attributes variant 1: `status` = `"pending"`

anyOf variant 1.

- Constraints for `status`: Values: `"pending"`.

### ReportFailedEventData.previous_attributes variant 2: `status` = `"succeeded"`

anyOf variant 2.

- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedEventData.previous_attributes variant 3: `status` = `"failed"`

anyOf variant 3.

- Constraints for `status`: Values: `"failed"`.

### ReportFailedEventData.previous_attributes.as_of_date

### ReportFailedEventData.previous_attributes.as_of_date variant 1

anyOf variant 1: Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported..

- Value shape: string. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Format: `date`. 

### ReportFailedEventData.previous_attributes.as_of_date variant 2

anyOf variant 2.

- Value shape: null. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. 

### ReportFailedEventData.previous_attributes.created_at

### ReportFailedEventData.previous_attributes.created_at variant 1

anyOf variant 1: When the report was requested..

- Value shape: string. When the report was requested. When the report was requested. Format: `date-time`. 

### ReportFailedEventData.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the report was requested. 

### ReportFailedEventData.previous_attributes.currency

### ReportFailedEventData.previous_attributes.currency variant 1

anyOf variant 1: Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes..

- Value shape: string. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### ReportFailedEventData.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. 

### ReportFailedEventData.previous_attributes.download

Link to download the generated report. Present only when status is succeeded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Conditional | string | When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. Format: `date-time`. |
| `report_download_id` | Conditional | string | Identifier of this download, the last segment of url. pattern: `^rdl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `url` | Conditional | string | Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file. |

### ReportFailedEventData.previous_attributes.download variant 1

anyOf PublicDownload: Link to download the generated report. Present only when status is succeeded..

- Required: `expires_at`, `report_download_id`, `url`.

### ReportFailedEventData.previous_attributes.download variant 2

anyOf variant 2.

- Undeclared: `expires_at`, `report_download_id`, `url`.
- Value shape: null. Link to download the generated report. Present only when status is succeeded. 

### ReportFailedEventData.previous_attributes.failure_reason

### ReportFailedEventData.previous_attributes.failure_reason variant 1

anyOf variant 1: Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed..

- Value shape: string. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`.

### ReportFailedEventData.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. 

### ReportFailedEventData.previous_attributes.interval_end_at

### ReportFailedEventData.previous_attributes.interval_end_at variant 1

anyOf variant 1: Exclusive interval end instant. Each report type matches its own occurrence time..

- Value shape: string. Exclusive interval end instant. Each report type matches its own occurrence time. Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. 

### ReportFailedEventData.previous_attributes.interval_end_at variant 2

anyOf variant 2.

- Value shape: null. Exclusive interval end instant. Each report type matches its own occurrence time. 

### ReportFailedEventData.previous_attributes.interval_start_at

### ReportFailedEventData.previous_attributes.interval_start_at variant 1

anyOf variant 1: Inclusive interval start instant. Each report type matches its own occurrence time..

- Value shape: string. Inclusive interval start instant. Each report type matches its own occurrence time. Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. 

### ReportFailedEventData.previous_attributes.interval_start_at variant 2

anyOf variant 2.

- Value shape: null. Inclusive interval start instant. Each report type matches its own occurrence time. 

### ReportFailedEventData.previous_attributes.report_id

### ReportFailedEventData.previous_attributes.report_id variant 1

anyOf variant 1: Stable identifier of the report..

- Value shape: string. Stable identifier of the report. Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. 

### ReportFailedEventData.previous_attributes.report_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the report. 

### ReportFailedEventData.previous_attributes.report_type

### ReportFailedEventData.previous_attributes.report_type variant 1

anyOf variant 1: The report's type and column version. See the Reports guide for its columns..

- Value shape: string. The report's type and column version. See the Reports guide for its columns. Values: `"receivables_aging_v1"`, `"invoices_itemized_v1"`, `"gift_card_liability_v1"`, `"orders_itemized_v1"`, `"orders_itemized_v2"`, `"payments_itemized_v1"`, `"balance_transactions_itemized_v1"`, `"payouts_itemized_v1"`, `"tax_itemized_v1"`, `"tax_summarized_v1"`, `"merchant_billing_itemized_v1"`, `"tax_transactions_itemized_v1"`, `"tax_transactions_itemized_v2"`.

### ReportFailedEventData.previous_attributes.report_type variant 2

anyOf variant 2.

- Value shape: null. The report's type and column version. See the Reports guide for its columns. 

### ReportFailedEventData.previous_attributes variant 1.status

### ReportFailedEventData.previous_attributes variant 1.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventData.previous_attributes variant 1.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventData.previous_attributes variant 1.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`.

### ReportFailedEventData.previous_attributes.timezone

### ReportFailedEventData.previous_attributes.timezone variant 1

anyOf variant 1: IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone..

- Value shape: string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. 

### ReportFailedEventData.previous_attributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. 

### ReportFailedEventData.previous_attributes variant 2.status

### ReportFailedEventData.previous_attributes variant 2.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventData.previous_attributes variant 2.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventData.previous_attributes variant 2.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`.

### ReportFailedEventData.previous_attributes variant 3.status

### ReportFailedEventData.previous_attributes variant 3.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventData.previous_attributes variant 3.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventData.previous_attributes variant 3.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"failed"`.

