[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportFailedInstalledMerchantsEvent

The `report.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReportFailedInstalledMerchantsEvent.md#reportfailedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"report.failed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReportFailedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Report](../models/Report.md#report) | A report generated from the merchant's activity. `object`: [declared alternatives](../models/ReportFailedInstalledMerchantsEvent.md#reportfailedinstalledmerchantseventdataobject). |

### ReportFailedInstalledMerchantsEvent.data.object

A report generated from the merchant's activity.

Field definitions: [shared fields](Report.md#report).

### ReportFailedInstalledMerchantsEvent.data.object variant 1: `status` = `"pending"`

oneOf with status: "pending": A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportFailedInstalledMerchantsEvent.data.object variant 2: `status` = `"succeeded"`

oneOf with status: "succeeded": A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedInstalledMerchantsEvent.data.object variant 3: `status` = `"failed"`

oneOf with status: "failed": A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportFailedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

