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

- Value shape: Array of [TaxCountryCoveragePreviousAttributes](../models/TaxCountryCoveragePreviousAttributes.md#taxcountrycoveragepreviousattributes). Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 2

anyOf variant 2.

- Value shape: null. Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_scope` | Optional | string or null | all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`. `category_scope`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage-variant-1-fields-1category_scope). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 destination country. `country`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage-variant-1-fields-1country). |

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.category_scope

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.category_scope variant 1

anyOf variant 1: all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges..

- Value shape: string. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.category_scope variant 2

anyOf variant 2.

- Value shape: null. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.country

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 destination country..

- Value shape: string. ISO 3166-1 alpha-2 destination country. ISO 3166-1 alpha-2 destination country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 destination country. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When the connection record was created..

- Value shape: string. When the connection record was created. When the connection record was created. Format: `date-time`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the connection record was created. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure

Current statements the seller must agree to before connecting.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statements` | Conditional | Array of object or null | Statements in display order. The seller must agree to every statement. `statements`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesdisclosure-variant-1statements). |
| `version` | Conditional | string or null | Opaque version of the exact rendered statements. Do not parse it. `version`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesdisclosure-variant-1version). |

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1

anyOf TaxConnectionDisclosurePreviousAttributes.

- Optional: `statements`, `version`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 2

anyOf variant 2.

- Undeclared: `statements`, `version`.
- Value shape: null. Current statements the seller must agree to before connecting. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 1

anyOf variant 1: Statements in display order. The seller must agree to every statement..

- Value shape: Array of object. Statements in display order. The seller must agree to every statement. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 2

anyOf variant 2.

- Value shape: null. Statements in display order. The seller must agree to every statement. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `text` | Optional | string or null | Text to show the seller verbatim. `text`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesdisclosure-variant-1statements-variant-1-fields-1text). |

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 1.[] fields 1.text

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 1.[] fields 1.text variant 1

anyOf variant 1: Text to show the seller verbatim..

- Value shape: string. Text to show the seller verbatim. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.statements variant 1.[] fields 1.text variant 2

anyOf variant 2.

- Value shape: null. Text to show the seller verbatim. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.version

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.version variant 1

anyOf variant 1: Opaque version of the exact rendered statements. Do not parse it..

- Value shape: string. Opaque version of the exact rendered statements. Do not parse it. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.disclosure variant 1.version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the exact rendered statements. Do not parse it. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address

Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Conditional | string or null | City or locality of the address. `city`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city). |
| `country` | Conditional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country). |
| `line1` | Conditional | string or null | Street address, including the building number. `line1`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1). |
| `line2` | Conditional | string or null | Apartment, suite, floor, or other address details. `line2`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2). |
| `postal_code` | Conditional | string or null | Postal or ZIP code of the address. `postal_code`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code). |
| `state` | Conditional | string or null | State, province, or region of the address. `state`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state). |

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1

anyOf variant 1: Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete.; anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 2, 3

anyOf variant 1: Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete.; anyOf variant 2; anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city variant 1

anyOf variant 1: City or locality of the address..

- Value shape: string. City or locality of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city variant 2

anyOf variant 2.

- Value shape: null. City or locality of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1 variant 1

anyOf variant 1: Street address, including the building number..

- Value shape: string. Street address, including the building number. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1 variant 2

anyOf variant 2.

- Value shape: null. Street address, including the building number. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2 variant 1

anyOf variant 1: Apartment, suite, floor, or other address details..

- Value shape: string. Apartment, suite, floor, or other address details. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2 variant 2

anyOf variant 2.

- Value shape: null. Apartment, suite, floor, or other address details. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code variant 1

anyOf variant 1: Postal or ZIP code of the address..

- Value shape: string. Postal or ZIP code of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code variant 2

anyOf variant 2.

- Value shape: null. Postal or ZIP code of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state variant 1

anyOf variant 1: State, province, or region of the address..

- Value shape: string. State, province, or region of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state variant 2

anyOf variant 2.

- Value shape: null. State, province, or region of the address. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name variant 1

anyOf variant 1: Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available..

- Value shape: string. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name variant 2

anyOf variant 2.

- Value shape: null. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation

The seller's recorded agreement to the disclosure. `null` when no connect has recorded one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attested_at` | Conditional | string or null | When Flint recorded the seller's agreement. `attested_at`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation-variant-1attested_at). |
| `disclosure_version` | Conditional | string or null | Opaque version of the disclosure the seller agreed to. `disclosure_version`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation-variant-1disclosure_version). |

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1

anyOf variant 1: The seller's recorded agreement to the disclosure. `null` when no connect has recorded one.; anyOf TaxConnectionSellerAttestationPreviousAttributes.

- Optional: `attested_at`, `disclosure_version`.

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 2, 3

anyOf variant 1: The seller's recorded agreement to the disclosure. `null` when no connect has recorded one.; anyOf variant 2; anyOf variant 2.

- Undeclared: `attested_at`, `disclosure_version`.
- Value shape: null. The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.attested_at

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.attested_at variant 1

anyOf variant 1: When Flint recorded the seller's agreement..

- Value shape: string. When Flint recorded the seller's agreement. When Flint recorded the seller's agreement. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.attested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the seller's agreement. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.disclosure_version

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.disclosure_version variant 1

anyOf variant 1: Opaque version of the disclosure the seller agreed to..

- Value shape: string. Opaque version of the disclosure the seller agreed to. 

### TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation variant 1.disclosure_version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the disclosure the seller agreed to. 

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

