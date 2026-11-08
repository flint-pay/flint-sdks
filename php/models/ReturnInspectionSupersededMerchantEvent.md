[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionSupersededMerchantEvent

The `return_inspection.superseded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnInspectionSupersededMerchantEventData](../models/ReturnInspectionSupersededMerchantEventData.md#returninspectionsupersededmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnInspectionSupersededMerchantEvent.md#returninspectionsupersededmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_inspection.superseded"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnInspectionSupersededMerchantEventRequest](../models/ReturnInspectionSupersededMerchantEventRequest.md#returninspectionsupersededmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnInspectionSupersededMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1).

### ReturnInspectionSupersededMerchantEvent.data fields 1.object

Field definitions: [ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.object](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1object).

