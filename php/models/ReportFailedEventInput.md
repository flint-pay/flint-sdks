[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportFailedEventInput

The `report.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReportFailedEventInput.md#reportfailedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"report.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReportFailedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and (object and ([ReportPendingInput](../models/ReportPendingInput.md#reportpendinginput) or [ReportSucceededInput](../models/ReportSucceededInput.md#reportsucceededinput) or [ReportFailedInput](../models/ReportFailedInput.md#reportfailedinput))) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataobject). |
| `previous_attributes` | Optional | object and ([ReportPendingPreviousAttributesInput](../models/ReportPendingPreviousAttributesInput.md#reportpendingpreviousattributesinput) or [ReportSucceededPreviousAttributesInput](../models/ReportSucceededPreviousAttributesInput.md#reportsucceededpreviousattributesinput) or [ReportFailedPreviousAttributesInput](../models/ReportFailedPreviousAttributesInput.md#reportfailedpreviousattributesinput)) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributes). |

### ReportFailedEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ReportInput.md#reportinput).

### ReportFailedEventInput.data.object variant 1: `status` = `"pending"`

oneOf with status: "pending": A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportFailedEventInput.data.object variant 2: `status` = `"succeeded"`

oneOf with status: "succeeded": A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedEventInput.data.object variant 3: `status` = `"failed"`

oneOf with status: "failed": A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportFailedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `as_of_date` | Optional | string or null | Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. `as_of_date`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesas_of_date). |
| `created_at` | Optional | string or null | When the report was requested. `created_at`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributescurrency). |
| `download` | Optional | [PublicDownloadPreviousAttributesInput](../models/PublicDownloadPreviousAttributesInput.md#publicdownloadpreviousattributesinput) or null | Link to download the generated report. Present only when status is succeeded. |
| `failure_reason` | Optional | string or null | Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`. `failure_reason`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesfailure_reason). |
| `interval_end_at` | Optional | string or null | Exclusive interval end instant. Each report type matches its own occurrence time. `interval_end_at`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesinterval_end_at). |
| `interval_start_at` | Optional | string or null | Inclusive interval start instant. Each report type matches its own occurrence time. `interval_start_at`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesinterval_start_at). |
| `report_id` | Optional | string or null | Stable identifier of the report. `report_id`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesreport_id). |
| `report_type` | Optional | string or null | The report's type and column version. See the Reports guide for its columns. Values: [13 declared values](CreateReportRequestInput.md#createreportrequestinput-report_type-values). `report_type`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributesreport_type). |
| `status` | Optional | (string or null) | pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributes-variant-1status), [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributes-variant-2status), [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributes-variant-3status). |
| `timezone` | Optional | string or null | IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. `timezone`: [declared alternatives](../models/ReportFailedEventInput.md#reportfailedeventinputdataprevious_attributestimezone). |

### ReportFailedEventInput.data.previous_attributes variant 1: `status` = `"pending"`

anyOf ReportPendingPreviousAttributes.

- Constraints for `status`: Values: `"pending"`.

### ReportFailedEventInput.data.previous_attributes variant 2: `status` = `"succeeded"`

anyOf ReportSucceededPreviousAttributes.

- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedEventInput.data.previous_attributes variant 3: `status` = `"failed"`

anyOf ReportFailedPreviousAttributes.

- Constraints for `status`: Values: `"failed"`.

### ReportFailedEventInput.data.previous_attributes.as_of_date

### ReportFailedEventInput.data.previous_attributes.as_of_date variant 1

anyOf variant 1: Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported..

- Value shape: string. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Format: `date`. Example: `"2026-08-02"`. 

### ReportFailedEventInput.data.previous_attributes.as_of_date variant 2

anyOf variant 2.

- Value shape: null. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. 

### ReportFailedEventInput.data.previous_attributes.created_at

### ReportFailedEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the report was requested..

- Value shape: string. When the report was requested. When the report was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReportFailedEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the report was requested. 

### ReportFailedEventInput.data.previous_attributes.currency

### ReportFailedEventInput.data.previous_attributes.currency variant 1

anyOf variant 1: Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes..

- Value shape: string. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### ReportFailedEventInput.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. 

### ReportFailedEventInput.data.previous_attributes.failure_reason

### ReportFailedEventInput.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed..

- Value shape: string. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Values: `"generation_failed"`, `"data_unavailable"`, `"limit_exceeded"`.

### ReportFailedEventInput.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. 

### ReportFailedEventInput.data.previous_attributes.interval_end_at

### ReportFailedEventInput.data.previous_attributes.interval_end_at variant 1

anyOf variant 1: Exclusive interval end instant. Each report type matches its own occurrence time..

- Value shape: string. Exclusive interval end instant. Each report type matches its own occurrence time. Exclusive interval end instant. Each report type matches its own occurrence time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReportFailedEventInput.data.previous_attributes.interval_end_at variant 2

anyOf variant 2.

- Value shape: null. Exclusive interval end instant. Each report type matches its own occurrence time. 

### ReportFailedEventInput.data.previous_attributes.interval_start_at

### ReportFailedEventInput.data.previous_attributes.interval_start_at variant 1

anyOf variant 1: Inclusive interval start instant. Each report type matches its own occurrence time..

- Value shape: string. Inclusive interval start instant. Each report type matches its own occurrence time. Inclusive interval start instant. Each report type matches its own occurrence time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReportFailedEventInput.data.previous_attributes.interval_start_at variant 2

anyOf variant 2.

- Value shape: null. Inclusive interval start instant. Each report type matches its own occurrence time. 

### ReportFailedEventInput.data.previous_attributes.report_id

### ReportFailedEventInput.data.previous_attributes.report_id variant 1

anyOf variant 1: Stable identifier of the report..

- Value shape: string. Stable identifier of the report. Stable identifier of the report. pattern: `^rep_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rep_01KEZF7C00M947R0GYFMT8VXKJ"`. 

### ReportFailedEventInput.data.previous_attributes.report_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the report. 

### ReportFailedEventInput.data.previous_attributes.report_type

### ReportFailedEventInput.data.previous_attributes.report_type variant 1

anyOf variant 1: The report's type and column version. See the Reports guide for its columns..

- Value shape: string. The report's type and column version. See the Reports guide for its columns. Values: `"receivables_aging_v1"`, `"invoices_itemized_v1"`, `"gift_card_liability_v1"`, `"orders_itemized_v1"`, `"orders_itemized_v2"`, `"payments_itemized_v1"`, `"balance_transactions_itemized_v1"`, `"payouts_itemized_v1"`, `"tax_itemized_v1"`, `"tax_summarized_v1"`, `"merchant_billing_itemized_v1"`, `"tax_transactions_itemized_v1"`, `"tax_transactions_itemized_v2"`.

### ReportFailedEventInput.data.previous_attributes.report_type variant 2

anyOf variant 2.

- Value shape: null. The report's type and column version. See the Reports guide for its columns. 

### ReportFailedEventInput.data.previous_attributes variant 1.status

### ReportFailedEventInput.data.previous_attributes variant 1.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventInput.data.previous_attributes variant 1.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventInput.data.previous_attributes variant 1.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`.

### ReportFailedEventInput.data.previous_attributes.timezone

### ReportFailedEventInput.data.previous_attributes.timezone variant 1

anyOf variant 1: IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone..

- Value shape: string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. 

### ReportFailedEventInput.data.previous_attributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. 

### ReportFailedEventInput.data.previous_attributes variant 2.status

### ReportFailedEventInput.data.previous_attributes variant 2.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventInput.data.previous_attributes variant 2.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventInput.data.previous_attributes variant 2.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"succeeded"`.

### ReportFailedEventInput.data.previous_attributes variant 3.status

### ReportFailedEventInput.data.previous_attributes variant 3.status variant 1

anyOf group 1 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes..

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"pending"`, `"succeeded"`, `"failed"`.

### ReportFailedEventInput.data.previous_attributes variant 3.status variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. 

### ReportFailedEventInput.data.previous_attributes variant 3.status variant 3, 5

anyOf group 2 variant 1: pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes.; anyOf group 3 variant 1.

- Value shape: string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Values: `"failed"`.

### ReportFailedEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

