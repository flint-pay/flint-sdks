[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionUpdatedEvent

The `tax_connection.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [TaxConnectionUpdatedEventData](../models/TaxConnectionUpdatedEventData.md#taxconnectionupdatedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"tax_connection.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TaxConnectionUpdatedEventRequest](../models/TaxConnectionUpdatedEventRequest.md#taxconnectionupdatedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### TaxConnectionUpdatedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributes). |

### TaxConnectionUpdatedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TaxConnection.md#taxconnection).

### TaxConnectionUpdatedEvent.data fields 1.object.coverage[]

Field definitions: [TaxConnectionResponse.data.coverage[]](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage).

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](TaxConnectionUpdatedEventDataPreviousAttributes.md#taxconnectionupdatedeventdatapreviousattributes).

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1

anyOf variant 1: Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax..

- Value shape: Array of [TaxCountryCoverage](../models/TaxCountryCoverage.md#taxcountrycoverage). Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 2

anyOf variant 2.

- Value shape: null. Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1

Field definitions: [TaxConnectionResponse.data.coverage[]](../models/TaxConnectionResponse.md#taxconnectionresponsedatacoverage).

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When the connection record was created..

- Value shape: string. When the connection record was created. When the connection record was created. Format: `date-time`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the connection record was created. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name variant 1

anyOf variant 1: Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available..

- Value shape: string. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name variant 2

anyOf variant 2.

- Value shape: null. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Whether automatic tax is connected and can calculate tax..

- Value shape: string. Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether automatic tax is connected and can calculate tax. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status_reason

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status_reason variant 1

anyOf variant 1: Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`..

- Value shape: (string or null). Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: `"not_offered"`, `"onboarding_required"`, `"tax_category_required"`, `"registration_required"`, `"temporarily_unavailable"`, `"setup_incomplete"`, `"registration_rejected"`, `"business_details_changed"`, `"support_required"`, `"disconnected"`, `"other"`, `null`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.supported_actions

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write..

- Value shape: Array of string. Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.tax_connection_id

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.tax_connection_id variant 1

anyOf variant 1: Flint tax connection ID. Present once the first registration or connection creates a record..

- Value shape: string. Flint tax connection ID. Present once the first registration or connection creates a record. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.tax_connection_id variant 2

anyOf variant 2.

- Value shape: null. Flint tax connection ID. Present once the first registration or connection creates a record. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.updated_at

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the connection record's public state last changed..

- Value shape: string. When the connection record's public state last changed. When the connection record's public state last changed. Format: `date-time`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the connection record's public state last changed. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.version

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Current resource version. Send as expected_version to reject a write based on an older version..

- Value shape: integer. Current resource version. Send as expected_version to reject a write based on an older version. Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current resource version. Send as expected_version to reject a write based on an older version. 

