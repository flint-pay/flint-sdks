[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionUpdatedEventInput

The `tax_connection.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"tax_connection.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### TaxConnectionUpdatedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributes). |

### TaxConnectionUpdatedEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `coverage` | Required | Array of [TaxCountryCoverageInput](../models/TaxCountryCoverageInput.md#taxcountrycoverageinput) | Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. |
| `created_at` | Optional | string | When the connection record was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disclosure` | Required | [TaxConnectionDisclosureInput](../models/TaxConnectionDisclosureInput.md#taxconnectiondisclosureinput) | Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee. |
| `legal_address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. |
| `legal_business_name` | Optional | string | Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. |
| `seller_attestation` | Required | [TaxConnectionSellerAttestationInput](../models/TaxConnectionSellerAttestationInput.md#taxconnectionsellerattestationinput) or null | The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. |
| `status` | Required | string | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. |
| `status_reason` | Required | string or null | Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: [12 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). |
| `supported_actions` | Required | Array of string | Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`. |
| `tax_connection_id` | Optional | string | Flint tax connection ID. Present once the first registration or connection creates a record. Example: `"tcn_01KEZF7C007Y42FMVNHV3P27QN"`. |
| `updated_at` | Optional | string | When the connection record's public state last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Optional | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

### TaxConnectionUpdatedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `coverage` | Optional | Array of [TaxCountryCoverageInput](../models/TaxCountryCoverageInput.md#taxcountrycoverageinput) or null | Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. `coverage`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributescoverage). |
| `created_at` | Optional | string or null | When the connection record was created. `created_at`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributescreated_at). |
| `disclosure` | Optional | [TaxConnectionDisclosureInput](../models/TaxConnectionDisclosureInput.md#taxconnectiondisclosureinput) or null | Current statements the seller must agree to before connecting. |
| `legal_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) or null or null | Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. |
| `legal_business_name` | Optional | string or null | Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. `legal_business_name`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributeslegal_business_name). |
| `seller_attestation` | Optional | [TaxConnectionSellerAttestationInput](../models/TaxConnectionSellerAttestationInput.md#taxconnectionsellerattestationinput) or null or null | The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. |
| `status` | Optional | string or null | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. `status`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributesstatus). |
| `status_reason` | Optional | string or null or null | Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: [12 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). `status_reason`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`. `supported_actions`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributessupported_actions). |
| `tax_connection_id` | Optional | string or null | Flint tax connection ID. Present once the first registration or connection creates a record. `tax_connection_id`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributestax_connection_id). |
| `updated_at` | Optional | string or null | When the connection record's public state last changed. `updated_at`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Current resource version. Send as expected_version to reject a write based on an older version. `version`: [declared alternatives](../models/TaxConnectionUpdatedEventInput.md#taxconnectionupdatedeventinputdataprevious_attributesversion). |

### TaxConnectionUpdatedEventInput.data.previous_attributes.coverage

### TaxConnectionUpdatedEventInput.data.previous_attributes.coverage variant 1

anyOf variant 1: Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax..

- Value shape: Array of [TaxCountryCoverageInput](../models/TaxCountryCoverageInput.md#taxcountrycoverageinput). Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.coverage variant 2

anyOf variant 2.

- Value shape: null. Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.created_at

### TaxConnectionUpdatedEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the connection record was created..

- Value shape: string. When the connection record was created. When the connection record was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the connection record was created. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.legal_business_name

### TaxConnectionUpdatedEventInput.data.previous_attributes.legal_business_name variant 1

anyOf variant 1: Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available..

- Value shape: string. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.legal_business_name variant 2

anyOf variant 2.

- Value shape: null. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.status

### TaxConnectionUpdatedEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether automatic tax is connected and can calculate tax..

- Value shape: string. Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`.

### TaxConnectionUpdatedEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether automatic tax is connected and can calculate tax. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.status_reason

### TaxConnectionUpdatedEventInput.data.previous_attributes.status_reason variant 1

anyOf variant 1: Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`..

- Value shape: (string or null). Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: `"not_offered"`, `"onboarding_required"`, `"tax_category_required"`, `"registration_required"`, `"temporarily_unavailable"`, `"setup_incomplete"`, `"registration_rejected"`, `"business_details_changed"`, `"support_required"`, `"disconnected"`, `"other"`, `null`.

### TaxConnectionUpdatedEventInput.data.previous_attributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.supported_actions

### TaxConnectionUpdatedEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write..

- Value shape: Array of string. Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`.

### TaxConnectionUpdatedEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.tax_connection_id

### TaxConnectionUpdatedEventInput.data.previous_attributes.tax_connection_id variant 1

anyOf variant 1: Flint tax connection ID. Present once the first registration or connection creates a record..

- Value shape: string. Flint tax connection ID. Present once the first registration or connection creates a record. Flint tax connection ID. Present once the first registration or connection creates a record. Example: `"tcn_01KEZF7C007Y42FMVNHV3P27QN"`. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.tax_connection_id variant 2

anyOf variant 2.

- Value shape: null. Flint tax connection ID. Present once the first registration or connection creates a record. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.updated_at

### TaxConnectionUpdatedEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the connection record's public state last changed..

- Value shape: string. When the connection record's public state last changed. When the connection record's public state last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the connection record's public state last changed. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.version

### TaxConnectionUpdatedEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current resource version. Send as expected_version to reject a write based on an older version..

- Value shape: integer. Current resource version. Send as expected_version to reject a write based on an older version. Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. 

### TaxConnectionUpdatedEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current resource version. Send as expected_version to reject a write based on an older version. 

### TaxConnectionUpdatedEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

