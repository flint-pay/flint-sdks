[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedMerchantEvent

The `delivery_selection.committed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DeliverySelectionCommittedMerchantEventData](../models/DeliverySelectionCommittedMerchantEventData.md#deliveryselectioncommittedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliverySelectionCommittedMerchantEvent.md#deliveryselectioncommittedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_selection.committed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliverySelectionCommittedMerchantEventRequest](../models/DeliverySelectionCommittedMerchantEventRequest.md#deliveryselectioncommittedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DeliverySelectionCommittedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliverySelectionCommittedMerchantEvent.md#deliveryselectioncommittedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliverySelectionCommittedMerchantEvent.md#deliveryselectioncommittedmerchanteventdata-fields-1previous_attributes). |

### DeliverySelectionCommittedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliverySelection.md#deliveryselection).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object.buyer_location

Declared alternatives: [DeliverySelectionResponse.data.buyer_location](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatabuyer_location).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object.choices[]

Field definitions: [DeliverySelectionResponse.data.choices[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object.destination_address

Field definitions: [DeliverySelectionResponse.data.destination_address](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatadestination_address).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliverySelectionCommittedMerchantEvent.data fields 1.object.lifecycle_events[]

Field definitions: [DeliverySelectionResponse.data.lifecycle_events[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributes).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.buyer_location

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.buyer_location](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesbuyer_location).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.calculation_expires_at

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.calculation_expires_at](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescalculation_expires_at).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.checkout_session_id

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.checkout_session_id](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescheckout_session_id).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.choices

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.choices](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeschoices).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.created_at](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributescreated_at).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.delivery_quote_id

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_quote_id](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_quote_id).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.delivery_selection_id

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.delivery_selection_id](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdelivery_selection_id).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.destination_address

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.destination_address](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesdestination_address).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.expires_at](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesexpires_at).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.input_requirements

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.input_requirements](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinput_requirements).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.instructions

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.instructions](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesinstructions).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.lifecycle_events

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_events](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_events).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.lifecycle_updated_at

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.lifecycle_updated_at](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslifecycle_updated_at).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.limiting_deadline_reason

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.limiting_deadline_reason](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributeslimiting_deadline_reason).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.order_id](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesorder_id).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.private_data_status

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.private_data_status](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesprivate_data_status).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.redacted_at

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.redacted_at](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesredacted_at).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.status](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesstatus).

### DeliverySelectionCommittedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.supported_actions](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributessupported_actions).

