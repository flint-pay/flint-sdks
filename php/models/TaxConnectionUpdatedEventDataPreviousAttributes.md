[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionUpdatedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `coverage` | Optional | Array of [TaxCountryCoveragePreviousAttributes](../models/TaxCountryCoveragePreviousAttributes.md#taxcountrycoveragepreviousattributes) or null | Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. `coverage`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage). |
| `created_at` | Optional | string or null | When the connection record was created. `created_at`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescreated_at). |
| `disclosure` | Optional | [TaxConnectionDisclosurePreviousAttributes](../models/TaxConnectionDisclosurePreviousAttributes.md#taxconnectiondisclosurepreviousattributes) or null | Current statements the seller must agree to before connecting. |
| `legal_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, uses an explicit legal_address supplied at connect, otherwise verified live details or the merchant profile, and retains the attested snapshot for retries and reconnects. `null` when no legal address is available. `legal_address`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address). |
| `legal_business_name` | Optional | string or null | Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, uses verified live details when available, otherwise the merchant profile, and retains the connected snapshot. Omitted when no name is available. `legal_business_name`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_business_name). |
| `seller_attestation` | Optional | [TaxConnectionSellerAttestationPreviousAttributes](../models/TaxConnectionSellerAttestationPreviousAttributes.md#taxconnectionsellerattestationpreviousattributes) or null | The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. `seller_attestation`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation). |
| `status` | Optional | string or null | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. `status`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesstatus). |
| `status_reason` | Optional | string or null | Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Values: [14 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). `status_reason`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lists connect when setup can complete, including by supplying legal_address in test mode and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. Items values: `"connect"`, `"disconnect"`. `supported_actions`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributessupported_actions). |
| `tax_connection_id` | Optional | string or null | Flint tax connection ID. Present once the first registration or connection creates a record. `tax_connection_id`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributestax_connection_id). |
| `updated_at` | Optional | string or null | When the connection record's public state last changed. `updated_at`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Current resource version. Send as expected_version to reject a write based on an older version. `version`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesversion). |

### TaxConnectionUpdatedEventDataPreviousAttributes.coverage

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage).

### TaxConnectionUpdatedEventDataPreviousAttributes.created_at

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.created_at](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescreated_at).

### TaxConnectionUpdatedEventDataPreviousAttributes.legal_address

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### TaxConnectionUpdatedEventDataPreviousAttributes.legal_business_name

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_business_name](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_business_name).

### TaxConnectionUpdatedEventDataPreviousAttributes.seller_attestation

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.seller_attestation](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesseller_attestation).

### TaxConnectionUpdatedEventDataPreviousAttributes.status

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesstatus).

### TaxConnectionUpdatedEventDataPreviousAttributes.status_reason

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.status_reason](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesstatus_reason).

### TaxConnectionUpdatedEventDataPreviousAttributes.supported_actions

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.supported_actions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributessupported_actions).

### TaxConnectionUpdatedEventDataPreviousAttributes.tax_connection_id

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.tax_connection_id](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributestax_connection_id).

### TaxConnectionUpdatedEventDataPreviousAttributes.updated_at

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.updated_at](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesupdated_at).

### TaxConnectionUpdatedEventDataPreviousAttributes.version

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.version](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributesversion).

