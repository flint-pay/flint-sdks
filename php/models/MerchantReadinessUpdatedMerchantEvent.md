[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedMerchantEvent

The `merchant.readiness_updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [MerchantReadinessUpdatedMerchantEventData](../models/MerchantReadinessUpdatedMerchantEventData.md#merchantreadinessupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantReadinessUpdatedMerchantEvent.md#merchantreadinessupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant.readiness_updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantReadinessUpdatedMerchantEventRequest](../models/MerchantReadinessUpdatedMerchantEventRequest.md#merchantreadinessupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### MerchantReadinessUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`. `object`: [field definitions](../models/MerchantReadinessUpdatedMerchantEvent.md#merchantreadinessupdatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantReadinessUpdatedMerchantEvent.md#merchantreadinessupdatedmerchanteventdata-fields-1previous_attributes). |

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`.

Field definitions: [shared fields](MerchantReadinessUpdatedMerchantEventData.md#merchantreadinessupdatedmerchanteventdataobject-fields-1).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object.address

Field definitions: [MerchantResponse.data.address](../models/MerchantResponse.md#merchantresponsedataaddress).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object.icon

Field definitions: [MerchantResponse.data.icon](../models/MerchantResponse.md#merchantresponsedataicon).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object.logo

Field definitions: [MerchantResponse.data.logo](../models/MerchantResponse.md#merchantresponsedatalogo).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.object.readiness

Field definitions: [MerchantResponse.data.readiness](../models/MerchantResponse.md#merchantresponsedatareadiness).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributes).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.address

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesaddress).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.api_version

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.api_version_changed_at

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_changed_at](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_changed_at).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.api_version_pinned_at

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_pinned_at](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_pinned_at).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.api_version_previous

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.api_version_rollback_expires_at

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.business_name

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_name](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_name).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.business_type

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_type](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_type).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.email

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.email](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesemail).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.icon

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesicon).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.logo

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeslogo).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.merchant_id](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesmerchant_id).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.phone

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.phone](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesphone).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.readiness

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.status](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesstatus).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.support_email

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_email](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_email).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.support_phone

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_phone](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_phone).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.support_url

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_url](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_url).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.timezone

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributestimezone).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.version](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesversion).

### MerchantReadinessUpdatedMerchantEvent.data fields 1.previous_attributes.website_url

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.website_url](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeswebsite_url).

