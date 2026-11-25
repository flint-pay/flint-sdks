[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopArchivedMerchantEvent

The `shop.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ShopArchivedMerchantEventData](../models/ShopArchivedMerchantEventData.md#shoparchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ShopArchivedMerchantEvent.md#shoparchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"shop.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ShopArchivedMerchantEventRequest](../models/ShopArchivedMerchantEventRequest.md#shoparchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ShopArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ShopArchivedMerchantEvent.md#shoparchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ShopArchivedMerchantEvent.md#shoparchivedmerchanteventdata-fields-1previous_attributes). |

### ShopArchivedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ShopArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](Shop.md#shop).

### ShopArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ShopArchivedMerchantEvent.data fields 1.object.redirects

Field definitions: [ShopResponse.data.redirects](../models/ShopResponse.md#shopresponsedataredirects).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributes).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.checkout_session_expires_in_seconds

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.checkout_session_expires_in_seconds](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributescheckout_session_expires_in_seconds).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.currency](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributescurrency).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.delivery_method_ids

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.delivery_method_ids](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesdelivery_method_ids).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.description](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesdescription).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.external_reference_id](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesexternal_reference_id).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.handle

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.handle](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributeshandle).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.image

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.image](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesimage).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.inactive_message

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.inactive_message](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesinactive_message).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.inventory_routing_source

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.inventory_routing_source](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesinventory_routing_source).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.listing_count

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.listing_count](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributeslisting_count).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.name](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesname).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.redirects

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.redirects](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesredirects).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.shop_id

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.shop_id](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesshop_id).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.status](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesstatus).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.url

Declared alternatives: [ShopArchivedMerchantEventDataPreviousAttributes.url](../models/ShopArchivedMerchantEventDataPreviousAttributes.md#shoparchivedmerchanteventdatapreviousattributesurl).

### ShopArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

