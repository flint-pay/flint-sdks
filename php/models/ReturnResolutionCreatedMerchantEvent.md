[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionCreatedMerchantEvent

The `return_resolution.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnResolutionCreatedMerchantEventData](../models/ReturnResolutionCreatedMerchantEventData.md#returnresolutioncreatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_resolution.created"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnResolutionCreatedMerchantEventRequest](../models/ReturnResolutionCreatedMerchantEventRequest.md#returnresolutioncreatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnResolutionCreatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReturnResolutionCreatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ReturnResolution.md#returnresolution).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.canceled_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.confirmed_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].confirmed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.created_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.execution_blockers[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].execution_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

