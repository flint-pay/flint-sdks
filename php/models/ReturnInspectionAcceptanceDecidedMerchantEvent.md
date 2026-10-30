[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedMerchantEvent

The `return_inspection.acceptance_decided` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnInspectionAcceptanceDecidedMerchantEventData](../models/ReturnInspectionAcceptanceDecidedMerchantEventData.md#returninspectionacceptancedecidedmerchanteventdata) | `data`: [field definitions](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_inspection.acceptance_decided"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnInspectionAcceptanceDecidedMerchantEventRequest](../models/ReturnInspectionAcceptanceDecidedMerchantEventRequest.md#returninspectionacceptancedecidedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnInspection](../models/ReturnInspection.md#returninspection) | An assessment of the condition of returned items. `object`: [field definitions](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1object). |

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.object

An assessment of the condition of returned items.

Field definitions: [shared fields](ReturnInspection.md#returninspection).

